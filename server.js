var express = require('express');
var app = express();

// var Sequelize = require("sequelize");

// var sequelize = new Sequelize('giffle_me', 'giffle_me', 'tester', {
//   host: 'new.bossdev.org',
//   port: 5433,
//   dialect: 'postgres',
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// });

// var User = sequelize.define('guser', {
//   firstName: {
//     type: Sequelize.STRING,
//     field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
//   },
//   lastName: {
//     type: Sequelize.STRING
//   }
// }, {
//   freezeTableName: true // Model tableName will be the same as the model name
// });

// Serve static files

app.use(express.static(__dirname + '/build'));
function logRequest(req, res, next) {
  console.log(req.get('content-type'));
  next();
}
// Sample responses to demonstrate async routing data fetch
app.all('*', logRequest);


app.post('/landing', function(req, res) {
  res.json({
    title: "Landing Page"
  });
});

app.post('/home', function(req, res) {
  res.json({
     title: "Home2"
  });
});

app.post('/logout', function(req, res) {
  res.json({
     title: "Logout2"
  });
});

// Run server
var server = app.listen(process.env.PORT || 13370, process.env.IP || "0.0.0.0", function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Essential React listening at http://%s:%s', host, port);
});