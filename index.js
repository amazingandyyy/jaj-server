var express = require('express')
var app = express()

var bodyParser = require('body-parser')

app.use(bodyParser.json());

var db = {};

app.get('/', function (req, res) {
  res.send({
    "info": {
      "author": "amazingandyyy",
      "license": "MIT",
      "contact": "www.amazingandyyy.com",
      "version": "0.0.2",
      "repo": "https://github.com/amazingandyyy/jaj-server"
    }
  });
});

app.get('/msg/:data', function(req, res) {
  // var info = JSON.parse(req.query);
  console.log('data', req.params.data);
  res.send(req.params.data);
});

app.get('/incoming-sms', function(req, res) {
  var info = JSON.parse(req.query);
  console.log('info', req.query);
  res.sendStatus(200);
});

app.listen(4040);
