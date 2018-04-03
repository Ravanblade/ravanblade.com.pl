'use strict';
var mongoose = require('mongoose');
var user = mongoose.model('Users');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

exports.registerUser = (req, res) => {
  console.log(req.body);
  var hashedPassword = bcrypt.hashSync(req.body.Password, 8);
  req.body.Password = hashedPassword;
  var newUser = new user(req.body);

  newUser.save( (err, user) => {
      if (err) return res.send(err);

      var token = jwt.sign({ id: res._id }, "h$gdf%h&rtdh8rt", {
        expiresIn: 86400 //24h
      });

      res.send({ auth: true, token: token });
  });
};

exports.loginUser = (req, res) => {
  user.findOne({ Login: req.body.Login }, (err, u) => {
    if (err) return res.send(err);
    if (!u) return res.send('Not found.');
    console.log(req.body.Password);
    console.log(u.Password);
    if (!bcrypt.compareSync(req.body.Password, u.Password))
      return res.send({ auth: false, token: null });

    var token = jwt.sign({ id: u._id }, "h$gdf%h&rtdh8rt", {
      expiresIn: 86400
    });

    res.send({ auth: true, token: token });
  });
};

exports.logoutUser = (req, res) => {
  res.send({ auth: false, token: null });
};

exports.isUserLogged = (req, res) => {
  if (req.user) {
    next();
  } else {
    return res.json({ message: 'Unauthorized user!' });
  }
};
