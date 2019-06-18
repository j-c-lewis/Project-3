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
    }else {
      $("#color").val("select"); 
    }

});

$('#color').find('option').hide()

/*
Activity Info
Prevents same day and time
Adds activity cost
*/

$('.checked_all').on('change', function() { 
  $('.checkbox').prop('checked', $(this).prop("checked")); 
});

$('.activities').change(function(){
  $(this).find('input:checkbox').each(function() {
      $(this).attr('disabled', false);
  });
  let price = 0;
  $(this).find('input:checkbox').each(function() {
      if ($(this).prop('checked')) {
      
          var inputText = $(this).parent().text();
          var index = inputText.indexOf("$");
          price += parseInt(inputText.substring(index+1));

          var startDate = inputText.indexOf("—");
          var endDate = inputText.indexOf(",");
          selectedDate = inputText.substring(startDate, endDate);

          $('.activities').find('input:checkbox').each(function() {
              if ($(this).parent().text().indexOf(selectedDate) != -1 
                  && $(this).parent().text().indexOf(inputText) == -1) {
                  $(this).attr('disabled', true);
              }
          });
      }
  });


  //Adds total as activities are checked
  $("#cost").val(price);
  if (price > 0) {
      $("#cost").removeClass("invalid").addClass("valid");
  } else {
      $("#cost").removeClass("valid").addClass("invalid");
  }
  
  if($('.activity:checked').length == $('.checkbox').length){
      $('.checked_all').prop('checked',true);
  }else{
      $('.checked_all').prop('checked',false);
  }
});

 	
//Initially hides paypal and bitcoin
$( document ).ready(function() {
  $("#paypal-1").hide();
  $("#bitcoin-1").hide();
$(".activities").append('<div class="col-6 col"><label for="cost">Total cost:</label><input id="cost" name="cost" type="text" disabled></div>'
)
});
$(document).ready(function(){ 
  $('#payment').change(function(){
 
    
  //Hide / show credit card, paypal and bitcoin  
    const paragraphs = $("p"); 
    const paypal = $(paragraphs[0]); 
    const bitcoin = $(paragraphs[1]);

    console.log('#payment');

    if ($("#payment").val() === "credit card") {
      $("#credit-card").show();
      $("#paypal-1").hide();
      $("#bitcoin-1").hide();
  } else {
      $("#credit-card").hide();
  }
  if ($("#payment").val() === "paypal") {
      $("#paypal").show();
      $("#paypal-1").show();
      $("#bitcoin-1").hide();
  } else {
      $("#paypal").hide();
      }

  if ($("#payment").val() === "bitcoin") {
      $("#bitcoin").show();
      $("#bitcoin-1").show();
      $("#paypal-1").hide();

  } else {
      $("#bitcoin").hide();
  }

});
});

/*Validation*/

$("form").submit(function(event) {
 console.log('form submission')
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
    validInfo = false
      alert('Form not successful');
    return true
  }
});

function numbersOnly(event) {
  event.target.value = event.target.value.replace(/[^0-9]+/, '');
};

document.getElementById('cc-num').addEventListener('keyup', numbersOnly);
document.getElementById('zip').addEventListener('keyup', numbersOnly);
document.getElementById('cvv').addEventListener('keyup', numbersOnly);

function changePaymentHandler(event) {
  hidePaymentFields();
  var ccreq = document.getElementById('cc-num');
  var cczip = document.getElementById('zip');
  var cccvv = document.getElementById('cvv');

  if (event.target.value === 'credit card') {
      removeSelectPaymentError();
      document.getElementById('credit-card').style.display = 'block';

      ccreq.setAttribute('type', 'tel');
      ccreq.setAttribute('minlength', 13);
      ccreq.setAttribute('maxlength', 16);

      cczip.setAttribute('type', 'number');
      cczip.setAttribute('min', 10000);
      cczip.setAttribute('max', 99999);

      cccvv.setAttribute('type', 'number');
      cccvv.setAttribute('min', 100);
      cccvv.setAttribute('max', 999);
  } else if (event.target.value === 'bitcoin') {
      removeSelectPaymentError();
      document.getElementById('bitcoin-div').style.display = 'block';
  } else if (event.target.value === 'paypal') {
      removeSelectPaymentError();
      document.getElementById('paypal-div').style.display = 'block';
  }
}
document.querySelector('select[name="user_payment"]').addEventListener('change', changePaymentHandler);



/*
Prevent submission of blank name field
prevent submission of blank email field and confirms correct input added

*/
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
  
  // Confirms activity checked
  function activityValidation() {
    const checkedActivities = $('.activities input[type="checkbox"]:checked').length;
    let activityValid = false;
    
    if(checkedActivities < 1) {    
      $(".activities legend").next(".validation").remove();
      $(".activities legend").after("<div class='validation'>At least 1 activity must be chosen</div>")    
    } else {
      activityValid = true; 
      $(".activities legend").next(".validation").remove();   
    }
    return activityValid;
  }
  
  
  /*
  Vvalidation info
  */

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
    
  };
  
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
  };

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
  };

//All credit card validation info
  function creditCardValidation() {
    const creditCard = $("#payment option[value='credit card']");
    creditValid = false;
      if (creditCard.prop('selected')) {
        ccValid = ccValidation();
        zipValid = zipValidation();
        cvvValid = cvvValidation();
      if (ccError && zipError && cvvError) {
        creditValid = true;      
      }
    }
    return creditValid;
  };
  
  //Error check
  $("form").submit(function(event) {
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
  

 // Real time check of input of name info
 var nameInput = document.getElementById('name');
 var nameLabel = document.getElementsByTagName('label')[0];
 var nameError = document.createElement('label');

 function checkName() {
     if (nameInput.value === '' || nameInput === null) {
         window.scrollTo(0, nameInput.parentElement.offsetTop);
         nameInput.setCustomValidity("Please enter a name");
         nameError.textContent = 'Please enter a name';
         nameError.setAttribute('class', 'error');
         nameLabel.appendChild(nameError);
         return false
     } else if (nameInput.value.length < 2) {
         nameInput.setCustomValidity("Please enter a name longer than two characters");
         nameError.textContent = 'Please enter a name longer than two characters';
         nameError.setAttribute('class', 'error');
         nameLabel.appendChild(nameError);
         window.scrollTo(0, nameInput.parentElement.offsetTop);
         return false
     } else if (nameError.parentElement !== null) {
         nameInput.setCustomValidity("");
         nameLabel.removeChild(nameError);
     }
     return true
 };
 nameInput.addEventListener("input", checkName);


 // Real time check of input of email info
 var mail = document.getElementById('mail');
 var mailLabel = document.getElementsByTagName('label')[1];
 var mailError = document.createElement('label');
 var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

 function checkMail() {
     if (mail.value === '' || mail.value === null) {
         mail.setCustomValidity("Please enter an email address");
         mailError.textContent = 'Please enter an email address';
         mailError.setAttribute('class', 'error');
         mailLabel.appendChild(mailError);
         window.scrollTo(0, mail.parentElement.offsetTop);
         return false
     } else if (!mail.value.match(emailPattern)) {
         mail.setCustomValidity("Please enter a valid email address");
         mailError.textContent = 'Please enter a valid email address';
         mailError.setAttribute('class', 'error');
         mailLabel.appendChild(mailError);
         window.scrollTo(0, mail.parentElement.offsetTop);
         return false
     } else if (mailError.parentElement !== null) {
         mail.setCustomValidity("");
         if (mailError.parentElement) {
             mailError.parentElement.removeChild(mailError);
         }
     }
     return true
 }
 mail.addEventListener("input", checkMail);



