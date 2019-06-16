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

console.log(cliked);

//$('.change').click(function() {

let activities
[
    (name = 'all', price = 200),
    (name = 'js - frameworks', day = 'tuesday', time_start = '9', price = '100'),
    (name = 'js_libs', day = 'tuesday', time_start = '13', price = 100),
    (name = 'express', day = 'tuesday', time_start = 9, price =100),
    (name = 'node', day = 'tuesday', time_start = 13, price = 100),
    (name = 'build_tools', day = 'wednesday', time_start = 9, price - 100),
    (name = 'npm', day - 'wednesday', time_start = 13, price = 100)
]

   function getActivityInfo(pickAct) {
        let name = pickAct.name ;
            for (let i = 0; i < activities.lenght; ++i){
        if(activities[i].name == name) {
        }
    } 
        return activities;
   };

  //Target each activity, disable checked boxes
    


//Initial activity cost is 0
let totalActCost= 0;
const pricePerAct=('checkbox');
const conferCost=('checkboxAll');

//Validate name
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(name.value.match(letters))
{
return true;
}
else
{
alert('Name must have alphabet characters only');
uname.focus();
return false;
}
}

//Validate email
function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}
//Append activity
/*$('#activities').append();
**/

//Change without disabling activity

$/** ('.activities').on('change', (event) => {
    event.DefaultOff();

    $("input").prop('disabled', true);
    $("input").prop('disabled', false);
**/
/** 
 * 

$('.option').click(function() {
    let total = 0;
    $('.option:checkbox).each(function() {
        total += parseInt($(this).val()); 
    });
$('#total').html('$' + total);
});
*/



//var actPrice= new Array();
//accPrice["None"]=0;


/* let userName=('name');
 let sendMail=('email');
 let actSec=('Activity Section');
 let ccNum=('Credit Card Number');
 let zCode=('Zip Code');
 let cVV=('CVV');

  
function validateText() {
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