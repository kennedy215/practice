//Below anonomous callbacks
// var fs = require('fs');
//
// console.log("Going to get a file");
// fs.readFile('readFileSync.js', function(err, file){
//   console.log("Got the file");
// });
//
// console.log("App continues...");

//This will get the file asyncronistly

//Below name call back this method is easier to read. 
var fs = requre('fs');

var onFileLoad = function(err, file) {
  console.log("Got the file");
};

console.log("Going to get a file");
fs.readFile('readFilesync.js', onFileLoad);

console.log("App continues...");

// console log comes back in the same order with name callback.
