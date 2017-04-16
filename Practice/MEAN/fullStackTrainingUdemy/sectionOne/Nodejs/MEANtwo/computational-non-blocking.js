var child_process = require('child_process');  //make a spawn
console.log(1);

var newProcess = child_process.spawn('node', ['_fibonacci.js'], {
  stdio : 'inherit'
});

console.log(2);

//It takes a long time to process we want to avoid this in async code. to fix this
//problem we can make it do a child process so the main node process doesn't block it.
//It process 1 and 2 and allows for the computation to complete. You can
//handle heavy computational process with this method. This is for good node development.
//this is good for site with heavy traffic!!! 
