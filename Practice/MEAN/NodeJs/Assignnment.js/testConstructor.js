function person(first,last){
  this.person = first;
  this.last = last;
  console.log("great excercise")
}

var John = new person("John, Doe");
console.log("John Doe");

var Jada = new person("Jada, Pinckett");
console.log(Jada);
