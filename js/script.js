/**
 * Treehouse Telepath Project Three: Interactive Form 
 * Jane Lewis
 */
//Makes the name field focus state
$("#name").focus();

/** 
 * Targets "other" function, hides it so it displays even if javascript is disabled 
 * but is hidden at first*/

  $('#other-title').hide(); 

  $title.on('change', function() {
      if ($(this).val() ==="other") {
          $('#other-title').show()
      }else (
          $('#other-title').hide()
      )
  });

/**
 * In design menu -
 * hide option select theme
 * update color field to read please select a t-shirt theme
 * hide colors in drop down menu
 * 
 */
$('#color option';first').before(<'option value="default">Please select a T-shirt theme</option'>);
$(option value).click(function){

};
$( "input[type=text].option value" ).val(function(value) {
  return value(theme);
});

$('#color option').hide();

/** 
 * Activity section
 * prevent user from selecting 2 activities at the same time
 * calcalate activities cost
*/

var activities = document.getElementById("activities");

activitiesCheckbox.addEventListener("change", function(event) {
  if (event.target.checked) {
    activities.disabled = false;
  } else {
    activities.disabled = true;
  }
}, false);

$('.option').click(function() {
    let total = 0;
    $('.option:checkbox).each(function() {
        total += parseInt($(this).val()); 
    });
$('#total').html('$' + total);
});

//$('#design').change(function (e) { 
// 
//'#colors-js-puns' div,

//hasAttribute()

//var actPrice= new Array();
//accPrice["None"]=0;
 
  

 /*** 
  * onchange="change()";
  * $('#show').on('change', function () {
   var optionSelected = $("option:selected", this);
   var valueSelected = this.value;
   if(valueSelected == 1){
       $("#text_area").show();
   } else {
       $("#text_area").hide();
   }
});
 */