/**
 * Treehouse Telepath Project Three: Interactive Form 
 * Jane Lewis
 */
 
    const paragraphs = $("p"); 
    const paypal = $(paragraphs[0]); 
    const bitcoin = $(paragraphs[1]);
    const submitButton = $(':button')[0];

//Makes the name field focus state
    $("#name").focus();
//Set credit card as default payment method
    $('#payment').val("credit card");

    /** 
     * Targets "other" function, hides it so it displays even if javascript is disabled 
     * but is hidden at first*/
      $('#other-title-wrapper').hide(); 
    
      $('#title').on('change', function() {
          if ($(this).val() ==="other") {
              $('#other-title-wrapper').show()
          }else {
              $('#other-title-wrapper').hide()
          }
      });
    
    /**
     * In design menu -
     * hide option select theme
     * update color field to read "Please select a T-shirt theme"
     * hide color selection in drop down menu untile design theme is selected in 
     * 
     */
    
    let chooseYourTheme = $("#color").append(new Option("Please select a t-shirt theme", "select"));  // create a new menu option and set the value equal to the string "select"
    $("#color").val("select"); 
    
    $('#design').change(function(){
        if($('#design').val() === 'js puns') {
            $('#color').find('option[value="cornflowerblue"]').show()
            $('#color').find('option[value="darkslategrey"]').show()
            $('#color').find('option[value="gold"]').show()
            $('#color').find('option[value="tomato"]').hide()
            $('#color').find('option[value="steelblue"]').hide()
            $('#color').find('option[value="dimgrey"]').hide()
            $('#color').val('cornflowerblue')  
        } else if ($('#design').val() === 'heart js') {
            $('#color').find('option[value="cornflowerblue"]').hide()
            $('#color').find('option[value="darkslategrey"]').hide()
            $('#color').find('option[value="gold"]').hide()
            $('#color').find('option[value="tomato"]').show()
            $('#color').find('option[value="steelblue"]').show()
            $('#color').find('option[value="dimgrey"]').show()
            $('#color').val('tomato')
        }else {
          $("#color").val("select"); 
        }
    });
    
    $('#color').find('option').hide();
    
/*
Activity Info
Prevents same day and time
Adds activity cost
*/

  var jsFrameworks = $("input[name='js-frameworks'");
	var jsLibraries = $("input[name='js-libs']");
	var express = $("input[name='express']");
	var nodeJS = $("input[name='node']");

    var totalCost = 0;
	$('.activities').append('<div id="total"></div>');

	var updateCost = function (cost) {
		totalCost += cost;
		document.getElementById("total").innerHTML = "Total: $" + totalCost;
	};  

	$("input[name='all']").change(function () {
		if ($(this).prop("checked")) {
			updateCost(200);
		} else {
			updateCost(-200);
		}
	});

	jsFrameworks.change(function () {
		if ($(this).prop("checked")) {
			express.prop("disabled", true);
			express.parent().addClass("disabled");
			express.parent().append('<span class="unavailable">&nbsp;&nbsp;&nbsp;&nbsp;Unavailable</span>');
			updateCost(100);
		} else {
			express.prop("disabled", false);
			express.parent().removeClass("disabled");
			express.parent().find('.unavailable').remove();
			updateCost(-100);
		}
	});

	jsLibraries.change(function () {
		if ($(this).prop("checked")) {
			nodeJS.prop("disabled", true);
			nodeJS.parent().addClass("disabled");
			nodeJS.parent().append('<span class="unavailable">&nbsp;&nbsp;&nbsp;&nbsp;Unavailable</span>');
			updateCost(100);
		} else {
			nodeJS.prop("disabled", false);
			nodeJS.parent().removeClass("disabled");
			nodeJS.parent().find('.unavailable').remove();
			updateCost(-100);
		}
	});

	express.change(function () {
		if ($(this).prop("checked")) {
			jsFrameworks.prop("disabled", true);
			jsFrameworks.parent().addClass("disabled");
			jsFrameworks.parent().append('<span class="unavailable">&nbsp;&nbsp;&nbsp;&nbsp;Unavailable</span>');
			updateCost(100);
		} else {
			jsFrameworks.prop("disabled", false);
			jsFrameworks.parent().removeClass("disabled");
			jsFrameworks.parent().find('.unavailable').remove();
			updateCost(-100);
		}
	});

	nodeJS.change(function () {
		if ($(this).prop("checked")) {
			jsLibraries.prop("disabled", true);
			jsLibraries.parent().addClass("disabled");
			jsLibraries.parent().append('<span class="unavailable">&nbsp;&nbsp;&nbsp;&nbsp;Unavailable</span>');
			updateCost(100);
		} else {
			jsLibraries.prop("disabled", false);
			jsLibraries.parent().removeClass("disabled");
			jsLibraries.parent().find('.unavailable').remove();
			updateCost(-100);
		}
	});

	$("input[name='build-tools']").change(function () {
		if ($(this).prop("checked")) {
			updateCost(100);
		} else {
			updateCost(-100);
		}
	});

	$("input[name='npm']").change(function () {
		if ($(this).prop("checked")) {
			updateCost(100);
		} else {
			updateCost(-100);
		}
	});


 	
//Initially hides paypal and bitcoin, shows clicked payment and hides other two options
//$('#paypal, #bitcoin').hide();

    $('#credit-card').next().hide().next().hide();
    $('#payment option[value="select_method"]').wrap('<span>').hide() // Hide the “Select Payment Method” `option`
    $('#payment').change(function (){
        $('#payment option:selected').each(function() {
            if($(this).text() === 'Credit Card') {
                $('#credit-card').fadeIn().next().hide().next().hide(); 
              } else if($(this).text() === 'PayPal'){
                $('#credit-card').hide().next().slideDown().next().hide();
                $('#credit-card input').val('');
            } else if($(this).text() === 'Bitcoin'){
                $('#credit-card').hide().next().hide().next().slideDown(); 
                $('#credit-card input').val(''); // Remove text from Credit Card fields
            }
        });
    });

/*
Validation
Checks all necessary fields are chickled
Confirms valid entry of name, email, creditCard MediaDeviceInfo
*/



function validForm () {
  let formGood = true; 
  let emailRegex= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let ccNumRegex = /^[0-9]{13,16}$/;
  let zipCodeRegex = /^[0-9]{5}$/;
  let cvvRegex= /^[0-9]{3}$/;

  let name = $('#name').val();
  let email = $('#mail').val();
  let ccNum = $('#cc-num').val();
  let zipCode = $('#zip').val();
  let cvv = $('#cvv').val();
  let message = "";
  //let validateForm = function(e) {
//}
  if (name == "" ||  email == "" || ccNum == "" || zipCode == "" ||  cvv == "")  {
  "<div>'Must enter name'</div>";
   //$("<p> 'Must enter name' </p>").interBefore('#name');
    formGood = false;
}
  //if ($('.activities').find(':checkbox:checked').length == 0){
  //$( "<p>'Must pick one activity'</p>").insertBefore( ".activities" );
    //formGood = false;
//}





// const allActivities = $('.activities')[0];
// const checkedActivitiesAmount = $(allActivities).find(':checkbox:checked').length;
   

// if (ccNum && ccNumRegex.test(ccNum) !="") {
//       message += '<div> Card number invalid.</div>';
//       formGood = false;
//     } 
//   })
//   if (email != "" && !emailRegex.test(email)) {
//     $('#email').validateEmail(function(result){
//       if(!(result.valid)) {
//         message += '<div> Email invalid.</div>';
//         formGood = false;
//       } 
//     });
// }

// } 

// // Confirm 1 activity selected

//   var activityCount = 0;
//   for (var i = 0; i < activities.length; i++) {
//     if (activities[i].checked) {
//       activityCount++;
//     }
//   }
//   if (activityCount === 0) {
//     e.preventDefault();
//     message += '<div> Must pick one.</div>';
//   } 

  
//   //Validates credit cared, zipcode, cvv enterd and in correct formats

//   if (paymentSelect.value === 'credit card') {
//     if (ccNumber.value === "") {
//       e.preventDefault();
//       displayError(ccNumber, "Enter credit card number");
//     } else {
//       if (!validateCCNum(ccNumber.value)) {
//         e.preventDefault();
//         displayError(ccNumber, "Credit card number must be 13-16 digits");
//       }
//     }

//     if (zipCode.value === "") {
//       e.preventDefault();
//       displayError(zipCode, "Enter zip Code");
//     } else {
//       if (!validateZipCode(zipCode.value)) {
//         e.preventDefault();
//         displayError(zipCode, "Zip Code must be 5 digits");
//       }
//     }
//     if (CVV.value === "") {
//       e.preventDefault();
//       displayError(CVV, "Please enter cvv code");
//     } else {
//       if (!validateCVV(CVV.value)) {
//         e.preventDefault();
//         displayError(CVV, "CVV must be 3 digits");
//       }
//     }
  
  //} 
  return formGood ;
  
}

//submitButton.addEventListener("click", validForm);



 //$('form').submit(function(e) {
  //const isValid = validForm();
  //if (!isValid) {
   // console.log("validation worked")
    //return false;
  //}
//});
 
  /*
 function formValidation()
   {
    var name = $('#name').val();
    var email = $('#email').val();
  {
    if (name = "")
  {
    if (email = "")
  
}
  }
reurn false;
   };
   */
   
   /*
 if($('#name').val = "")
    {
      return true
    }
    else
    {
      '<div>"must enter name"</div>'
      return false
    }
  }
  */
