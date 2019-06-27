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
    
    $('#color').find('option').hide();
    
        /*
        Activity
        Prevents same date and time from being selected
        Adds activity cost as activity checked
        */
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
         //const paragraphs = $("p"); 
         //const paypal = $(paragraphs[0]); 
         //const bitcoin = $(paragraphs[1]);
     
         //console.log('#payment');
     
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
     
     /*Allow only numbers input*/
     
     function numbersOnly(event) {
       event.target.value = event.target.value.replace(/[^0-9]+/, '');
     };
     
    document.getElementById('cc-num').addEventListener('keyup', numbersOnly);
     document.getElementById('zip').addEventListener('keyup', numbersOnly);
     document.getElementById('cvv').addEventListener('keyup', numbersOnly);
     
     /*
     function changePaymentHandler(event) {
       hidePaymentFields();
       var ccreq = document.getElementById('cc-num');
       var cczip = document.getElementById('zip');
       var cccvv = document.getElementById('cvv');
     
       if (event.target.value === 'credit card') {
           removeSelectPaymentError();
         document.getElementById('credit-card').style.display = 'block';
     }
     document.querySelector('select[name="user_payment"]').addEventListener('change', changePaymentHandler);
     */
     
     
     /*
     Prevent submission of blank name field
     prevent submission of blank email field and confirms correct input added
     
     */
     function nameValidation() {
         const name = $("#name").val();  
         let nameValid = false;
         if (name.length <= 0) {
           //if ($("#name").next(".validation").length === 0) {
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
       
       
         (e).preventDefault;
     }
     //};
       
       /*
       Vvalidation info
       */
    /*
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
         */
     
      // Real time check of input of name info
      /*
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
      mail.addEventListener("input", checkMail);
     */
     /*Form validation*/
     /*
     $("form").submit(function(event) {
       //console.log('form submission')
       nameValid = nameValidation();
        emailValid = emailValidation();
        activityValid = activityValidation();
        creditValid = creditCardValidation();
        event.preventDefault(); 
        
         validInfo = false;
        
        if (nameValid && emailValid && activityValid && creditValid) {  
         validInfo = true;
          alert("Form submit");
          window.location.reload();  
        } else {
          validInfo = false
            alert("Can't submit form not.");
          return true
        }
        console.log('#form');
      });     
*/
      //$("form").submit(function(event);