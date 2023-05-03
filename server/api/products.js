const express = require('express');
const app = express.Router();
const { User, Product } = require('../db');
const { isLoggedIn } = require('./middleware');

module.exports = app;


app.get('/', async(req, res, next)=> {
  try {
    res.send(await Product.findAll()); 
  }
  catch(ex){
    next(ex);
  }
});
