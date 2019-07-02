/**
 * Treehouse Telepath Project Three: Interactive Form 
 * Jane Lewis
 */

/** 
 * Declared variables
*/
const name = document.getElementById('name');
const email = document.getElementById('mail');
const creditCard = document.getElementById('credit');
const zip = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const activities = document.getElementById('activities');

const paragraphs = $("p"); 
const paypal = $(paragraphs[0]); 
const bitcoin = $(paragraphs[1]);

const main = document.getElementById("all");
const frameworks = document.getElementById("js-frameworks");
const libs = document.getElementById("js-libs");
const express = document.getElementById("express");
const node = document.getElementById("node");
const build = document.getElementById("build-tools");
const npm = document.getElementById("npm");




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
    
    $('#color').find('option').hide();
    
        /*
        Activity
        Prevents same date and time from being selected
        Adds activity cost as activity checked
        */
       $('.activities').change(function(){
        $(this).find('input:checkbox').each(function() {
          $(this).attr('disabled', false);
        });
        price = 0;
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


       document.querySelector(".activities").addEventListener("change", function(){
       var main = document.getElementById("all");
        var frameworks = document.getElementById("js-frameworks");
        var libs = document.getElementById("js-libs");
        var express = document.getElementById("express");
        var node = document.getElementById("node");
        var build = document.getElementById("build-tools");
        var npm = document.getElementById("npm");
      });
      var price = 0;
      function totalPrice (){
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
       return totalPrice
    }

     //});
     
     //Hides paypal and bitcoin at first
     $( document ).ready(function() {
       $("#paypal-1").hide();
       $("#bitcoin-1").hide();
     $(".activities").append('<div class="col-6 col"><label for="cost">Total cost:</label><input id="cost" name="cost" type="text" disabled></div>'
     )
     });
      

     $(document).ready(function(){ 
       $('#payment').change(function(){
      
       //Hide / show credit card, paypal and bitcoin  
         //console.log('#payment');
         $('#paypal, #bitcoin').hide();
         $('#payment').val('credit card');
         

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
    
     var costTotal = function (cost){
      totalCost += cost;
      document.getElementById('total').innerHTML = "Total: $" + totalCost;
  
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
      return costTotal
    }
     var price = 0;
     
     if (checkedBox) {
      totalCost += parsedCost;
    } else {
      totalCost = totalCost - parsedCost;
    }
    
    $('.activities').append('<div id = "total"></div>');
    var price = 0

        $(this).find('input:checkbox').each(function() {
          $(this).attr('disabled', false);
      });
      price = 0;
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
   
      $('#name, #mail, #cc-num, #zip, #cvv, #other-field').keyup(function (){
        if ( $(this).val() === "")  {
        $(this).removeClass('success');
        }
      });

     /*Allow only numbers input*/
     /*
     function validateEmail($email) {
      var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailReg.test( $email );
        }
        if( !validateEmail(email)) { 
            }else { 
    event.preventDefault
    }
    //return ('Please enter email')
     */
  
  
  /*Allow only numbers input*/
  
  function numbersOnly(event) {
    event.target.value = event.target.value.replace(/[^0-9]+/, '');
  };
  
  document.getElementById('cc-num').addEventListener('keyup', numbersOnly);
  document.getElementById('zip').addEventListener('keyup', numbersOnly);
  document.getElementById('cvv').addEventListener('keyup', numbersOnly);

    var ccreq = document.getElementById('cc-num');
    var cczip = document.getElementById('zip');
    var cccvv = document.getElementById('cvv');
  
  function changePaymentHandler(event) {
    hidePaymentFields();
    //var ccreq = document.getElementById('cc-num');
    //var cczip = document.getElementById('zip');
    //var cccvv = document.getElementById('cvv');
  
    if (event.target.value === 'credit card') {
        removeSelectPaymentError();
      document.getElementById('credit-card').style.display = 'block';
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

    $('#name').on('input', function() {
    });
    $('#name').on('input', function() {
      var input=$(this);
      var name=input.val();
      if(name){input.removeClass("invalid").addClass("valid");}
      else{input.removeClass("valid").addClass("invalid");}
      console.log("name");
    });


    $('#mail').on('input', function() {
      var input=$(this);
      var email=mailcheck(input.val());


      if(email){input.removeClass("invalid").addClass("valid");}
      else{input.removeClass("valid").addClass("invalid");}
    });
    function mailcheck(inputtxt){
      var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      return regex.test(inputtxt);
    }

    function checked() {
      var checkBox = document.getElementById("check");

      var text = document.getElementById("text");
      if (checkBox.checked == true){
        text.style.display = "block";
      } else {
        text.style.display = "none";
      }
    }

    $('#cc-num').on('input', function() {
      var input=$(this);
      var paymentIsGood = cardnumber(input.val());
      if (paymentIsGood){input.removeClass("invalid").addClass("valid");
    }
    else{
      input.removeClass("valid").addClass("invalid");
  }
});
$('#cvv').on('input', function() {
  var input=$(this);
  var payment = cvvTest(input.val());
  if (payment){
    input.removeClass("invalid").addClass("valid");
}
else{input.removeClass("valid").addClass("invalid");
}
});
function cvvTest(inputtxt){
  var CVV = /^[0-9]{3,4}$/;
  return CVV.test(inputtxt);
}
function cardnumber(inputtxt){  
  var cardnumbers = /^\d{13,16}$/;
  return cardnumbers.test(inputtxt);
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

    nameValid = nameValidation();
    emailValid = emailValidation();
    activityValid = activityValidation();
    creditValid = creditCardValidation();
    event.preventDefault(); 
    
     validInfo = false;
    
    if (nameValid && emailValid && activityValid && creditValid) {   
      alert("Form ready for submition");
      window.location.reload(); 
    } else {
      alert("Form can't be not submitted, please check for errors");
      validInfo = false;
    }
  };
  //Error check
  
  //$("form").submit(function(event) {
    
    /*
    Vvalidation info
    */
  
   $('#name, #mail, #cc-num, #zip, #cvv, #other-field').keyup(function (){
    if ( $(this).val() === "")  {
    $(this).removeClass('success');
    $(this).addClass('error');
    } else {
    $(this).removeClass('error');
    $(this).addClass('success');
    }
    });
    
    var emailAddress = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    var creditCard = /\b\d{4}(| |-)\d{4}\1\d{4}\1\d{4}\b/g;
    var zipCode = /^\d{5}(?:[-\s]\d{4})?$/;
    var errorMessage ="";
    
    $('form').prepend('<p id="error-message"></p>');
    $('#error-message').hide();
    $('form').submit(function (e){
    e.preventDefault();
    
    if ( $('#name').val() === "" ) {
    console.log("Error!");
      $("html, body").animate({scrollTop: 0}, "slow");
        errorMessage = "<h2>Error!</h2> Please enter name.";
      $('#name').addClass('error');
      $('#name').focus();
        } else if ( !emailAddress.test($('#mail').val()) ) {
      $("html, body").animate({scrollTop: 0}, "slow");
        errorMessage = "<h2>Error!</h2> Please enter a valid email.";
      $('#mail').focus();
        } else if ( $(".activities > label > input:checked").length === 0 ) {
      $("html, body").animate({scrollTop: 0}, "slow");
        errorMessage = "<h2>Error!</h2> Please select at least one activity.";
      $('.activities').focus();
        } else if ( $("#payment").val() === "select_method" )  {
      $("html, body").animate({scrollTop: 0}, "slow");
        errorMessage = "<h2>Error!</h2>Please select a payment method.";
      $('#payment').focus();
        } else if ( $("#payment").val() === "credit card" && !creditCard.test($("#cc-num").val()) )  {
      $("html, body").animate({scrollTop: 0}, "slow");
        errorMessage = "<h2>Error!</h2>Please enter a valid credit card number.";
      $('#cc-num').focus();
        } else if ( $("#payment").val() === "credit card" && !zipCode.test($("#zip").val()) )  {
      $("html, body").animate({scrollTop: 0}, "slow");
        errorMessage = "<h2>Error!</h2>Please enter your zip code.";
      $('#zip').focus();
        } else if ( $("#payment").val() === "credit card" && $("#cvv").val().length < 3)  {
      $("html, body").animate({scrollTop: 0}, "slow");
        errorMessage = "<h2>Error!</h2>Please enter a 3 digit CVV";
      $('#cvv').focus();
        } else {
      $("html, body").animate({scrollTop: 0}, "slow");
        errorMessage = "";
          alert("Registration complete");
    } 
    document.getElementById('error-message').innerHTML = errorMessage;
      $('#error-message').show(); 
    
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
  
  
   //Real time check of input of email info
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
           return true
       }
    
   };

  });
  // mail.addEventListener("input", checkMail);
  
  /*Form validation*/

  
       });
