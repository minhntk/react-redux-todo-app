'use strict';
var express = require('express');
var app = express();
var path = require('path');
//var http = require('http').Server(app);
//var io = require('socket.io')(http);
var LoginRoutes = require('./server/routes/LoginRoutes');

/*app.get('/', function (req, res) {
  res.send('Hello World!')
})*/



app.use('/chat', express.static(path.join(__dirname, 'public/src')));
app.use('/', express.static(path.join(__dirname, 'client/public')));
app.use('/src', express.static(path.join(__dirname, 'public/src')));
app.use('/js', express.static(path.resolve(__dirname, 'public/node_modules')));
app.use('/assets', express.static(path.resolve(__dirname, 'public/src/assets')));
app.use('/node_modules', express.static(path.resolve(__dirname, 'public/node_modules')));

const loginRoutes =  new LoginRoutes();

app.use(loginRoutes.router);

app.listen(8888, function () {
  console.log('Example app listening on port 8888!')
})



/*http.listen(8888, function(){
  console.log('listening on *:8');
});*/