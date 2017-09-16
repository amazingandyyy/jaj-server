var express = require('express')
var app = express()

var bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', function (req, response) {
  response.send({
    "usage1": "GET Request to /all to get a list of images",
    "usage2": "GET Request to /{name} to get certain charater's image",
    "info": {
      "author": "amazingandyyy",
      "license": "MIT",
      "contact": "www.amazingandyyy.com",
      "usage": "POST Request to /init/{token} to init the database",
      "version": "0.0.2",
      "repo": "https://github.com/amazingandyyy/walking-dead-scraper"
    }
  });
})

app.get('/incoming-sms', function(req, res) {
  console.log(req.query);
  res.sendStatus(200);
})

app.listen(3000);
