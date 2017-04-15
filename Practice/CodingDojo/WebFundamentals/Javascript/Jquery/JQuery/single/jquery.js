$(document).ready();

$(".fadeIn").on("click", function(){
$('div').fadeOut(1000,function(){
  $(this).remove();
});
});


$(".fadeIn").on("click", function(){
$('div').fadeIn(1000,function(){
  $(this).remove();
});
});




// $(".fadeOut").on("click", function(){
// $('div').fadeOut(1000,function(){
//   $(this).remove();
// });



// $("button").on("click, function()"{
// $('div').fadeIn();
// });
