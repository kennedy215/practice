//We are going to create our very own constructor. Create a VehicleConstructor
//that takes in the name, number of wheels, and the number of passengers. Then complete the following tasks:

//Have the Vehicle constructor also take in a “speed” Store the speed as an attribute
function VehicleConstructor(name,wheels,passengers,speed){
  if(!(this instanceof VehicleConstructor)){
    return new VehicleConstructor(name,wheels,passengers,speed);
  }
  //private constructor
  //Create a private variable called distance_travelled that starts at 0
  var distance_travelled = 0;
  var self = this;
  //Create a private method called updateDistanceTravelled that increments distance traveled by speed
  function updateDistanceTravelled(){
    distance_travelled += self.speed;
    console.log(distance_travelled);

  }
  //everything below is public
  //var vehicle = {}; // create an empty object
  this.name = name; // assign the object methods from the parameters
  this.wheels = wheels;
  this.passengers = passengers;
  this.speed = speed;

  //Each vehicle should have a makeNoise method
  this.makeNoise = function(){
    console.log("make noise!");
  }
return this;
  console.log(vehicle.makeNoise);
}

var Bike = new VehicleConstructor("Bike",2,1,3);
Bike.makeNoise = function(){
  console.log("ring, ring!")
}
//Create a Sedan
var Sedan = new VehicleConstructor("Sedan",4,5,110);
//Redefine the Sedan’s makeNoise method to print “Honk Honk!”
Sedan.makeNoise = function(){
  console.log("honk, honk!")
}
//Using constructor create a bus
var Bus = new VehicleConstructor("Bus",4,60,80);
//Add a method to Bus that takes in the number of passengers to pick up
// and adds them to the passenger count​
Bus.pickUpPassengers = function(passengers){
  Bus.passengers += passengers;
}

console.log(Bus.passengers);

Bus.pickUpPassengers(20);

console.log(Bus.passengers);
