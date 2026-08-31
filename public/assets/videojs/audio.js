var rtc = {
  // For the local client.
  client: null,
  // For the local audio track.
  localAudioTrack: null,
};

var options = {
  appId: $("#appid").val(),
  channel: null,
  token: null,
};

var localTracks = {
  videoTrack: null,
  audioTrack: null
};

var localTrackState = {
  videoTrackEnabled: true,
  audioTrackEnabled: true
}

// the demo can auto join channel with params in url
$(() => {
  var urlParams = new URL(location.href).searchParams;
  options.appid = $("#appid").val();
  options.channel = urlParams.get("channel");
  if (options.appid && options.channel) {
    $("#channel").val(options.channel);
    $("#join-form").submit();
  }
})

$("#join-form").submit(async function (e) {
  e.preventDefault();
  $("#join").attr("disabled", true);
  $("#join").hide();
  try {
    options.appid = $("#appid").val();
    options.channel = $("#channel").val();
    await join();
  } catch (error) {
    console.error(error);
  } finally {
    $("#leave").attr("disabled", false);
  }
})

$("#leave").click(function (e) {
  leaveCall();
  window.location=back_links;
})

async function leaveCall() {
  // Destroy the local audio and track.
  rtc.localAudioTrack.close();
  // Leave the channel.
  await rtc.client.leave();
  $("#mic-btn").prop("disabled", true);
  $("#join").attr("disabled", false);
  $("#leave").attr("disabled", true);
}

async function join() {
  rtc.client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
  const uid = await rtc.client.join(options.appId, options.channel, options.token, null);
  showMuteButton();
  // Create an audio track from the audio sampled by a microphone.
  rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
  // Publish the local audio track to the channel.
  await rtc.client.publish([rtc.localAudioTrack]);
  $("#local-player-name").append(`<div id="player-wrapper-${uid}">
  <p class="player-name">localUser(${uid})</p>
</div>`);
  // publish local tracks to channel
  console.log("Successfully published.");
  rtc.client.on("user-published", async (user, mediaType) => {
    // Subscribe to a remote user.
    await rtc.client.subscribe(user, mediaType);
    console.log("Successfully subscribed.");
    // If the subscribed track is audio.
    
    if (mediaType === "audio") {
      const player = $(`
          <div id="player-wrapper-${uid}">
            <p class="player-name">remoteUser(${uid})</p>
          </div>
        `);
      // $("#remote-playerlist").append(player);
      // Get `RemoteAudioTrack` in the `user` object.
      const remoteAudioTrack = user.audioTrack;
      
      // Play the audio track. No need to pass any DOM element.
      remoteAudioTrack.play();
    }
  });
  rtc.client.on("user-unpublished", user => {
    // Get the dynamically created DIV container.
    const playerContainer = document.getElementById("player-wrapper-" + uid);
    // Destroy the container.
    playerContainer.remove();
  });
}
$("#mute-audio").click(function (e) {
  console.log(rtc.localAudioTrack);
  // if (rtc.localAudioTrack) {
  //   muteAudio();
  // } else {
  //   unmuteAudio();
  // }
});
function showMuteButton() {
  $("#mute-video").css("display", "inline-block");
  $("#mute-audio").css("display", "inline-block");
}
async function muteAudio() {
  if (!rtc.localAudioTrack) return;
  await rtc.localAudioTrack.setEnabled(false);
  rtc.localAudioTrack = false;
  $("#mute-audio").html('<i class="fal fa-microphone-slash font-size-16 align-middle"></i>');
}
async function unmuteAudio() {
  if (!rtc.localAudioTrack) return;
  await rtc.localAudioTrack.setEnabled(true);
  rtc.localAudioTrack = true;
  $("#mute-audio").html('<i class="fal fa-microphone font-size-16 align-middle"></i>');
}

$("#forceend").click(function (e) {
  if (confirm('Are you sure you want to end this session?')) {
      var data = new FormData();
      data.append('_token', csrf_token);
      data.append('ids', ids);
      $.ajax({
              type: "POST",
              enctype: 'multipart/form-data',
              url: agongoing,
              data: data,
              processData: false,
              contentType: false,
              cache: false,
              timeout: 600000,
              success: function (data) {
                  alert('Booking End Successfull!')
                  window.location=back_links;
              },
              error: function (e) {
                  console.log("ERROR : ", e);
              }
          });
  }
});

