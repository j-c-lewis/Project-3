



/** 
 * function replaceContentInContainer(target, source) {
    document.getElementById(target).innerHTML = document.getElementById(source).innerHTML;
  }
  
  function replaceContentInOtherContainer(replace_target, source) {
    document.getElementById(replace_target).innerHTML = document.getElementById(source).innerHTML;
  }
*/

/** 
 * Targets "other" function, hides it so it displays even if javascript is disabled 
 * but is hidden at first*/
 
$(document).ready(
    function()
    {
      $('').removeClass('');
    }
 );

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