var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

//set an enviroment variable called APPROOT to keep track of root folder of APP
process.env['APPROOT'] = __dirname;

//require mongoose configuration, use path.join to build the route
require(path.join(process.env['APPROOT'], 'server/config/mongoose.js'));

//require routes configuration, get a function from the module.exports, that gets involked while passing it the app
require(path.join(process.env["APPROOT"], 'server/config/routes.js'))(app);

//start server
app.listen(8000, function(){
  console.log('listening on port 8000');
});
