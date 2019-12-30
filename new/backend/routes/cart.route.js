const express = require('express');
const cartRoutes = express.Router();

let Cart = require('../models/cart.model');

cartRoutes.route('/add').post(function (req, res) {
  let cart = new Cart(req.body);
  cart.save()
    .then(cart => {
      res.status(200).json({'cart': 'cart in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

cartRoutes.route('/').get(function (req, res) {
    Cart.find(function(err, cart){
    if(err){
      console.log(err);
    }
    else {
      res.json(cart);
    }
  });
});

cartRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Cart.findById(id, function (err, cart){
      res.json(cart);
  });
});

//  Defined update route
/*cartRoutes.route('/update/:id').post(function (req, res) {
    Cart.findById(req.params.id, function(err, cart) {
    if (!cart)
      res.status(404).send("data is not found");
    else {
        cart.person_name = req.body.person_name;
        cart.cart_name = req.body.cart_name;
        cart.cart_gst_number = req.body.cart_gst_number;

        cart.save().then(cart => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});*/

cartRoutes.route('/delete/:id').get(function (req, res) {
    Cart.findByIdAndRemove({_id: req.params.id}, function(err, cart){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = cartRoutes;