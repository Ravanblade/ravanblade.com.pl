var express = require('express');
var app = express();
var port = process.env.PORT || 3001;
var mongoose = require("mongoose");
var project = require("./models/projects");
var users = require("./models/users");
var bodyParser = require("body-parser");
var jsonwebtoken = require("jsonwebtoken");
var cors = require('cors');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mo1385_ravan:p6gYNkaKw1ZIUK5rQ811@mongo16.mydevil.net/mo1385_ravan');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(function(req, res, next) {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1], "h$gdf%h&rtdh8rt", function(err, decode) {
      if (err) req.user = undefined;
      req.user = decode;
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
});

var routes = require('./routes/routes');
routes(app);

app.listen(port);

app.use((req, res) => {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

console.log('API Started on port: ' + port);
