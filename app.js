'use strict';
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser')
//var http = require('http').Server(app);
//var io = require('socket.io')(http);
var LoginRoutes = require('./server/routes/LoginRoutes');
var TaskRoutes = require('./server/routes/TaskRoutes');


app.use('/chat', express.static(path.join(__dirname, 'public/src')));
app.use('/', express.static(path.join(__dirname, 'client/public')));
app.use('/src', express.static(path.join(__dirname, 'public/src')));
app.use('/js', express.static(path.resolve(__dirname, 'public/node_modules')));
app.use('/assets', express.static(path.resolve(__dirname, 'public/src/assets')));
app.use('/node_modules', express.static(path.resolve(__dirname, 'public/node_modules')));

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

const loginRoutes =  new LoginRoutes();
const taskRoutes =  new TaskRoutes();

app.use(loginRoutes.router);
app.use(taskRoutes.router);

app.listen(8888, function () {
  console.log('Example app listening on port 8888!');
});