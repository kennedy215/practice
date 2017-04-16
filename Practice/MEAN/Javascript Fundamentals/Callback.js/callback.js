
Call and/or Promises:

In Javascript callbacks and/or promises control the timing of code. A callback/promise moves
 a piece of code outside normal run order.

These methods can be found in Mongoose queries, Angular controllers, and Angular factories.
 For angular a promise resolution occurs after the $http.verb(‘route’) with .then.

Think of this analogy

You are a customer at a count shop that behaves like Javascript. Without a
callback you would order a donut, pay and walk out the door. The server would
then set a donut at the counter.
The callback tells us wait until the donuts is served to the counter then pay
walk out the door.


var beginDonutTransaction = new Promise(
function(resolve,reject){
    var x = setTimeout(function () {
      console.log('donut is on counter');
      resolve();
    }, 10);
  }
);
beginDonutTransaction
.then(function(){
  //this is the resolve
  console.log('pay');
  console.log('walk out door');
})
.catch(function(){
  //this is the reject
  console.log("give me my donut!");
});


// var beginDonutTransaction = Promise(
//   function(resolve, reject){
//     var x = setTimout(function () {
//       console.log('donut is on the counter');
//       resolve();
//     }, 10);
//   };
//   beginDonutTransaction
//   .then(function(){
//     console.log('pay');
//     console.log('walk out door');
//   })
//   .catch(function(){
//     console.log("give me my donut");
//   });
// )
