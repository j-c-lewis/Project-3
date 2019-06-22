/**
 * Treehouse Telepath Project Three: Interactive Form 
 * Jane Lewis
 */
//Makes the name field focus state

//$(document).ready (function() {
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
Activity Info
Prevents same day and time
*/
/*
$('.checked_all').on('change', function() { 
    $('.checkbox').prop('checked', $(this).prop("checked")); 
});


$('.activities').change(function(){
    $(this).find('input:checkbox').each(function() {
        $(this).attr('disabled', false);
    });
    
    $(this).find('input:checkbox').each(function() {
        if ($(this).prop('checked')) {
        
            var inputText = $(this).parent().text();
            var index = inputText.indexOf("$");
        

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

*/
    /*
    Adds activity cost as activity checked
    */
    var totalCost = 0;
    var jsFrameworks = $("input[name='js-frameworks'");
    var jsLibraries = $("input[name='js-libs']");
    var express = $("input[name='express']");
    var nodeJS = $("input[name='node']");

    $('.activities').append('<div id = "total"></div>');
var price = 0
//price += parseInt(inputText.substring(index+1));
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

    //$('.activities').append('<div id = "total"></div>');
/*
    
var costUpdate = function (cost){
    totalCost += cost;
    document.getElementById('total').innerHTML = "Total: $" + totalCost;
}
  
  
});
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
//});
*/

//Payment
$('#paypal, #bitcoin').hide();
$('#payment').val('credit card');

$(document).ready(function(){ 
    $('#payment').change(function(){
    const paragraphs = $("p"); 
    const paypal = $(paragraphs[0]); 
    const bitcoin = $(paragraphs[1]);

   $('#payment').change(function(){
     if ($('#payment option selected').val() === 'paypal'){
         $('#credit-card, #bitcoin').hide();
         $('#paypal').show(); 
     }  else if ($('#payment option selected').val() === '#bitcoin'){
         $('#credit-card, #paypal').hide();
         $('##bitcoin').show(); 
     }  else if ($('#payment option selected').val() === 'credit-card'){
         $('#credit-card').show();
         $('#paypal, #bitcoin').hide();
     } else {
         return  ('#credit-card')
     }
    }); 

     

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

//Validation
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
    errorMessage = "<h2>Error!</h2> Please ensure you have entered all required fields.";
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
    alert("Thanks for registering.");
    } 
    document.getElementById('error-message').innerHTML = errorMessage;
    $('#error-message').show();
    });
    

