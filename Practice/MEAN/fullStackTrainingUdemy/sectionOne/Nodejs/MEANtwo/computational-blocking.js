console.log(1);

require('./_fibonacci.js');

console.log(2);

//It takes a long time to process we want to avoid this in async code. to fix this
//problem we can make it do a child process so the main node process doesn't block it.
