//
// var myarr = [1,5,25,125,42];
//
// for(var index in myarr){
//   console.log(myarr[index]*5);
// }
// //using a while
//
// // Prefered way to do array itterations
//
// for(var i = 0; i < myarr.length; i ++){
//   console.log(myarr[i]*5)
//   conole.log("The right way!")
// }
//
// var myobject = {
//   language: "Javascript",
//   dojo: "Washington DC",
//   favorite_instructor: "Minh, no wait Dan AAahhh"
// }

// Object.keys(myobject).forEach(function(key,value){
//   console.log (key, value, myobject[key]);
// })

// for (var key in myobject){
//   console.log(key, myobject[key] + 'the value');
// }
//

// my_first_var inside the operator console.log is a reference to the memory space that holds the string
//"Data"

//practing referencing memory
// var my_first_var
// my_first_var = "Data"
//
// console.log(my_first_var)
// //below using typeof to discover what type of data the operator is referenceing
// console.log(typeof(my_first_var));
//
//
//
// var superhuman
// superhuman = "spiderman"
//
// console.log(superhuman);
// console.log(typeof(superhuman));
//
// var strengthLevel
// strengthLevel = 5
// console.log(strengthLevel)
// console.log(typeof(strengthLevel));
//
//
//
//
// var empty_array = [ ];             // create empty array with square brackets  (creates a bureau of drawers)
// var string_array = [ "hi", "these", "are", "strings" ];
// var x = 15;                       // you can log these vars in the console (even a whole array)
// console.log("Logging variables to the console", empty_array, string_array, x);
//                                   // use square brackets again(e.g. string_array[1])  to access values in the array (to open a specific drawer in the bureau)
// console.log('2nd value of string_array', string_array[1]);
//                                    // get the length of the array
// console.log('string_array has a length of', string_array.length);
// string_array.push('awesome');      // adding a new value to the array
// console.log(string_array);         // you'll note that string_array now has a new value called awesome
// string_array.pop();                // removing the last value in the array
// console.log(string_array);         // the last value in the array is now gone!
//
//
// var arr = [3, 6];
// arr[234] = "hi";
// //
// console.log( arr.length ); // 235
// console.log( arr[34] ); // undefined
//
//
// var arr = [3, 6];
// arr[234] = "hi";
// //
// console.log( arr.length ); // 235
// console.log( arr[34] ); // undefined
// arr.length = 3;
// console.log( arr[34] );
// console.log( arr[234] );
// console.log( arr.length );
// arr.length = 500;
// console.log( arr[234] );
// console.log( arr.length );


//
// function myFunctionName(firstParameter, secondParameter){
//   var myProduct = firstParameter * secondParameter;
//   return myProduct
// }
//
// myFunctionName(5,14);

//
//
// awesome();
// function awesome() {
//   console.log("too good to be true");
// }
//
// drunk();
// function drunk() {
//   console.log("I'm messed up man")
// }
//
// punch();
// function punch(){
//   console.log("Pom jah kah khun!")
// }
//
//
// smack();
// function smack(){
//   console.log("Smack!!!")
// }
//
//
// fly();
// function fly(){
//   console.log("Fly in the sky!!!")
// }

// var glazedDonuts =[
//   {
//     frosting: 'glazed',
//     type: 'oldfashioned',
//     age: '45',
//     time: 'minutes'
//   },
//   {
//     frosting: 'glazed'
//     type: 'regular'
//     age: '5'
//     time: 'minutes'
//   }
// ];

//Object Review
// obj = { number: 5, name: "Jim", power: 5, species: "human"}
//
// console.log(obj.number);
// console.log(obj.name);
//console.log(obj.power);

//Better way to pull an object
//
// var human;
// human = "Jim"
//
// console.log(human)
//
// var dog;
// dog = "Marley"
//
// console.log(dog)
//
// var fiance;
// fiance = "Subha"
//
// console.log(fiance)
//
// console.log(typeof(dog))
//
// console.log(typeof(fiance))
//
// console.log(typeof(human))

// var monster;
// monster = "zombie";
//
// console.log(monster);
// console.log(typeof(monster))

// var empty_array = [ ];             // create empty array with square brackets  (creates a bureau of drawers)
// var string_array = [ "hi", "these", "are", "strings" ];
// var x = 15;                       // you can log these vars in the console (even a whole array)
// console.log("Logging variables to the console", empty_array, string_array, x);
//                                   // use square brackets again(e.g. string_array[1])  to access values in the array (to open a specific drawer in the bureau)
// console.log('2nd value of string_array', string_array[1]);
//                                    // get the length of the array
// console.log('string_array has a length of', string_array.length);
// string_array.push('awesome');      // adding a new value to the array
// console.log(string_array);         // you'll note that string_array now has a new value called awesome
// string_array.pop();                // removing the last value in the array
// console.log(string_array);         // the last value in the array is now gone!
//
//
//
// console.log("shit I did it", string_array,x);
// console.log("pick up the next one", string_array[3]);
//
// string_array.pop(3);
// console.log(string_array)

// var arr = [3,6];
// arr[234] = "hi";
//
// console.log(arr.length);
// //console.log(arr[34]);


// var arr = [3, 6];
// arr[234] = "hi";
// //
//console.log( arr.length ); // 235
//console.log( arr[34] ); // undefined
 //console.log(arr.length = 3); //3
//console.log( arr[34] );
//console.log( arr[234] );
// console.log( arr.length );
//console.log(arr.length = 500);
// console.log( arr[234] );
// console.log( arr.length );

// //
// function myFunctionName(firstParameter, secondParameter){
//   var myProduct = firstParameter * secondParameter;
//   return myProduct
// }
//
// //above is known as calling, invoking, executing, starting, or running a function
//
// console.log(myFunctionName(5,14));
//
//
// function powerLevel(strength, speed){
//   var myPower = strength * speed;
//   return myPower;
// }
//
// console.log(powerLevel(100,200));
//














//

//
//
//

//
//





//
// function horde(zombies,demons){
//   var mainHorde = zombie + demons;
//   return mainHorde;
// }
//
// console.log(mainHorde(500,1000));



//
//
// function army(soldiers,snipers){
//   var USarmy = soldiers + snipers;
//   return USarmy;
// }
//
// console.log(USarmy(6000,5000));
//
//






// function friends(men,women){
//   var theCrew = men + women;
//   return theCrew;
// }
//
// console.log(friends(7,10));


// function friends(men,women){
//   var theCrew = men + women;
//   return theCrew;
// }
//
// console.log(friends(7,10));
//
//
//
// function enemies(green,blue){
//   var Ghouls = green + blue;
//   return Ghouls;
// }
//
// console.log(enemies(10,20))
//
//
//
// function nightmare(roaches,spiders){
//   var critters = roaches + spiders;
//   return critters;
// }
//
// console.log(nightmare(5000,8000
//
//
// ))


//
// var x = 15;
// if ( x < 10 ) {
//    console.log("x is less than 10");
// } else if ( x < 20 ) {
//    console.log("x is less than 20");
// } else {
//    console.log("x is greater than 20!");
// }
//
//
//
//
//
// var z = 20;
// if (z < 200) {
//   console.log("it's ok we can take them");
// } else if (z < 50){
//   console.log("eh there's a lot but we can hang");
// }else{
//   console.log("It's Game Over Man!");
// }
//





// function countDown(number){
//   while(number > 0){
//     console.log(number);
//     number --;
//   }
// }
// countDown(10);
//
//
//
//
//
// function gatesOpen(time){
//   while(time > 0){
//     console.log(time);
//     time --;
//   }
// }
// gatesOpen(20);


//
// for(var i = 0; i < 14; i++){
//   console.log(i);
// }


var array = [4,1,6,9,44];
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}



















//
//
// var ninja = {
//   name:'Susanna',
//   MEAN_belt:10,
//   iOS_belt:10,
//   python_belt:10,
//   php_belt:9, // she hadn't mastered deploying yet!
//   ruby_belt:9.75 // done in 1.5 hrs though!
// }
// for (var key in ninja) {
//   if (ninja.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(ninja[key]);
//   }
// }
//
// var zombie = {
//   name: 'William Deadly',
//   powers: 'eating brains',
//   type: 'undead',
// }
//
// for (var key in zombie) {
//   if (zombie.hasBrains(key)) {
//     console.log(key);
//     console.log(zombie[key]);
//   }
// }



var array = [ function(){console.log('hello there');} ]



var beast = [ function(){console.log('Bear');}]
