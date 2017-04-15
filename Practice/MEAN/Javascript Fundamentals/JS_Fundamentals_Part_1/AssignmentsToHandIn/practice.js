// var Todd = {
//   name:"Todd",
//   sayName: function(){
//     console.log("Todd");
//   }
// }
//
// Todd.sayName();
//
// function NewPerson(name){
//   return{
//     name:name,
//     sayName: function(){
//       console.log(name);
//     }
//   }
// }
//
//
// var Jay = NewPerson("Jay");
// var Sara = NewPerson("Sara");
// Jay.sayName();
// Sara.sayName();
//
// function Person(name){
//   this.name = name;
//   this.sayName = function(){
//     console.log(name);
//   }
// }
//
// var Jimmy = new Person("Jimmy");
// Jimmy.sayName();




// function NinjaConstructor(name, age, prevOccupation) {
//   var ninja = {};     // the object that will eventually be returned
// /*
// Addition of properties to ninja.
// */
//   ninja.name = name;
//   ninja.age = age;
//   ninja.prevOccupation = prevOccupation;
// /*
// Addition of methods to ninja
// */
//   ninja.introduce = function() {
//     console.log("Hi my name is " + ninja.name + ". I used to be a " + ninja.prevOccupation + " and now I'm a Ninja!");
//   }
// /*
// return ninja
// */
//   return ninja;
// }
//
//
//                       // Create the Andrew Ninja
// var Andrew = NinjaConstructor("Andrew", 24, "Teacher");
// Andrew.introduce();
//                       // Create the Michael Ninja
// var Michael = NinjaConstructor("Michael", 34, "Founder");
//                       // here we redefine the introduce method for a particular "Instance" or Object
// Michael.introduce = function() {
//   console.log("I am the Sensei!")
// }
// Michael.introduce();


// function Ninja(name, age, prevOccupation) {
//   // PRIVATE
//   var privateVar = "This is a private variable";
//   var privateMethod = function() {
//     console.log("this is a private method");
//   }
//   // PUBLIC
//   this.name = name;
//   this.age = age;
//   this.prevOccupation = prevOccupation;
//   this.introduce = function() {
//     console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
//     privateMethod(); // this works since it is a scope that can access privateMethod!
//     console.log(privateVar);      // this works too!
//   }
// }
//
// function Warrior(name, age, style){
//   var privateVar = "secret"
//   var privatMethod = function() {
//     console.log("secret warrior stuff");
//   }
//
//   this.name = name;
//   this.age = age;
//   this.style = crane;
//   this.secret = function(){
//     console.log(this.name + " 10 hits of death " + "using" + this.style + "he's only" + this.age "!!!");
//     privateMethod();
//     console.log(privateVar);
//   }
//
// }
//
// var Juda = new Warrior("Juda", 20, "Golden Fist");
//
// Juda.privateMethod();
//
// privateMethod();
//
// Juda.privateVar;

// function Ninja(name){
//   this.name = name;   // creating instance variables
//   this.distance_traveled = 0;
// }
// // creating an instance method
// Ninja.prototype.walk = function() {
//     console.log(this.name + ' is walking');
//     this.distance_traveled += 1;
//     return this;      // have this method return its own object
//   };
// // creating an instance method
// Ninja.prototype.run = function() {
//     console.log(this.name + ' is running');
//     this.distance_traveled += 5;
//     this.displayDistanceTraveled();
//     return this;      // have this method return its own object
//   };
// //another instance method
// Ninja.prototype.displayDistanceTraveled = function() {
//     console.log('distance traveled: ', this.distance_traveled);
// }
//
//
// // creating instances/objects
// var ninja1 = new Ninja('Jay');
// var ninja2 = new Ninja('Michael');
// var ninja3 = new Ninja('Andrew');
//
//
// ninja1.walk().run().walk().run().run();  // because walk/run returns itself, we can chain these methods
//
//
// // you can also log ninja1 and study it
// console.log(ninja1);
