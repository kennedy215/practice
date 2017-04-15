var _ = {
   map: function(arr, callback) {
     for(var i = 0; i<arr.length; i++)
   },
   reduce: function() {
     // code here;
   },
   find: function() {
     // code here;
   },
   filter: function() {
     // code here;
   },
   reject: function() {
     // code here;
   }
 }
// you just created a library with 5 methods!


var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].
