var express = require("express");
  var app = express();
  app.get('/', function(req,res){
    res.send("<h1> Hello World </h1>")
  })

  app.listen(8000, function(){
    console.log("listening on port 8000");
  })

  app.use(express.static(__dirname + "/static")); // directs to the folder and it's contents static

  //all static content must go in the static folder including styles and static javascript files

  app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"},
        {name: "Jay", email: "jay@codingdojo.com"},
        {name: "Brendan", email: "brendan@codingdojo.com"},
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})
