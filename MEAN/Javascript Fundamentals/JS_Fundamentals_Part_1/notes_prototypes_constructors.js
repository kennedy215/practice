// {
//   color: "red",
//   width: 250,
//   height: 150,
//
// }
// {
//   color: "red",
//   width: 300,
//   height: 150,
//
// }
// {
//   color: "red",
//   width: 400,
//   height: 150,
//
// }
//
// //apple.eat  apple2.eat apple3.eat
//
// {
//   eat: function (){
//
//   }
//   throw: function{
//
//   }
//   nibble: function(){
//
//   }
// }

//Prototype is a shared object it allows us to control our code a lot more
//all methods can run

function ConstructPlayer(health, speed, strength){
  this.health = health;
  this.speed = speed;
  this.strength = strength;

}

console.log(this);

ConstructPlayer.prototype = {
  health: function(){return 100 ;},
  speed: function(){return 50 ;},
  strength: function(){return 20 ;}
}

var player = new ConstructPlayer(70,10,300)
var player2 = new ConstructPlayer(80,100,350)
var player3 = new ConstructPlayer(100,100,100)







function ConstructApple(color, width, height) {  // set up with capital letter and try to keep construct//added arguments to change

  this.color = color;
  this.width = width;
  this.height = height;

// above is the construction worker we're telling it to build us an apple!
//this function is giving back an object

console.log(this); // this a reference to an object // it matters where you call console.log
}



ConstructApple.prototype =  {
  eat: function(){return 'eat that apple'; },
  throw: function(){return 'Throw it!';},
  nibble: function(){return 'nibble like a hamster';}
}


var apple = new ConstructApple("red", 300, 200); //
var apple2 = new ConstructApple("green", 240, 600); //invoking it with a new keyword
var apple3 = new ConstructApple("yellow", 600, 800);
// We're creating a box here  that has a special relationship with the prototype
