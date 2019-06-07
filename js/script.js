/**
 * Treehouse Telepath Project Three: Interactive Form 
 * Jane Lewis
 */
//Makes the name field focus state
$("#name").focus();


/** 
 * Targets "other" function, hides it so it displays even if javascript is disabled 
 * but is hidden at first*/
 
$(function() {
  $('(other-title)').hide();
});  

/**
 * In design menu -
 * hide option select theme
 * update color field to read please select a t-shirt theme
 * hide colors in drop down menu
 * 
 */
$("color").change(function){

};

$( "color" )
//  .filter(function( index ) {
 //   return index  === "JS Puns";
//  })
/** 
 *  function change(colorOp) {


  let selectBox = colorOp;
  let selected = selectBox.options[selectBox.selectedIndex].value;
  let textarea = document.getElementById("design");

  if(selected === 'Theme - JS Puns'){
      textarea.style.display = ("Coenflower Blue", "Dark Slate Grey", and "Gold");
  }
  else{
      textarea.style.display = "I &#9829; JS shirt only";
      textarea.style.display =("Tomato," "Steel Blue," and "Dim Grey.")
  }
}
*/

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