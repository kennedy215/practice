//We are going to create our very own constructor. Create a VehicleConstructor
//that takes in the name, number of wheels, and the number of passengers. Then complete the following tasks:

function VehicleConstructor(name,wheels,passengers){
  var vehicle = {}; // create an empty object

  vehicle.name = name; // assign the object methods from the parameters
  vehicle.wheels = wheels;
  vehicle.passengers = passengers;

  //Each vehicle should have a makeNoise method
  vehicle.makeNoise = function(){
    console.log("make noise!");
  }
return vehicle;
  console.log(vehicle.makeNoise);
}

var Bike = VehicleConstructor("Bike",2,1);
Bike.makeNoise = function(){
  console.log("ring, ring!")
}
//Create a Sedan
var Sedan = VehicleConstructor("Sedan",4,5);
//Redefine the Sedan’s makeNoise method to print “Honk Honk!”
Sedan.makeNoise = function(){
  console.log("honk, honk!")
}
//Using constructor create a bus
var Bus = VehicleConstructor("Bus",4,60);
//Add a method to Bus that takes in the number of passengers to pick up
// and adds them to the passenger count​
Bus.pickUpPassengers = function(passengers){
  Bus.passengers += passengers;
}

console.log(Bus.passengers);

Bus.pickUpPassengers(20);

console.log(Bus.passengers);
