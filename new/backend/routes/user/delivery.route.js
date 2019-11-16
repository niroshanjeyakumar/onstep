const express = require('express');
const deliveryRoutes = express.Router();

let Delivery = require('../../models/user/delivery.model');

deliveryRoutes.route('/add').post(function (req, res) {
  let delivery = new Delivery(req.body);
  delivery.save()
    .then(delivery => {
      res.status(200).json({'delivery': 'delivery in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

deliveryRoutes.route('/').get(function (req, res) {
    Delivery.find(function(err, delivery){
    if(err){
      console.log(err);
    }
    else {
      res.json(delivery);
    }
  });
});

deliveryRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Delivery.findById(id, function (err, delivery){
      res.json(delivery);
  });
});

//  Defined update route
/*deliveryRoutes.route('/update/:id').post(function (req, res) {
    Delivery.findById(req.params.id, function(err, delivery) {
    if (!delivery)
      res.status(404).send("data is not found");
    else {
        delivery.person_name = req.body.person_name;
        delivery.delivery_name = req.body.delivery_name;
        delivery.delivery_gst_number = req.body.delivery_gst_number;

        delivery.save().then(delivery => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});*/

deliveryRoutes.route('/delete/:id').get(function (req, res) {
    Delivery.findByIdAndRemove({_id: req.params.id}, function(err, delivery){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = deliveryRoutes;