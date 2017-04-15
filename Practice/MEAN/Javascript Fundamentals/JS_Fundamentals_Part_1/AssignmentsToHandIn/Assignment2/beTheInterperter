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




//Answer 1
var first_variable;
first_variable = "Yipee I was first";
function firstFunc(){
  first_variable = "not anymore!!!";
  console.log(first_variable);
}

firstFunc();
console.log(first_variable);


//Question Re-Arranged
// var first_variable = "Yipee I was first!";
// function firstFunc() {
//   first_variable = "Not anymore!!!";
//   console.log(first_variable);
// }
// console.log(first_variable);



//Question 2
// var food = "Chicken";
// function eat() {
//   food = "half-chicken";
//   console.log(food);
//   var food = "gone";       // CAREFUL!
//   console.log(food);
// }
// eat();
// console.log(food);


//answer 2
var food;
function eat(){
  var food
  food = "half-chicken";
  console.log(food);
}

food = = "gone";
eat();
console.log(food);



//question
// var new_word = "NEW!";
// function lastFunc() {
//   new_word = "old";
// }
// console.log(new_word);


//answer 3
var new_word;
function lastFunc(){
  var new_word;
  new_word = "old";
}
console.log(new_word);
