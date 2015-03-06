{"filter":false,"title":"server.js","tooltip":"/server.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":5,"column":0},"end":{"row":5,"column":1},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":72},"end":{"row":6,"column":73},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":16},"end":{"row":7,"column":17},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":0},"end":{"row":6,"column":73},"action":"remove","lines":["app.use(serveStatic('./mockup', {'index': ['index.html', 'index.htm']}));"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":0},"end":{"row":7,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":31},"end":{"row":6,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":0},"end":{"row":8,"column":2},"action":"insert","lines":["app.get('/', function (req, res) {","  res.render('index', { title: 'Hey', message: 'Hello there!'});","})"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":2},"end":{"row":2,"column":3},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":3},"end":{"row":2,"column":4},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":6},"end":{"row":2,"column":7},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":7},"end":{"row":2,"column":8},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":9},"end":{"row":2,"column":10},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":9},"end":{"row":2,"column":10},"action":"remove","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":9},"end":{"row":2,"column":10},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":12},"end":{"row":2,"column":13},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":13},"end":{"row":2,"column":14},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":13},"end":{"row":2,"column":15},"action":"remove","lines":["re"]},{"start":{"row":2,"column":13},"end":{"row":2,"column":24},"action":"insert","lines":["require(\"\")"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":23},"end":{"row":2,"column":24},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":22},"end":{"row":2,"column":24},"action":"remove","lines":["st"]},{"start":{"row":2,"column":22},"end":{"row":2,"column":28},"action":"insert","lines":["static"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":32},"end":{"row":0,"column":33},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":41},"end":{"row":1,"column":42},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":30},"end":{"row":2,"column":31},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":31},"end":{"row":3,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":0},"end":{"row":5,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":0},"end":{"row":10,"column":2},"action":"insert","lines":["function compile(str, path) {","   return stylus(str)","     .set('filename', path)","     .set('compress', true)","     .use(nib())","     .import('nib');"," }"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":0},"end":{"row":3,"column":21},"action":"insert","lines":["nib = require('nib');"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":1},"end":{"row":3,"column":2},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":2},"end":{"row":3,"column":3},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":3},"end":{"row":3,"column":4},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":25},"end":{"row":4,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":20},"end":{"row":14,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":0},"end":{"row":18,"column":3},"action":"insert","lines":[" app.middleware({","     src: __dirname","   , dest: __dirname + '/public'","   , compile: compile"," })"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":3},"end":{"row":18,"column":4},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":0},"end":{"row":14,"column":1},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":25},"end":{"row":16,"column":31},"action":"remove","lines":["public"]},{"start":{"row":16,"column":25},"end":{"row":16,"column":26},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":26},"end":{"row":16,"column":27},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":27},"end":{"row":16,"column":28},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":28},"end":{"row":16,"column":29},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":29},"end":{"row":16,"column":30},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":30},"end":{"row":16,"column":31},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":22},"end":{"row":2,"column":28},"action":"remove","lines":["static"]},{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":23},"end":{"row":2,"column":24},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":24},"end":{"row":2,"column":25},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":25},"end":{"row":2,"column":26},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":26},"end":{"row":2,"column":27},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":27},"end":{"row":2,"column":28},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":4},"end":{"row":14,"column":14},"action":"remove","lines":["middleware"]},{"start":{"row":14,"column":4},"end":{"row":14,"column":7},"action":"insert","lines":["use"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":8},"end":{"row":14,"column":25},"action":"insert","lines":["stylus.middleware"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":25},"end":{"row":14,"column":26},"action":"insert","lines":["("]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":3},"end":{"row":18,"column":4},"action":"insert","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":0},"end":{"row":23,"column":2},"action":"remove","lines":["function compile(str, path) {","   return stylus(str)","     .set('filename', path)","     .set('compress', true)","     .use(nib())","     .import('nib');"," }","","var app = express();","app.use(stylus.middleware({","     src: __dirname","   , dest: __dirname + '/static'","   , compile: compile"," }));","app.set('views', './views')","app.set('view engine', 'jade');","app.get('/', function (req, res) {","  res.render('index', { title: 'Hey', message: 'Hello there!'});","})"]},{"start":{"row":5,"column":0},"end":{"row":19,"column":46},"action":"insert","lines":["var app = express()","function compile(str, path) {","  return stylus(str)","    .set('filename', path)","    .use(nib())","}","app.set('views', __dirname + '/views')","app.set('view engine', 'jade')","app.use(express.logger('dev'))","app.use(stylus.middleware(","  { src: __dirname + '/public'","  , compile: compile","  }","))","app.use(express.static(__dirname + '/public'))"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":26},"end":{"row":15,"column":2},"action":"remove","lines":["","  "]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":3},"end":{"row":17,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":25},"end":{"row":4,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":0},"end":{"row":4,"column":30},"action":"insert","lines":["var morgan = require('morgan')"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":0},"end":{"row":14,"column":30},"action":"remove","lines":["app.use(express.logger('dev'))"]},{"start":{"row":14,"column":0},"end":{"row":14,"column":27},"action":"insert","lines":["app.use(morgan('combined'))"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":46},"end":{"row":19,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":0},"end":{"row":23,"column":2},"action":"insert","lines":["app.get('/', function (req, res) {","  res.render('index',","  { title : 'Home' }","  )","})"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":11},"end":{"row":24,"column":15},"action":"remove","lines":["3000"]},{"start":{"row":24,"column":11},"end":{"row":24,"column":12},"action":"insert","lines":["1"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":12},"end":{"row":24,"column":13},"action":"insert","lines":["3"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":13},"end":{"row":24,"column":14},"action":"insert","lines":["3"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":14},"end":{"row":24,"column":15},"action":"insert","lines":["7"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":15},"end":{"row":24,"column":16},"action":"insert","lines":["0"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":18},"end":{"row":21,"column":19},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":19},"end":{"row":21,"column":20},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":20},"end":{"row":21,"column":21},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":21},"end":{"row":21,"column":22},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":22},"end":{"row":21,"column":23},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":23},"end":{"row":21,"column":24},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":24},"end":{"row":21,"column":25},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":25},"end":{"row":21,"column":26},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":26},"end":{"row":21,"column":27},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":27},"end":{"row":21,"column":28},"action":"insert","lines":[":"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":28},"end":{"row":21,"column":29},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":29},"end":{"row":21,"column":31},"action":"insert","lines":["''"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":30},"end":{"row":21,"column":31},"action":"insert","lines":["F"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":31},"end":{"row":21,"column":32},"action":"insert","lines":["A"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":32},"end":{"row":21,"column":33},"action":"insert","lines":["T"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":0},"end":{"row":24,"column":18},"action":"remove","lines":["app.listen(13370);"]},{"start":{"row":24,"column":0},"end":{"row":26,"column":3},"action":"insert","lines":["app.listen(3001, 'localhost', function() {","  console.log(\"... port %d in %s mode\", app.address().port, app.settings.env);","});"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":11},"end":{"row":24,"column":15},"action":"remove","lines":["3001"]},{"start":{"row":24,"column":11},"end":{"row":24,"column":12},"action":"insert","lines":["1"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":12},"end":{"row":24,"column":13},"action":"insert","lines":["3"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":13},"end":{"row":24,"column":14},"action":"insert","lines":["3"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":14},"end":{"row":24,"column":15},"action":"insert","lines":["7"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":15},"end":{"row":24,"column":16},"action":"insert","lines":["0"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":43},"end":{"row":25,"column":58},"action":"remove","lines":[".address().port"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":26,"column":3},"end":{"row":26,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1425685183000,"hash":"0b725d65d68ac7c6e6096f0de1e67e97fd9f923f"}