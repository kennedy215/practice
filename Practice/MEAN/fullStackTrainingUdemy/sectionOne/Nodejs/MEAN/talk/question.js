var answer = "Now that's a good question!";  //private variable

module.exports.ask = function(question){     //chaining to ask 
  console.log(question);
  return answer;
};
