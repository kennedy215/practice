// //Question 1 Go through each value in the array x, where x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]. Log each value.
//
// var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]
//
// for(var i = 0; i < x.length; i++){
//   console.log(x[i]);
// }
//
//
// //Add a new value (100) in the array x using a push method.
//
// x.push(100);
// console.log(x);
//
// // //Add a new array
// //
// var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];
// var newArr = ["hello", "world", "JavaScript is Fun"];
//
// var combined = x.concat(newArr);
//
// console.log(combined);
// //
// //
// // //Create a simple for loop that sums all the numbers between 1 to 500. HAve console
// // //log the final sum
// //
// for(var i = 1; i < 501; i++){
//
//   console.log(i);
//
// }

//Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the minimum value, and then print it

// var arr = [1, 5, 90, 25, -3, 0];
// var min = arr[0];
//
// for(var i = 0; i < arr.length; i++){
//    if(arr[i] < min){
//      min = arr[i];
//    }
// }
//
// console.log(min);
//

// Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the average of all of the values, and then print it

var arr = [1, 5, 90, 25, -3, 0];
var sum = 0;

for(var i = 0; i < arr.length; i++){
  sum += arr[i];

  var avg = sum/arr.length;
  console.log(avg);

}
















//
// //Continue to practice
//
// var newNinja = {
//  name: 'Jessica',
//  profession: 'coder',
//  favorite_language: 'JavaScript', //like that's even a question!
//  dojo: 'Dallas'
// }
//
// console.log(newNinja)
//
// for (var key in newNinja) {
//   if (newNinja.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(newNinja[key]);
//   }
// }
