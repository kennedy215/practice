// Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.Write a loop that will go through an array, find the minimum value, and then return itWrite a loop that will go through an array, find the average of all of the values, and then return it
// Rewrite these 3 as anonymous functions assigned to variables.
//
// Rewrite these as methods of an object
//
// Create a JavaScript object called person with the following properties/methods
//
// Properties
// name - set this as your own namedistance_traveled - set this initially as zero
// Methods
// say_name - should alert the object’s name propertysay_something - have it accept a parameter. This function should then say for example “{{your name}} says ‘I am cool’” if you pass ‘I am cool’ as an argument to this method.walk - have it alert for example “{{your name}} is walking” and increase distance_traveled by 3run - have it alert for example “{{your name}} is running” and increase distance_traveled by 10crawl - have it alert for example “{{your name}} is crawling” and increase distance_traveled by 1



// 1.  Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.Write a loop that will go through an array, find the minimum value, and then return itWrite a loop that will go through an array, find the average of all of the values, and then return it
// 2. Rewrite these 3 as anonymous functions assigned to variables.

var sumXToY = function(x,y){
  var sum = 0;
  for(var i = x ;i <= y ; i++){
    sum += i;
  }
  return sum;
}


console.log("sumxy(3,5):", sumXToY(3,5));

//Write a loop that will go through an array, find the minimum value, and then return it

var minValue = function(arr){
  var min = arr[0];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < min){
      min = arr[i];
    }
  }

  return min;

}
console.log("minval([4,2,3]):", minValue([4,2,3]));


//Write a loop that will go through an array, find the average of all of the values, and then return it

var avgArr = function(arr) {
  var sum = 0;

  for(var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum/arr.length;
}

console.log("avgArr(([1,4,5])):", avgArr([1,4,5]));

var helloFunc = function() {
  console.log('hello there');
}



// var object = {
//   color:"red",
//   avgArr: function(arr){
//     var sum = 0;
//
//     for(var i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
//     return sum/arr.length;
//   },
//   helloFunc: function(){
//     console.log('hello there');
//   }
// }
// object.helloFunc();
// console.log(object.avgArr([2,2,2]));




var object = {
  color:"red",
  sumXToY: function(x,y){
    var sum = 0;
    for(var i = x ;i <= y ; i++){
      sum += i;
    }
    return sum;
  },

  minValue: function(arr){
    var min = arr[0];
    for(var i = 0; i < arr.length; i++){
      if(arr[i] < min){
        min = arr[i];
      }
    }

    return min;

  },
  avgArr: function(arr){
    var sum = 0;

    for(var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum/arr.length;
  },
  helloFunc: function(){
    console.log('hello there');
  }
}
object.helloFunc();
console.log(object.avgArr([2,2,2]));
console.log(object.minValue([-1,0]));
console.log(object.sumXToY(5,6));
