// JS rearranges your code before running it
// function awesome() {     // the function floated to the top!
// console.log("too good to be true");
// }
// awesome();               // so now awesome is defined before we invoke it!
//
//
//
// varFunction();
// var varFunction = function() {
//   console.log("How will this get hoisted?")
// }
//
// var varFunction // variable declaration
// function varFunction(){ // function
// console.log("How will this get hoisted"); //console log
// }
//
// varFunction(); //invoke undefined function
//
//


// // HOW THE JS INTERPRETER REARRANGES THE CODE
// var varFunction; //2           // the variable declaration gets hoisted to the top
// varFunction(); //1            // this tries to invoke "undefined": we get "undefined is not a function"
// varFunction = function() { //3 FLIP IT
// console.log("How will this get hoisted?")//4
// }


//INVOTE UND


// var Honey;
// function Honey(){
//
//   console.log("catch more flies with honey than with vinegar")
//
// }
//
// Honey();

//
console.log(first_variable);
var first_variable = "Yipee I was first!";
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
console.log(first_variable);




var first_variable;
first_variable = "Yipee I was first";
function firstFunc(){
  first_variable = "not anymore!!!";
  console.log(first_variable);
}
firstFunc()
console.log(first_variable);
