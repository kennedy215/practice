//Go through each value in the array x, where x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]. Log each value.

// x =  [3,5,"Dojo", "rocks", "Michael", "Sensei"];
//
// //#1
//
// var i;
// var x =  [3,5,"Dojo", "rocks", "Michael", "Sensei"]; //array
// for (var i = 0; i < x.length; i++) { //loops over the array
//     //console.log(x[i]); //prints the name of the
//     //console.log([i]) //this would all of the indexes
//     //console.log(x) // this would print out what's in x 6x
//     //console.log([i]+ x) find out why
//
//     //console.log((x)[i])
//     console.log(x[i]);
// }

// #2 Add a new value (100) in the array x using a push method.

// var x = [3,5,"Dojo", "rocks","Michael","Sensei"]
// x.push(100);
//
// console.log(x);

// #3
//Add a new array ["hello", "world", "JavaScript is Fun"] to variable x. Log x in the console and analyze how x looks now.

// newArr = ["hello", "world", "JavaScript is Fun"]; // wrong! :( )
// console.log(x + " ," + newArr);
// console.log(x);

var newArr

var newArr = ["hello", "world", "JavaScript is Fun"];
var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];
var children = newArr.concat(x);

console.log(children)




//answer

// Set up array variable

var x =  [3,5,"Dojo", "rocks", "Michael", "Sensei"];

// Print all values in array
for (var i = 0; i < x.length; i++) {
  console.log(array[i]);
}

// Push the value 100 into the array
x.push(100);

// Push another array to array x
x.push(["hello", "world", "JavaScript is Fun"]);

console.log(x);

// Print all the sum of numbers from 1-500
var sum = 0;
for (var i = 1; i < 501; i++) {
  sum += i;
}
console.log(sum);


// Find minimum value of following array
var array = [1,5,90,25,-3,0];

var min = array[0];
for (var i = 1; i < arr.length; i++) {
  if (arr[i] < min){
    min = arr[i];
  }
}
console.log(min);

// Find average value of array
var sum = arr[0];
for (var i = 1; i < array.length; i++) {
    sum  += arr[i];
}
console.log(sum/arr.length);

// Iterate through object
var new_ninja = {
  name: 'Jessica',
  profession: 'coder',
  favorite_language: 'JavaScript',
  dojo: 'Dallas'
};

for (var key in new_ninja){
  console.log(key + " : " + new_ninja[key]);
}
