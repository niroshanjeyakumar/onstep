const express = require('express');
const orderRoutes = express.Router();

let Order = require('../models/order.model');

orderRoutes.route('/add').post(function (req, res) {
  let order = new Order(req.body);
  order.save()
    .then(order => {
      res.status(200).json({'order': 'order in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

orderRoutes.route('/').get(function (req, res) {
    Order.find(function(err, order){
    if(err){
      console.log(err);
    }
    else {
      res.json(order);
    }
  });
});

orderRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Order.findById(id, function (err, order){
      res.json(order);
  });
});

//  Defined update route
/*orderRoutes.route('/update/:id').post(function (req, res) {
    Order.findById(req.params.id, function(err, order) {
    if (!order)
      res.status(404).send("data is not found");
    else {
        order.person_name = req.body.person_name;
        order.order_name = req.body.order_name;
        order.order_gst_number = req.body.order_gst_number;

        order.save().then(order => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});*/

orderRoutes.route('/delete/:id').get(function (req, res) {
    Order.findByIdAndRemove({_id: req.params.id}, function(err, order){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = orderRoutes;