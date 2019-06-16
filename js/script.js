/**
 * Treehouse Telepath Project Three: Interactive Form 
 * Jane Lewis
 */
//Makes the name field focus state
$("#name").focus();


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
    }
});

$('#color').find('option').hide()


/** 
 * Activity section, add event listen for updates of activity choice
 * prevent user from selecting 2 activities at the same time
 * prevents selection of events with same date and time
*/
//Change status when boxes clicked

//onsole.log(cliked);


/*let activities
[
    (name = 'all', price = 200),
    (name = 'js - frameworks', day = 'tuesday', time_start = '9', price = '100'),
    (name = 'js_libs', day = 'tuesday', time_start = 13, price = 100),
    (name = 'express', day = 'tuesday', time_start = 9, price =100),
    (name = 'node', day = 'tuesday', time_start = 13, price = 100),
    (name = 'build_tools', day = 'wednesday', time_start = 9, price - 100),
    (name = 'npm', day - 'wednesday', time_start = 13, price = 100)
]*/

   /*function getActivityInfo(pickAct) {
        let name = pickAct.name ;
            for (let i = 0; i < activities.lenght; ++i){
        if(activities[i].name == name) {
        }
    } 
        return activities;
   };*/
//$('.change').click(function() {


/*const $activity = $('.activities input[name =' + 'actName' + ']');
//console.log(actName);
   $activity.change(() => {
    if($activity.is(':checked')) {
        total += price;
    $('.total p').text('Total: $' + total);
    //targets same activity
        if(sameAct !== '') {
            tAct(sameAct, false);
    }
    }
      else {
        total -= price;
    $('.total p').text('Total: $' + total);
        if(sameAct !== '') {
            tAct(sameAct, true);
    }
    }
   });
//enabled or disabled activity
function tAct(actName, enable) {

const $activity = $('.activities input[name=' + actName + ']');
    if(enable) {
      $activity.prop('disabled', false);
      $activity.parent().removeClass('disabled');
}
    else {
      $activity.prop('disabled', true);
      $activity.parent().addClass('disabled');
}

};*/

  //}
    
  const $activities = $('.activities input[type="checkbox"]');
  let mainCon = 0;
  let tueAm = 0;
  let tuePM = 0;
  let wedAm = 0;
  let wedPm = 0;
  let total = 0;


const activity = $(this).find('input').attr('class');
const checked = this.checked;

if ($(this).is('.tueAm')) {
    $('.tueAm').not(this).prop('disabled', tueAm >0);
        if ($('.disabled .tueAm') [0]) {
            $('.tueAm').not(this).parent().removeClass('disabled');
        } else {
            $('.tueAm').not(this).parent().addClass('disabled');
        }
}

if ($(this).is('.tuePm')) {
    $('.tuePm').not(this).prop('disabled', tuePm >0);
        if ($('.disabled .tuePm') [0]) {
            $('.tuePm').not(this).parent().removeClass('disabled');
        } else {
            $('.tuePm').not(this).parent().addClass('disabled');
        }
        document.getElementById('totalcost').innerHTML = '$' + total;
};

$('#payment').on('chang', function(){
    const payInfo = $(this).val;
    switch (payInfo) {
        case 'credit card':
        $('#credit-card').show();
        $('#paypal. #bitcoin',hide())
        break;
        case "paypal":
          $("#credit-card, #bitcoin").hide();
          $("#paypal").show();               
          break;
        case "bitcoin":
          $("#credit-card, #paypal").hide();      
          $("#bitcoin").show();               
          break;
      }
    });
    
    // ensuring name field not blank
function nameValidation() {
    const name = $("#name").val();  
    let nameValid = false;
    
    if (name.length <= 0) {
      if ($("#name").next(".validation").length === 0) {
        $("#name").after("<div class='validation'>Please enter name</div>");
      }
    } else {
      nameValid = true;
      $("#name").next(".validation").remove();
    }
    return nameValid;
  }
  
  // ensuring email field not blank and has correct format
  function emailValidation() {  
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = $("#mail").val();
    const emailError = re.test(email);  
    let emailValid = false;
    
    if (!emailError) {
      if ($("#mail").next(".validation").length === 0) {
        $("#mail").after("<div class='validation'>Please enter valid email</div>");
      }
    } else {   
      emailValid = true;
      $("#mail").next(".validation").remove();    
    }  
    return emailValid;
  }
  
  // Ensuring at least one activity is selected
  function activityValidation() {
    const checkedActivities = $('.activities input[type="checkbox"]:checked').length;
    let activityValid = false;
    
    if(checkedActivities < 1) {    
      $(".activities legend").next(".validation").remove();
      $(".activities legend").after("<div class='validation'>At least 1 activity must be chosen</div>")    
    } else {
      activityValid = true;    
    }
    return activityValid;
  }
  
  
  // Ensure credit card info is correct
    // credit card field only accepts a number betwen 13 and 16
  function ccValidation() {
    const cc = $("#cc-num").val();
    let ccValid = false;
    ccError = intRegex.test(cc);
    $("#cc-num").next(".validation").remove();
    
    if (!ccError || cc.length < 13 || cc.length > 16) {
      if ($("#cc-num").next(".validation").length === 0) {
        if (!ccError) {
          $("#cc-num").after("<div class='validation'>Please enter a valid credit card number</div>");
        } else {
          $("#cc-num").after("<div class='validation'>Must be between 13 and 16 digits</div>");
        }
      }     
    } else {   
        ccValid = true;
        $("#cc-num").next(".validation").remove();
      } 
  console.log("cc =" + ccValid);
    return ccValid;
    
  }
    // zipcode field only accepts a 5 digit number
  function zipValidation() {
    const zip = $("#zip").val();  
    let zipValid = false;
    zipError = intRegex.test(zip);	
    $("#zip").next(".validation").remove();
    if (!zipError || zip.length !== 5) {	
      if ($("#zip").next(".validation").length === 0) {	
        if (!zipError) {	
          $("#zip").after("<div class='validation'>Check zip code</div>");  
        } else {	
          $("#zip").after("<div class='validation'>Must be 5 digits</div>");  
        }      
      } 
    } else {   
  zipValid = true;
  $("#zip").next(".validation").remove();
    } 
    return zipValid;
  }
    // CVV field only accepts a 3 digit number
  function cvvValidation() {
    const cvv = $("#cvv").val();  
    let cvvValid = false;
    cvvError = intRegex.test(cvv);
    $("#cvv").next(".validation").remove();
    
    if (!cvvError || cvv.length !== 3) {
      if ($("#cvv").next(".validation").length === 0) {
        if (!cvvError) {
          $("#cvv").after("<div class='validation'>Check CVV code</div>");
        } else {
          $("#cvv").after("<div class='validation'>Must be 3 digits</div>"); 
        }      
      }
    } else {   
      cvvValid = true;
      $("#cvv").next(".validation").remove();
    }  
    return cvvValid;
  }
    // combine all credit card validations in one function for easy use
  function creditCardValidation() {
    const creditCard = $("#payment option[value='credit card']");
    ccValid = ccValidation();
    zipValid = zipValidation();
    cvvValid = cvvValidation();
    creditValid = false;
    if (creditCard.prop('selected')) {
      if (ccError && zipError && cvvError) {
        creditValid = true;      
      }
    }
    return creditValid;
  }
  
  // run all validation checks preventing submission if any errors are present
  $("#submitButton").click(function(event) {
    nameValid = nameValidation();
    emailValid = emailValidation();
    activityValid = activityValidation();
    creditValid = creditCardValidation();
    event.preventDefault(); 
    
     validInfo = false;
    
    if (nameValid && emailValid && activityValid && creditValid) {   
      alert("Form successfully submitted");
      window.location.reload();	
    } else {
      alert("Form not submitted, please check for errors");
      validInfo = false;
    }
  });
    //}
//})


/*$('.option').click(function() {
    let total = 0;
    $('.option:checkbox).each(function() {
     let   total += parseInt($(this).val()); 
    });
$('#total').html('$' + total);
});*/




  
/*function validateText() {
    let userName = document.getElementById('name');
    if (userName.nodeValue.length<5){
        alert ('Please enter at least 5 characters');
    }
    let sendMail= document.getElementById('mail');
        if (sendMail.nodeValue.length<5){
            alert ("Please enter at least 5 characters");
        }
    let actSec = document.getElementsByClassName('#activities');
        if (actSec.nodeValue.length<5){
        alert ("Please enter at least 5 characters");
        }
    let CreditCard = document.getElementById("credit card");
        if (CreditCard.nodeValue.length<5){
        alert ("Please enter at least 5 characters");
        }
    let zCode = document.getElementById("Zip");
        if (zCode.nodeValue.length<5){
            alert ("Please enter at least 5 characters");
            }  
    let cVV = document.getElementById('CVV');
    if (cVV.nodeValue.length<5){
        alert ("Please enter at least 5 characters");
        }  
            else{
    //validateTextbox.focus ();
    validateText.style.border = "solid  3px red";
        return false; 
            }
    };

   /**  let email = documentByElementId=('mail');
    email.addEventListener('click', function() {
        if(email.validityTypeMismatch){
            email.setCustomVal('Type correct email');
        } else{
            email.setCustomValidity(event);
        }
    });
    **/
   /*Vakidation of                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
   const name = $("#name").val();  
   let nameValid = false;
   */
