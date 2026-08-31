$('div');
Zepto(function ($) {
	var base_url = 'http://localhost/onstrip2022jan/';
	$('#err_msg').hide();
	$('#err_msg2').hide();
	$('#tc_err').hide();
	$('#error_message').hide();
	$("#error_message_reply").hide()


	$(document).on('ajaxStart', function (e, xhr, options) {
		$("#loading").show();
		$("#appointment_struc").hide();
		$("#comment_loader").show();
		$("#reply_loader").show();
		$("#loadingsignup").show();
		$("#loadingotp").show();
		$("#loadingotpforgetpwd").show();
		$("#loadingotppwd").show();
		$("#loadingotpforgetpwd11").show();
		$('#loadingsignupotpverify').show();
		$('#loadinglogin').show()
		$('#loadingloginOtpverify').show()
		$('#loadingloginc').show()
		$('#loadingloginOtpverifyc').show()
		$('#loadingsignupresendotpverify').show();


		// console.log('ajax_start');

		// This gets fired for every Ajax request performed on the page.
		// The xhr object and $.ajax() options are available for editing.
		// Return false to cancel this request.
	})

	$(document).on('ajaxStop', function (e, xhr, options) {
		$("#loading").hide();
		$("#comment_loader").hide();
		$("#reply_loader").hide();
		$("#loadingsignup").hide();
		$("#loadingotp").hide();
		$("#loadingotpforgetpwd").hide();
		$("#loadingotppwd").hide();
		$("#loadingotpforgetpwd11").hide();
		$('#loadingsignupotpverify').hide();
		$('#loadinglogin').hide()
		$('#loadingloginOtpverify').hide()
		$('#loadingloginc').hide()
		$('#loadingloginOtpverifyc').hide()
		$('#loadingsignupresendotpverify').hide();

		// console.log('ajax_stop');


		// This gets fired for every Ajax request performed on the page.
		// The xhr object and $.ajax() options are available for editing.
		// Return false to cancel this request.
	})

	// Login
	$('#content').on('click', function (e) {
		var email = $("#email_phone").val();
		var password = $("#loginPassword").val();
		var back_link = $("#back_linklogin").val();
		console.log(back_link);
		if (email != '' || password != '') {
			var apiurl = base_url + "Login";
			$.post(apiurl, { phone: email, password: password, back_link: back_link }, function (response) {
				if (response == 1) {
					if (back_link != '') {
						window.location = back_link;
					}
					else {
						window.location = base_url;
					}
				}
				else {
					$('#err_msg2').show();
					$('#err_msg').hide();
				}
			});
		}
		else {
			$('#err_msg').show();
			$('#err_msg2').hide();
		}

	})


	// Forget Password
	$('#content2').on('click', function (e) {
		var email = $("#emailAddress").val();
		if (email != '') {
			var apiurl = base_url + "Forget";
			$.post(apiurl, { email: email }, function (response) {
				var f = $.parseJSON(response)
				if (f['status'] == true) {
					$("#forgetpage").hide();
					$("#forgetotp").show();
					var tokeid = '<input type="hidden" id="main_token_for_forget_pwd" value="' + f['token'] + '" name="_token">';
					$("#tokenforgetpwd").html(tokeid);
					var otp = '';//f['otp'];
					$("#viewotpforgetpwd").html(otp);
				}
				else {
					var error_message = f['msg'];
					$("#error_message_shown_forget").html(error_message);
				}
			});
		}
		else {
			var error_message = '* Something Error Happen Please try again later';
			$("#error_message_shown_forget").html(error_message);
		}

	})

	// Resend OTP
	$('#content23').on('click', function (e) {
		var _token = $("#main_token_for_forget_pwd").val();
		var apiurl = base_url + "ResendOtp";
		$.post(apiurl, { _token: _token }, function (response) {
			if (response == 1) {
				$("#loadingotpforgetpwd").hide();
				var error_message = '* OTP Resend Successfully';
				$("#error_message_shown_forget_two1").html(error_message);
				var tokeid = '<input type="hidden" id="main_token_for_change_pwd" value="' + _token + '" name="_token">';
				$("#tokenchangepwd").html(tokeid);
			}
			else {
				var error_message = '* Something Error Happen Please try again later';
				$("#error_message_shown_forget_two1").html(error_message);
			}
		});

	})

	$('#content23456').on('click', function (e) {
		var otp = $("#ipotpfwd").val();
		var _token = $("#main_token_for_forget_pwd").val();
		if (otp != '') {
			var apiurl = base_url + "Otpverifypwd";
			$.post(apiurl, { otp: otp, _token: _token }, function (response) {
				if (response == 1) {
					$("#forgetotp").hide();
					$("#changepasswordotp").show();
					$("#loadingotppwd").hide();
					var tokeid = '<input type="hidden" id="main_token_for_change_pwd" value="' + _token + '" name="_token">';
					$("#tokenchangepwd").html(tokeid);
				}
				else if (response == 2) {
					var error_message = '* Incorrect OTP';
					$("#error_message_shown_forget_two1").html(error_message);
				}
				else {
					var error_message = '* Incorrect OTP';
					$("#error_message_shown_forget_two1").html(error_message);
				}
			});

		}
		else {
			var error_message = '* Something error happen please try again later';
			$("#error_message_shown_forget_two1").html(error_message);
		}

	})

	$('#add-member123').on('click', function (e) {
		var mname = $("#mname").val();
		var memail = $("#memail").val();
		var mmobile = $("#mmobile").val();
		var mage = $("#mage").val();
		var mgender = $("#mgender").val();
		var mrelation = $("#mrelation").val();
		if (mname != '' && memail != '' && mmobile != '' && mage != '' && mgender != '' && mrelation != '') {
			var apiurl = addMember;
			$.post(apiurl, {
				name: mname, email: memail, mobile: mmobile,
				age: mage, gender: mgender, mrelation: mrelation, _token: csrf_token
			}, function (response) {
				if (response) {
					var apiurl2 = getMember;
					$.post(apiurl2, { _token: csrf_token }, function (response) {
						if (response) {
							closeaddmember();
							$('#memberlistc').html(response.lista);
							$("#mname").val('')
							$("#memail").val('')
							$("#mmobile").val('')
							$("#mage").val('')
							$("#mgender").val('')
							$("#mrelation").val('')
						}

					});
					var error_message = '* Member added successfully';
					$("#membermsgsucc").html(error_message);
					$("#membermsgerr").html();
				}
				else {
					var error_message = '* Something Error Happen Please try again later';
					$("#membermsgerr").html(error_message);
				}
			});
		}
		else {
			var error_message = '* All fields required!';
			$("#membermsgerr").html(error_message);
		}
	})

	// Change Password
	$('#content3').on('click', function (e) {
		var password = $("#password").val();
		var _token = $("#_token").val();
		if (_token != '' || password != '') {
			$.post('change_password.php', { password: password, _token: _token }, function (response) {
				if (response == 1) {
					$("#first_box").hide();
					var second_box = '<div id="success_password" class="details"> <a href="index.php"> <img src="website_composition/assets/img/logos/logo-2.png" alt="logo"> </a> <h3>Password Change Successfully.</h3> <h6 style="color: #4fb6d0;">* You should receive a new password in a few moments. Now you can login click on <a href="login.php">Login</a>.</h6></div>';
					$('#second_box').show();
					$("#second_box").html(second_box);
					alert('Password Updated!');
					window.location = 'index.php';
				}
				else {
					$('#err_msg2').show();
				}
			});

		}
		else {
			$('#err_msg').show();
			// $('#err_msg2').hide();
		}

	})
	$('#content4').on('click', function (e) {
		var ngmobile = $("#emailphone").val();
		var country_code = $("#country_code").val();
		var country = $("#country").val();
		if (ngmobile != '') {
			var apiurl = userCheck2;
			$.post(apiurl, { mobile: ngmobile, _token: csrf_token }, function (response) {
				if (response.status == true) {
					$("#login-row").hide();
					$("#otpscreen").show();
					$("#otpscreen").removeClass("d-none");
					$("#otpscreen").addClass("d-flex");
					var tokeid = '<input type="hidden" id="mainphi" value="' + response.mainphi + '" name="_token">';

					$("#tokenlogin").html(tokeid);
					// var otp = response.otp;//f['otp'];
					// $( "#viewotp" ).html( otp );
					$("#content5").show();
					$("#error_message_shown").html("");
					$("#error_message_shownstep2").html("");
					$("#checkSetpLevel").val('1');

				}
				else {
					var error_message = response.msg;
					$("#error_message_shown").html(error_message);
					$("#content4").show();
					$("#content5").hide();
					$("#otpscreen").hide();
					$("#otpscreen").removeClass("d-flex");
					$("#otpscreen").addClass("d-none");
					//  $("#otpscreen").removeClass("d-flex");
				}
			});
		}
		else {
			$("#error_message_shown").html("Email or Phone required!");
			$("#content4").show();
			$("#content5").hide();
			$("#otpscreen").hide();
			$("#otpscreen").removeClass("d-flex");
			$("#otpscreen").addClass("d-none");
			//    $("#otpscreen").removeClass("d-flex");
		}
	})
	$('#backtologin').on('click', (e) => {
		$("#otplogin").val("");
	})
	$('#content5').on('click', function (e) {
		var mainphi = $("#mainphi").val();
		var ipotp = $("#otplogin").val();
		if (mainphi != '' && ipotp != '') {
			var apiurl = userOtpCheck2;
			$.post(apiurl, { mainphi: mainphi, ipotp: ipotp, _token: csrf_token }, function (response) {
				if (response.status) {
					window.location.reload();
				}
				else {
					var error_message = '* OTP Not match';
					$("#error_message_shown_otplogin").html(error_message);
				}
			});
		}
		else {
			$("#error_message_shown_otplogin").html("OTP required!");
		}
	})
	// Registration



	$('#registerotpverify').on('click', function (e) {
		var otp = $("#otpregister").val();
		var main_tokenreg = $("#main_tokenreg").val();
		var back_link = $("#back_linksignup").val();
		if (otp != '') {
			var apiurl = otpverify;
			$.post(apiurl, { otp: otp, main_tokenreg: main_tokenreg, _token: csrf_token }, function (response) {
				if (response) {
					if (response.re == 1) {
						if (back_link != '') {

							window.location.reload();
						}
						else {
							window.location.reload();
						}
					}
					else {
						var error_message = '* OTP not matched';
						$("#error_message_shown_otpregister").html(error_message);
					}
				}
				else {
					var error_message = '* OTP not matched';
					$("#error_message_shown_otpregister").html(error_message);
				}
			});

		}
		else {
			var error_message = '* OTP required';
			$("#error_message_shown_otpregister").html(error_message);
		}
	})
	$('#regback').on('click', function (e) {
		$('#ng-name').val('');
		$('#ng-email').val('');
		$('#ng-mobile').val('');
		$('#ng-password').val('');
		$('#ng-repeatpassword').val('');
		$('#ng-address').val('');
		$('#ng-state').val('');
		$('#ng-city').val('');
		$("#register-row").show();
		$("#register-row-header").show();
		$("#otpscreen").hide();
		$("#registrationbackbutton").hide();

	})

	$('#content4c').on('click', function (e) {
		var ngmobile = $("#emailphonec").val();
		var country_code = $("#country_code").val();
		var country = $("#country").val();
		if (ngmobile != '') {
			var apiurl = userCheck2c;
			$.post(apiurl, { mobile: ngmobile, _token: csrf_token }, function (response) {
				if (response.status == true) {
					$("#login-rowc").hide();
					$("#otpscreenc").show();
					var tokeid = '<input type="hidden" id="mainphic" value="' + response.mainphi + '" name="_token">';

					$("#tokenloginc").html(tokeid);
					// var otp = response.otp;//f['otp'];
					// $( "#viewotp" ).html( otp );
					$("#content5c").show();
					$("#error_message_shownc").html("");
					$("#error_message_shownstep2c").html("");

				}
				else {
					var error_message = response.msg;
					$("#error_message_shownc").html(error_message);
					$("#content4c").show();
					$("#content5c").hide();
					$("#otpscreenc").hide();

				}
			});
		}
		else {
			$("#error_message_shownc").html("All fileds required!");
			$("#content4c").show();
			$("#content5c").hide();
			$("#otpscreenc").hide();
		}
	})
	$('#content5c').on('click', function (e) {
		var mainphi = $("#mainphic").val();
		var ipotp = $("#otploginc").val();
		if (mainphi != '' && ipotp != '') {
			var apiurl = userOtpCheck2c;
			$.post(apiurl, { mainphi: mainphi, ipotp: ipotp, _token: csrf_token }, function (response) {
				if (response.status) {
					window.location.reload();
				}
				else {
					var error_message = '* OTP Not match';
					$("#error_message_shown_otploginc").html(error_message);
				}
			});
		}
		else {
			$("#error_message_shown_otploginc").html("OTP required!");
		}
	})

	$('#resendloginotpc').on('click', function (e) {
		var maintoken = $("#mainphic").val();
		var apiurl = resendotploginc;
		$.post(apiurl, { maintoken: maintoken, _token: csrf_token }, function (response) {
			if (response) {
				var error_message = '* OTP Resend Successfully';
				$("#error_message_shown_otploginc").html(error_message);
			}
			else {
				var error_message = '* Something error happen please try again later';
				$("#error_message_shown_otploginc").html(error_message);
			}
		});
	})

	// Resend OTP
	$('#resendregotp').on('click', function (e) {
		var maintoken = $("#main_tokenreg").val();
		var apiurl = resendotpreg;
		$.post(apiurl, { maintoken: maintoken, _token: csrf_token }, function (response) {
			if (response) {
				var error_message = '* OTP Resent Successfully';
				$("#error_message_shown_otpregister").html(error_message);
			}
			else {
				var error_message = '* An error occurred; please try again later!';
				$("#error_message_shown_otpregister").html(error_message);
			}
		});
	})

	$('#resendloginotp').on('click', function (e) {
		var maintoken = $("#mainphi").val();
		var apiurl = resendotplogin;
		$.post(apiurl, { maintoken: maintoken, _token: csrf_token }, function (response) {
			if (response) {
				var error_message = '* OTP Resend Successfully';
				$("#error_message_shown_otplogin").html(error_message);
			}
			else {
				var error_message = '* Something error happen please try again later';
				$("#error_message_shown_otplogin").html(error_message);
			}
		});
	})

	//Comment Added
	$('#cancel_comment1').on('click', function (e) {
		// console.log(cancel_comment1);
		var name = $("#name").val();
		var email = $("#email").val();
		var u_id = $("#u_id").val();
		var message = $("#message").val();
		var news_id = $("#news_id").val();
		$('#message').prop("required", true);
		if (message != '' || name != '' || email != '') {
			$.post('insert_comment.php', { name: name, email: email, u_id: u_id, message: message, news_id: news_id }, function (response) {
				console.log(response);
				if (response != 0) {
					alert("Successfully Comment Added!");
					window.location = 'news_detail.php?id=' + news_id;
				}
				else {
					$("#error_message").show()
					var error_message = '* Something error happen please try again later';
					$("#error_message").html(error_message);
				}
			});
		}
		else {
			$("#error_message").show()
			var error_message = 'All fields are required';
			$("#error_message").html(error_message);
		}



	})

	//Comment Reply Added
	$('#cancel_comment2').on('click', function (e) {
		// console.log(cancel_comment1);
		var reply_comment = $("#reply_comment").val();
		var comment_id = $("#comment_id").val();
		var news_id = $("#news_r_id").val();
		var u_id = $("#u_id2").val();
		if (name != '' || comment_id != '' || u_id != '') {
			$.post('insert_comment_reply.php', { news_id: news_id, reply_comment: reply_comment, comment_id: comment_id, u_id: u_id }, function (response) {
				console.log(response);
				if (response != 0) {
					alert("Successfully Added Your Reply!");
					window.location = 'news_detail.php?id=' + news_id;
				}
				else {
					$("#error_message").show()
					var error_message = '* Something error happen please try again later';
					$("#error_message").html(error_message);
				}
			});
		}
		else {
			$("#error_message_reply").show()
			var error_message = 'All fields are required';
			$("#error_message_reply").html(error_message);
		}



	})


	$('#coupan-verify-proc').on('click', function (e) {
		var coupancode = $("#coupancode").val();
		var base_fare = $("#base_fare").val();
		var night_charge = $("#night_charge").val();
		var tax_percentage = $("#tax_percentage").val();
		var discount_on = $("#discount_on").val();
		if (coupancode != '') {
			var apiurl = base_url + "coupancheck";
			$.post(apiurl, { coupancode: coupancode, base_fare: base_fare, night_charge: night_charge, tax_percentage: tax_percentage, discount_on: discount_on }, function (response) {
				var json = JSON.parse(response);
				if (json.status == true) {
					$('#base-fare').html('<span>Base Fare:</span>₹ ' + json.base_price);
					$('#night-charge').html('<span>Night Charge:</span>₹ ' + json.night_charge);
					$('#coupan-discount').html('<span>Coupon Discount:</span>₹ ' + json.discountamount);
					$('#taxes-fees').html('<span>Taxes And Fees:</span>₹ ' + json.taxprice);
					$('#total-price').html('<span>Total Price:</span>₹ ' + json.total_price);
					$('#total-priceBOX').html('₹ ' + json.total_price);
					$('#partially-priceBOX').html('₹ ' + json.partially_percentage_price);
					$('#TOTALPRICE').val(json.total_price);
					$('#Partial_TOTALPRICE').val(json.partially_percentage_price);
					$(".applycoupanbutton").hide();
					$(".removecoupanbutton").show();
					var error_message = '* Coupan code applied';
					$("#coupan-signal-msg").html(error_message);
					$('#coupancodeifany').val(json.coupan_id);
					$('#DISCOUNTPRICE').val(json.discountamount);
					$('#TAXPRICE').val(json.taxprice);
				}
				else {
					var error_message = '* Invalid coupan code';
					$("#coupan-signal-msg").html(error_message);
				}
			});
		}
		else {
			var error_message = '* A promotional code is required.';
			$("#coupan-signal-msg").html(error_message);
		}

	})

	$('#coupan-remove-proc').on('click', function (e) {
		var coupancode = $("#coupancode").val();
		var base_fare = parseFloat($("#base_fare").val());
		var night_charge = parseFloat($("#night_charge").val());
		var tax_percentage = parseFloat($("#tax_percentage").val());
		var partialy_payment_percentage = parseFloat($("#partialy_payment_percentage").val());
		var discount_on = $("#discount_on").val();
		var total_price = base_fare + night_charge;
		var taxprice = 0;
		if (tax_percentage > 0) {
			taxprice = (total_price * tax_percentage) / 100;
			taxprice = parseFloat(taxprice.toFixed(2));
			total_price = total_price + taxprice;
		}
		if (total_price % 1 != 0) {
			total_price = total_price.toFixed(2);
		}

		var partially_percentage_price = total_price;

		if (partialy_payment_percentage > 0) {
			partially_percentage_price = (total_price * partialy_payment_percentage) / 100;
			partially_percentage_price = parseFloat(partially_percentage_price.toFixed(2));
		}
		$('#base-fare').html('<span>Base Fare:</span>₹ ' + base_fare);
		$('#night-charge').html('<span>Night Charge:</span>₹ ' + night_charge);
		$('#coupan-discount').html('<span>Coupon Discount:</span>₹ 0');
		$('#taxes-fees').html('<span>Taxes And Fees:</span>₹ ' + taxprice);
		$('#total-price').html('<span>Total Price:</span>₹ ' + total_price);
		$('#TOTALPRICE').val(total_price);
		$('#total-priceBOX').html('₹ ' + total_price);
		$('#partially-priceBOX').html('₹ ' + partially_percentage_price);
		$('#Partial_TOTALPRICE').val(partially_percentage_price);
		var error_message = '* Coupan code removed';
		$("#coupan-signal-msg").html(error_message);
		$('#coupancode').val('');
		$(".applycoupanbutton").show();
		$(".removecoupanbutton").hide();
		$('#DISCOUNTPRICE').val(0);
		$('#TAXPRICE').val(taxprice);

	})


	function getslotsC(e) {
		var dateselect = e.value;
		var selectid = $("#selectid").val();
		var what = $("#discount_on").val();
		if (dateselect != '') {
			var apiurl = timeCslot;
			$.post(apiurl, { dateselect: dateselect, _token: csrf_token, id: selectid, type: what }, function (response) {
				if (response.status) {
					$('#conSlots').html(response.lista);
				}
				else {
					var error_message = 'No Time Slots Available';
					$("#conSlots").html(error_message);
				}
			});
		}
		else {
			var error_message = 'No Time Slots Available';
			$("#conSlots").html(error_message);
		}

	}

	//cabmodulelogincheck
	$('#cabmodule-submit').on('click', function (e) {
		var ngname = $("#name-cabmodule").val();
		var ngemail = $("#email-cabmodule").val();
		var ngmobile = $("#mobile-cabmodule").val();
		if (ngname != '' && ngemail != '' && ngmobile != '') {

			var apiurl = base_url + "CablistRegistration";
			$.post(apiurl, { name: ngname, email: ngemail, mobile: ngmobile }, function (response) {
				var f = $.parseJSON(response)
				if (f['status'] == true) {
					if (f['status'] == true) {

						var tokeid = '<input type="hidden" id="main_token_cablist" value="' + f['tokenregup'] + '" name="_token">';
						$("#token-cablist").html(tokeid);
						var otp = '';//f['otp'];
						$("#cabmoduleotpemailnumber").html(ngmobile + ' & ' + ngemail);
						$(document.body).trigger('mylib:change');


					}
					else {
						var error_message = '* Something Error Happen Please try again later';
						$("#error_message_shown-cabmodule").html(error_message);
					}
					var error_message = '	';
					$("#error_message_shown-cabmodule").html(error_message);
				}
				else {
					var error_message = f['msg'];
					$("#error_message_shown-cabmodule").html(error_message);
					// $('#err_msg2').show();
				}
			});

		}
		else {
			$("#error_message_shown-cabmodule").html("All fileds required!");
		}
	})

	$('#CABLIST-RESENDOTP').on('click', function (e) {
		var _token = $("#main_token_cablist").val();
		var apiurl = base_url + "ResendOtp";
		$.post(apiurl, { _token: _token }, function (response) {
			if (response == 1) {
				var error_message = '* OTP Resend Successfully';
				$("#error_message_shown_cablist").html(error_message);
			}
			else {
				var error_message = '* Something error happen please try again later';
				$("#error_message_shown_cablist").html(error_message);
			}
		});
	})



	$('#verifycablistotp').on('click', function (e) {
		var otp = $("#ipcablistotp").val();
		var _token = $("#main_token_cablist").val();
		if (otp != '') {
			var apiurl = base_url + "Cablist-Otpverify";
			$.post(apiurl, { otp: otp, _token: _token }, function (response) {
				if (response == 1) {
					var error_message = '* OTP is wrong please try again';
					$("#error_message_shown_twocablist").html(error_message);
				}
				else if (response == 2) {
					var error_message = '* Something error happen please try again later';
					$("#error_message_shown_twocablist").html(error_message);
				}
				else if (response == 3) {
					$(document.body).trigger('mylib:change2');
				}
				else if (response == 0) {
					var error_message = '* Something error happen please try again later';
					$("#error_message_shown_twocablist").html(error_message);
				}
				else {
					var error_message = '* Something error happen please try again later';
					$("#error_message_shown_twocablist").html(error_message);
				}
			});

		}
		else {
			var error_message = '* OTP required';
			$("#error_message_shown_twocablist").html(error_message);
		}
	})

	$('#enquiry-form').on('click', function (e) {
		var name = $("#enquiry-name").val();
		var email = $("#enquiry-email").val();
		var mobile = $("#enquiry-mobile").val();
		var message = $("#enquiry-message").val();
		if ($('#agreechb').is(':checked')) {
			if (name != '' && email != '' && message != '') {
				var apiurl = base_url + "Enquiry";
				$.post(apiurl, { name: name, email: email, mobile: mobile, message: message }, function (response) {
					var error_message = '* Enquiry Submitted!';
					$("#error_message_shown").html(error_message);
					document.getElementById("enquiry-message").value = "";
					setTimeout(function () {
						$('#error_message_shown').hide()
					}, 4000);

				});

			}
			else {
				$("#error_message_shown").html("All fileds required!");
			}
		}
		else {
			$("#error_message_shown").html("Terms and condition acceptance required");
		}

	})


	$('#coupan-verify-proc-new').on('click', function (e) {
		var coupancode = $("#coupancode").val();
		var selectid = $("#selectid").val();
		var what = $("#discount_on").val();
		if (coupancode != '') {
			var apiurl = cop;
			$.post(apiurl, { coupancode: coupancode, _token: csrf_token, id: selectid, type: what }, function (response) {
				if (response.status) {
					$('#subtotal-price').html('₹ ' + response.subtotalprice);
					$('#tax-price').html('₹ ' + response.taxprice);
					$('#discount-price').html('₹ ' + response.minusamount);
					$('#total-price').html('₹ ' + response.total_price);
					$(".applycoupanbutton").hide();
					$(".removecoupanbutton").show();
					var error_message = '* Coupan code applied';
					$("#coupan-signal-msg").html(error_message);
					$('#TOTALPRICE').val(response.total_price);
					$('#base_price').val(response.subtotalprice);
					$('#tax_price').val(response.taxprice);
					$('#discount_id').val(response.coupan_id);
					$('#discount_amount').val(response.minusamount);

				}
				else {
					var error_message = '* Invalid coupan code';
					$("#coupan-signal-msg").html(error_message);
				}
			});
		}
		else {
			var error_message = '* A promotional code is required.';
			$("#coupan-signal-msg").html(error_message);
		}

	})


	$('#coupan-remove-proc-new').on('click', function (e) {
		var selectid = $("#selectid").val();
		var what = $("#discount_on").val();
		var apiurl = copc;
		$.post(apiurl, { _token: csrf_token, selectid: selectid, what: what }, function (response) {
			if (response.status == true) {
				$('#subtotal-price').html('₹ ' + response.subtotalprice);
				$('#tax-price').html('₹ ' + response.taxprice);
				$('#discount-price').html('₹ ' + response.minusamount);
				$('#total-price').html('₹ ' + response.total_price);
				var error_message = '* Coupan code removed';
				$("#coupan-signal-msg").html(error_message);
				$('#coupancode').val('');
				$(".applycoupanbutton").show();
				$(".removecoupanbutton").hide();
				$('#TOTALPRICE').val(response.total_price);
				$('#base_price').val(response.subtotalprice);
				$('#tax_price').val(response.taxprice);
				$('#discount_id').val(response.discount_id);
				$('#discount_amount').val(response.minusamount);
			}
			else {
				var error_message = '* Invalid coupan code';
				$("#coupan-signal-msg").html(error_message);
			}
		});
	})


	//property
	$('#propertymodule-submit').on('click', function (e) {
		var ngname = $("#name-cabmodule").val();
		var ngemail = $("#email-cabmodule").val();
		var ngmobile = $("#mobile-cabmodule").val();
		if (ngname != '' && ngemail != '' && ngmobile != '') {

			var apiurl = base_url + "PropertylistRegistration";
			$.post(apiurl, { name: ngname, email: ngemail, mobile: ngmobile }, function (response) {
				var f = $.parseJSON(response)
				if (f['status'] == true) {
					if (f['status'] == true) {

						var tokeid = '<input type="hidden" id="main_token_propertylist" value="' + f['tokenregup'] + '" name="_token">';
						$("#token-propertylist").html(tokeid);
						var otp = '';//f['otp'];
						$("#propertymoduleotpemailnumber").html(ngmobile + ' & ' + ngemail);
						$(document.body).trigger('mylib:property');


					}
					else {
						var error_message = '* Something Error Happen Please try again later';
						$("#error_message_shown-propertymodule").html(error_message);
					}
					var error_message = '	';
					$("#error_message_shown-propertymodule").html(error_message);
				}
				else {
					var error_message = f['msg'];
					$("#error_message_shown-propertymodule").html(error_message);
					// $('#err_msg2').show();
				}
			});

		}
		else {
			$("#error_message_shown-propertymodule").html("All fileds required!");
		}
	})

	$('#PROPERTYLIST-RESENDOTP').on('click', function (e) {
		var _token = $("#main_token_propertylist").val();
		var apiurl = base_url + "ResendOtp";
		$.post(apiurl, { _token: _token }, function (response) {
			if (response == 1) {
				var error_message = '* OTP Resend Successfully';
				$("#error_message_shown_propertylist").html(error_message);
			}
			else {
				var error_message = '* Something error happen please try again later';
				$("#error_message_shown_propertylist").html(error_message);
			}
		});
	})



	$('#verifypropertylistotp').on('click', function (e) {
		var otp = $("#ippropertylistotp").val();
		var _token = $("#main_token_propertylist").val();
		if (otp != '') {
			var apiurl = base_url + "Cablist-Otpverify";
			$.post(apiurl, { otp: otp, _token: _token }, function (response) {
				if (response == 1) {
					var error_message = '* OTP is wrong please try again';
					$("#error_message_shown_twopropertylist").html(error_message);
				}
				else if (response == 2) {
					var error_message = '* Something error happen please try again later';
					$("#error_message_shown_twopropertylist").html(error_message);
				}
				else if (response == 3) {
					$(document.body).trigger('mylib:property2');
				}
				else if (response == 0) {
					var error_message = '* Something error happen please try again later';
					$("#error_message_shown_twopropertylist").html(error_message);
				}
				else {
					var error_message = '* Something error happen please try again later';
					$("#error_message_shown_twopropertylist").html(error_message);
				}
			});

		}
		else {
			var error_message = '* OTP required';
			$("#error_message_shown_twopropertylist").html(error_message);
		}
	})

})
$(document).ready(function () {
	//code for required *
	let allRequired = $('input,textarea,select').filter('[required]')
	for (i = 0; i <= allRequired.length; i++) {
		$(allRequired[i]).siblings('label').append(`<span class="text-danger">*</span>`)
	}
	//end
});

$('#registerbut').on('click', function (e) {
	isValid = registervalidateForm(e, "registerationForm");
	if (!isValid) {
		e.preventDefault();
	} else {
		loader = $("#loader");
		loader.show();
		var ngname = $("#name").val();
		var ngemail = $("#email").val();
		var ngmobile = $("#mobile").val();
		var apiurl = usercreate;
		$.post(apiurl, { name: ngname, email: ngemail, mobile: ngmobile, _token: csrf_token }, function (response) {
			loader.hide();
			if (response['status']) {
				$("#register-row").hide();
				$("#register-row-header").hide();
				$("#otpscreenreg").show();
				$("#otpscreenreg").removeClass("d-none");
				$("#otpscreenreg").addClass("d-flex");
				$("#registrationbackbutton").show();
				var tokeid = '<input type="hidden" id="main_tokenreg" value="' + response['reqtok'] + '" name="_token">';
				$("#tokenreg").html(tokeid);
				var otp = '';//f['otp'];
				$("#viewotp").html(otp);
				$('#terms_error').text("");
				$("#error_message_shown_register").html("");
			}
			else {
				var error_message = response['msg'];
				$("#error_message_shown_register").html(error_message);
			}
		});
	}
})

// code for common validation of name,mobile and email
// Function to validate name field

$('input[name="person_refer_name"]').keypress(function (event) {
	var charCode = event.which || event.keyCode;
	if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 32) {
		return true;
	} else {
		return false;
	}
});

$('input[name="fullName"]').keypress(function (event) {
	var charCode = event.which || event.keyCode;
	if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 32) {
		return true;
	} else {
		return false;
	}
});

$('input[name="name"]').keypress(function (event) {
	var charCode = event.which || event.keyCode;
	if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 32) {
		return true;
	} else {
		return false;
	}
});
$('input[name="mobile"]').keypress(function (event) {
	var charCode = event.which || event.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57)) {
		return false;
	} else {
		return true;
	}
});

$('input[name="phoneNo"]').keypress(function (event) {
	var charCode = event.which || event.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57)) {
		return false;
	} else {
		return true;
	}
});
// $('input[name="name"]').on('focusout', function () {
// 	validateName($(this));
// });

// // Function to validate email field
// $('input[name="email"]').on('focusout', function () {
// 	validateEmail($(this));
// });

// // Function to validate phone field
// $('input[name="mobile"]').on('focusout', function () {
// 	validatePhone($(this));
// });

// Function to validate name
function validateName(input) {
	$(".error-msg").empty();
	var name = input.val().trim();
	var nameError = input.next('.error');

	var namePattern = /^[A-Za-z' ]{2,}$/u;
	if (!name.match(namePattern)) {
		nameError.text('Please enter a valid Name');
		return false;
	} else {
		nameError.text('');
		return true;
	}
}

// Function to validate email
function validateEmail(input) {
	$(".error-msg").empty();
	var email = input.val().trim();
	var emailError = input.next('.error');

	var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!email.match(emailPattern)) {
		emailError.text('Please enter a valid email address');
		return false;
	} else {
		emailError.text('');
		return true;
	}
}

// Function to validate phone number (India)
function validatePhone(input) {
	$(".error-msg").empty();
	var phone = input.val().trim();
	var phoneError = input.next('.error');

	var phonePattern = /^[6-9]\d{9}$/;
	if (!phone.match(phonePattern)) {
		phoneError.text('Please enter a valid mobile number');
		return false;
	} else {
		phoneError.text('');
		return true;
	}
}


// Function to trigger validation on form submission
$('#myForm, #contact_us_form, #brouchureForm, #enquiryForm').submit(function (event) {
	formId = $(this).attr('id');
	isValid = validateForm(event, formId);
	if (!isValid) {
		event.preventDefault();
	} else {
		loader = $("#loader");
		//loader.show();
	}
});
//end

// validation function common
function validateForm(event, formId) {
	var isValid = true;
	if (!validateName($(`#${formId} input[name="name"]`))) {
		isValid = false;
	}

	if (!validateEmail($(`#${formId} input[name="email"]`))) {
		isValid = false;
	}

	if (!validatePhone($(`#${formId} input[name="mobile"]`))) {
		isValid = false;
	}
	return isValid;
}
function registervalidateForm(event, formId) {
	var isValid = true;
	if (!validateName($(`#${formId} input[name="name"]`))) {
		isValid = false;
	}

	if (!validateEmail($(`#${formId} input[name="email"]`))) {
		isValid = false;
	}

	if (!validatePhone($(`#${formId} input[name="mobile"]`))) {
		isValid = false;
	}
	var isChecked = $('#tc').prop('checked');
	if(isChecked == false){
		$('#term-error').text('Please select terms and conditions');
		isValid = false;
	}
	return isValid;
}
//end

function validateForm_refer(event, formId) {
	var isValid = true;
	if (!validateName($(`#${formId} input[name="name"]`))) {
		isValid = false;
	}

	if (!validateEmail($(`#${formId} input[name="email"]`))) {
		isValid = false;
	}

	if (!validatePhone($(`#${formId} input[name="mobile"]`))) {
		isValid = false;
	}
    if (!validateName($(`#${formId} input[name="person_refer_name"]`))) {
		isValid = false;
	}
    if (!validateEmail($(`#${formId} input[name="person_refer_email"]`))) {
		isValid = false;
	}
    if (!validatePhone($(`#${formId} input[name="person_refer_phone"]`))) {
		isValid = false;
	}
	return isValid;
}

$.validator.addMethod(
	"regex",
	function (value, element, regexp) {
		return this.optional(element) || regexp.test(value);
	},
	"Please enter a valid format."
);


// for setting ajax validation error in frontend
function printErrorMsg(errors) {
	$(".error-msg").empty(); // Clear previous error messages
	$(".error").empty(); // Clear previous error messages

	if ($.isEmptyObject(errors)) {
		// If there are no errors, return
		return;
	}

	// Display error messages below input fields
	$.each(errors, function (key, value) {
		$("#" + key + "-error-msg").text(value);
	});
}
//end