var filename = "index.js";

var hello = function(name){
  console.log("Hello " + name);
};

var intro = function(){
  console.log("I'm a node file called" + filename);  // the method can access the variable!! app.js cannot read this
};

module.exports = {
  hello : hello,
  intro : intro
};

//create a couple of methods
//module.exports makes it possible to export the functions as objects
//to app.js
