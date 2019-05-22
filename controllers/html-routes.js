const axios = require('axios');
const { promisify } = require('util');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const passport = require('passport');
const User = require('../models/User');
const PreSubcriber = require('../models/PreSubscriber');
const db = require("../models");
const randomBytesAsync = promisify(crypto.randomBytes);

module.exports = function (app) {
  // Home Page
  app.get('/', function (req, res) {
    // assign the handlebar object any data to be read into the template. this separates the data from the markup.
    var hbsObject = {
      user: req.user
    };
    // console.log(hbsObject);
    res.render('index', {
      hbsObject: hbsObject
    });
  });

  /**
   * POST /signup
   * Create a new local account.
   */
  app.post('/', function(req, res, next) {
    // console.log('post');
    // console.log('---------------------------');
    // console.log(req.body.body);
    // console.log('---------------------------');
    const preSubscribers = new PreSubcriber({
      email: req.body.body
    });
    
    preSubscribers.save((err, data) => {
      // console.log('Analyzing Data...');
      if(data) {
        // console.log('Your data has been successfully saved.');
        res.send(data);
      }
      else {
        // console.log('Something went wrong while saving data.');
        // console.log(err);
        res.send(err);
      }
    });
  });
};