var express = require('express');
// var bodyParser = require('body-parser');
// var cookieParser = require('cookie-parser')
var routes = require('./server/routers/routers');
var util = require("util");
var app = express();
// app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
// app.use(cookieParser());
// app.set('view engine', 'jade');
//app.set('views', __dirname+"/views" );
app.use('/jquerys',express.static(__dirname + '/app/public/javascripts'));
app.use('/style',express.static(__dirname + '/app/public/stylesheets'));
app.use('/img',express.static(__dirname + '/app/public/images'));
routes(app);

app.listen(1337, function () {
    console.log('ready on port 1337');
});