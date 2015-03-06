var express = require('express');
var serveStatic = require('serve-static');
var stylus = require("stylus");
var nib = require('nib');
var morgan = require('morgan')

var app = express()
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(morgan('combined'))
app.use(stylus.middleware({ src: __dirname + '/public'
  , compile: compile
  }))
app.use(express.static(__dirname + '/public'))
app.get('/', function (req, res) {
  res.render('index',
  { title : 'Home', message: 'FAT' }
  )
})
app.listen(13370, 'localhost', function() {
  console.log("... port %d in %s mode", app, app.settings.env);
});