require('./instantHello'); //
var goodbye = require('./talk/goodbye');
var talk = require('./talk');
var question = require('./talk/question');

talk.intro(); // You can call on the methods from talk folder
talk.hello("Jim");   //You can push variables into methods this way

var answer = question.ask("What is the meaning of Life?");
console.log(answer);


goodbye();

//invoke goodbye function


//require instantHello
//if we just put in a string it'll just look in the node module folder
//we want to bring in a file sitting next to it.
//we prefix it to look at the file next to it.
//Best practice not to use .js we can if we want.
//This shows us how to bring in raw javascript code when we call require


//Goodbye
//we need to require a goodbye file and assign it through a variable.

//var talk will search through the whole folder.
