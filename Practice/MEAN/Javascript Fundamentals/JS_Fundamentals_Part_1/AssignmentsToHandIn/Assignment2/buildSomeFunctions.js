// Basic: Make a function that can be used anywhere in your file and that when
// invoked will console.log('I am running!'); Give it the name runningLogger.

function runningLogger(){
  console.log("I am running");
}


// Basic: Make a function that is callable, has one parameter and multiplies the value of the
// parameter by 10 before returning the result.
//  Give it the name multiplyByTen. Invoke it, passing it the argument 5.


function multiplyBy10(numb){
  if (typeof(numb) == "number"){
    return numb*10;
  }
}

// Basic: Write two functions (stringReturnOne and stringReturnTwo) that each return a different hard-coded string


function stringReturnOne(){
  return "cat";
}

function stringReturnTwo(){
  return "dog";
}

function myFunctionRunner(param){
  if (typeof(param)=='function'){
    param();
  }
}
