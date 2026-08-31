$("document").ready(function () {
  var username_state = false;
  var email_state = false;
  var mobile_state = false;

  $("#email").on("blur", function () {
    var email = $("#email").val();
    if (email == "") {
      email_state = false;
      return;
    }
    $.ajax({
      url: config.routes.email,
      type: "post",
      data: {
        email_check: 1,
        _token: config.routes.csrf,
        email: email,
      },
      success: function (response) {
        if (response.status == false) {
          email_state = false;
          $("#emailerro").addClass("text-danger");
          $("#emailerro").removeClass("text-success");
          $("#emailerro").text("Sorry... Email already taken");
          $("#email").addClass("error");
          return false;
        } else if (response.status == true) {
          email_state = true;
          $("#emailerro").text("");
          $("#emailerro").removeClass("text-danger");
          $("#email").removeClass("error");
          // $('#emailerro').addClass("text-success");
          // $('#emailerro').removeClass("text-danger");
          // $('#emailerro').text('Email available');
        } else {
          email_state = false;
          $("#emailerro").addClass("text-danger");
          $("#emailerro").removeClass("text-success");
          $("#emailerro").text("Sorry... Email already taken");
        }
      },
    });
  });

  $("#mobile").on("blur", function () {
    var code = $("#mobile").intlTelInput("getSelectedCountryData").dialCode;
    var phoneNumber = $("#mobile").val();
    var name = $("#mobile").intlTelInput("getSelectedCountryData").name;
    // console.log('Country Code : ' + code + '\nPhone Number : ' + phoneNumber + '\nCountry Name : ' + name);

    var mobile = $("#mobile").val();
    if (mobile == "") {
      mobile_state = false;
      return;
    }
    $.ajax({
      url: config.routes.mobile,
      type: "post",
      data: {
        mobile_check: 1,
        _token: config.routes.csrf,
        mobile: mobile,
      },
      success: function (response) {
        if (response.status == false) {
          mobile_state = false;
          $("#mobileerro").addClass("text-danger");
          $("#mobileerro").removeClass("text-success");
          $("#mobileerro").text("Sorry... Mobile already taken");
          $("#mobile").addClass("error");
        } else if (response.status == true) {
          mobile_state = true;
          $("#country_code").val(code);
          $("#country").val(name);
          $("#mobileerro").text("");
          $("#mobileerro").removeClass("text-danger");
          $("#mobile").removeClass("error");
          // $('#mobileerro').addClass("text-success");
          // $('#mobileerro').removeClass("text-danger");
          // $('#mobileerro').text('Mobile available');
        } else {
          mobile_state = false;
          $("#mobileerro").addClass("text-danger");
          $("#mobileerro").removeClass("text-success");
          $("#mobileerro").text("Sorry... Mobile already taken");
        }
      },
    });
  });

  $("#reg_btn").on("click", function () {
    var username = $("#username").val();
    var email = $("#email").val();
    var password = $("#password").val();
    if (username_state == false || email_state == false) {
      $("#error_msg").text("Fix the errors in the form first");
    } else {
      // proceed with form submission
      $.ajax({
        url: "register.php",
        type: "post",
        data: {
          save: 1,
          email: email,
          username: username,
          password: password,
        },
        success: function (response) {
          alert("user saved");
          $("#username").val("");
          $("#email").val("");
          $("#password").val("");
        },
      });
    }
  });
  jQuery(".validatedForm").validate({
    rules: {
      name: {
        required: true,
        regex: /^(?![.'-])[\p{L} .'-]+$/u,
      },
      password: {
        minlength: 5,
      },
      confirm_password: {
        minlength: 5,
        equalTo: "#password",
      },
      mobile: {
        required: true,
        digits: true,
        maxlength:50,
      },
      email: {
        required: true,
        email: true,
      },
      description: {
        required: true,
      },
      qualification: {
        required: true,
      },
      image: {
        required: true,
      },
      identity_image: {
        required: true,
      },
      language: {
        required: true,
      },
      achievements: {
        required: true,
      },
      what_brings_you: {
        required: true,
      },
      Terms: {
        required: true,
      },
    },
    messages: {
      username: {
        required: "Please enter username",
      },
      name: {
        required: "Please enter name",
        pattern: "User name can only contain letters, numbers, and underscores",
      },
      mobile: {
        required: "Please enter your phone number",
        digits: "Please enter a valid phone number",
        minlength: "Phone number field accept only 10 digits",
        maxlength: "Phone number field accept only 10 digits",
      },
      email: {
        required: "Please enter email address",
        email: "Please enter a valid email address",
      },
      address: {
        required: "Please enter address",
      },
      qualification: {
        required: "Please select highest qualification",
      },
      experience: {
        required: "Please enter experience",
      },
      expertise: {
        required: "Please enter expertise",
      },
      excepted_charges: {
        required: "Please enter expected Charges",
      },
      image: {
        required: "Please upload profile photo",
      },
      identity_image: {
        required: "Please upload ID proof",
      },
      description: {
        required: "Please write something about yourself",
      },
      language: {
        required: "Please enter language",
      },
      achievements: {
        required: "Please provide your achievements",
      },
      what_brings_you: {
        required: "Please provide a valid response",
      },
      Terms: {
        required: "Please agree to the terms",
      },
    },
    errorPlacement: function (error, element) {
      error.insertAfter(element);
      // error.remove(element);
      // }
    },
    // errorElement : 'div',
    // errorLabelContainer: '.errorTxt'
    submitHandler: function (form) {
      if (!email_state) {
        console.log("no email");
        $("#emailerro").addClass("text-danger");
          $("#emailerro").removeClass("text-success");
          $("#emailerro").text("Sorry... Email already taken");
          $("#email").addClass("error");
          $("#email").focus();
        // Email is not valid, do not submit the form
        return false;
      }
      if (!mobile_state) {
          $("#mobileerro").addClass("text-danger");
          $("#mobileerro").removeClass("text-success");
          $("#mobileerro").text("Sorry... Mobile already taken");
          $("#mobile").addClass("error");
          $("#mobile").focus();

        
        return false;
      }

      return true
    },

  });
});

$(function () {
  var code = "+91"; // Assigning value from model.
  $("#mobile").val(code);
  $("#mobile").intlTelInput({
    autoHideDialCode: true,
    autoPlaceholder: "ON",
    dropdownContainer: document.body,
    formatOnDisplay: true,
    hiddenInput: "full_number",
    initialCountry: "auto",
    nationalMode: true,
    placeholderNumberType: "MOBILE",
    preferredCountries: ["US"],
    separateDialCode: true,
  });
});
$.validator.addMethod(
  "regex",
  function (value, element, regexp) {
    return this.optional(element) || regexp.test(value);
  },
  "Please enter a valid format."
);

function validateFileSize(input, maxSizeKB) {
  if (input.files && input.files[0]) {
      const fileSize = input.files[0].size / 1024; // Size in KB
      const maxSize = maxSizeKB; // Maximum size in KB

      if (fileSize > maxSize) {
          alert('File size exceeds the maximum limit of ' + maxSizeKB + ' KB.');
          input.value = ''; // Clear the file input
      }
  }
}




