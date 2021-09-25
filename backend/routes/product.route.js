const express = require('express');
const productRoutes = express.Router();
const session = require('express-session');

let Product = require('../models/products.model');

productRoutes.route('/add').post(function (req, res) {
  let product = new Product(req.body);
  //console.log(product);
  product.save()
    .then(product => {
      res.status(200).json({'product': 'product in added successfully'});
    })
    .catch(err => {
      console.log(err);
    res.status(400).send("unable to save to database");
    
    });
});


productRoutes.route('/').get(function (req, res) {
    Product.find().populate({path:'product_category'}).then(product => {
      if(!product){
        console.log("error");
      }
      else {
        res.json(product);
      }
    });
});

productRoutes.route('/supermarket').post(function (req, res) {
  const seller=req.body.seller;
  Product.find({seller_id:seller}).populate('product_category').then(product => {
  if(!product){
    console.log("error");
  }
  else {
    res.json(product);
  }
});
});

productRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Product.findById(id, function (err, product){
      res.json(product);
  });
});

//  Defined update route
/*productRoutes.route('/update/:id').post(function (req, res) {
    Product.findById(req.params.id, function(err, product) {
    if (!product)
      res.status(404).send("data is not found");
    else {
        product.person_name = req.body.person_name;
        product.product_name = req.body.product_name;
        product.product_gst_number = req.body.product_gst_number;

        product.save().then(product => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});*/

productRoutes.route('/delete/:id').get(function (req, res) {
    Product.findByIdAndRemove({_id: req.params.id}, function(err, product){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = productRoutes;