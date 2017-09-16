var express = require('express')
var app = express()

var bodyParser = require('body-parser')

app.use(bodyParser.json())

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
})

app.get('/incoming-sms', function(req, res) {
  console.log(req.query);
  res.sendStatus(200);
})

app.listen(3000);
