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
    /*
    Not disabled when activity is checked
    */
    
    $('.checked_all').on('change', function() { 
        $('.checkbox').prop('checked', $(this).prop("checked")); 
    });
    
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
    
    
        /*
        Running total as activity checked or unchecked
        */
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
    
    /*
    Hides Paypal and Bitcoin
    */
    $( document ).ready(function() {
        $("#paypal-1").hide();
        $("#bitcoin-1").hide();
    
$(".activities").append('<div class="col-6 col"><label for="cost">Total cost:</label><input id="cost" name="cost" type="text" disabled></div>'
)
});
    $(document).ready(function(){ 
        $('#payment').change(function(){
         
          
          const paragraphs = $("p"); 
          const paypal = $(paragraphs[0]); 
          const bitcoin = $(paragraphs[1]);
    
    /*
    Payment
    Hides Paypal and Bitcoin unless clicked
    displays clicked payment option and hides other two 
    */

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

//Confirms name and email entered
('#name').on('input', function() {
});
$('#name').on('input', function() {
	var input=$(this);
	var name=input.val();
	if(name){input.removeClass("invalid").addClass("valid");}
    else{input.removeClass("valid").addClass("invalid");}
    console.log("name");
});

/*Input valid email
*/
$('#mail').on('input', function() {
    var input=$(this);
    var email=mailcheck(input.val());

    
	if(email){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}
});

//Confirms email is correct format
function mailcheck(inputtxt){
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    return regex.test(inputtxt);
  }

// Confirms 1 activity selected
function box() {
    // Get  checkbox
    var checkBox = document.getElementById("check");
    //  Text output
    var text = document.getElementById("text");
  
    // Display if checkbox selected
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

/*
Confirms input in fields
*/
  $('#cc-num').on('input', function() {
    var input=$(this);
     var paymentIsGood = cardnumber(input.val());

    if (paymentIsGood){input.removeClass("invalid").addClass("valid");
}
    else{input.removeClass("valid").addClass("invalid");
}
});

$('#cvv').on('input', function() {
    var input=$(this);
    var payment = cvvTest(input.val());
    if (payment){input.removeClass("invalid").addClass("valid");
}
    else{input.removeClass("valid").addClass("invalid");
}
});

/*
Validates input format
*/

function cvvTest(inputtxt){
    var CVV = /^[0-9]{3,4}$/;
    return CVV.test(inputtxt);
  }

function cardnumber(inputtxt){   
  var cardnumbers = /^\d{13,16}$/;        
  return cardnumbers.test(inputtxt);
}

$('#zip').on('input', function() {
    var input=$(this);
    var payment = usZipCode(input.val());
    if (payment){input.removeClass("invalid").addClass("valid");
}
    else{input.removeClass("valid").addClass("invalid");
}
});

function usZipCode(str){
    postalCodeRegex  = /^[0-9]{5}(?:-[0-9]{4})?$/;
    return postalCodeRegex.test(str);
};

/*
Validate form
*/

$("#formSubmit").on ("submit", function(e) {

var input=$("#name");
var name=input.val();
if(name){input.removeClass("invalid").addClass("valid");}
else{input.removeClass("valid").addClass("invalid");}

var input=$("#mail");
var email=mailcheck(input.val());

if(email){input.removeClass("invalid").addClass("valid");}
else{input.removeClass("valid").addClass("invalid");}

var paymentIsGood = true;
if ($("#payment").val() === "credit card") {

    /*
Validate credit card
*/

    paymentIsGood = cardnumber($("#cc-num").val())
    && usZipCode($("#zip").val())
    && cvvTest($("#cvv").val());
    if (cardnumber($("#cc-num").val())===false){
        $("#cc-num").removeClass("valid").addClass("invalid");
    } else {
        $("#cc-num").removeClass("invalid").addClass("valid");
        
    }

    if (usZipCode($("#zip").val())===false){
        $("#zip").removeClass("valid").addClass("invalid");
    } else {
        $("#zip").removeClass("invalid").addClass("valid");
    }
    if (cvvTest($("#cvv").val())===false){
        $("#cvv").removeClass("valid").addClass("invalid");
    } else {
        $("#cvv").removeClass("invalid").addClass("valid");
    }
}
$("#cost").val(price);
if (price > 0) {
    $("#cost").removeClass("invalid").addClass("valid");
} else {
    $("#cost").removeClass("valid").addClass("invalid");
}

if ( paymentIsGood &&
    mailcheck($("#mail").val()) &&
    $("#name").val() &&
    $("#cost").val() > 0) {
    //console.log("yay");
} else {
    //console.log("no");
    e.preventDefault();
}
});

('#contact_message').keyup(function(event) {
	var input=$(this);
	var message=$(this).val();
	console.log(message);
	if(message){input.removeClass("invalid").addClass("valid");}
    else{input.removeClass("valid").addClass("invalid");}	

