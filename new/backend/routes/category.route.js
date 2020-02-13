const express = require('express');
const categoryRoutes = express.Router();
const session = require('express-session');

let Category = require('../models/category.model');

categoryRoutes.route('/add').post(function (req, res) {
  let category = new Category(req.body);
  //console.log(category);
  category.save()
    .then(category => {
      res.status(200).json({'category': 'category in added successfully'});
    })
    .catch(err => {
      console.log(err);
    res.status(400).send("unable to save to database");
    
    });
});


categoryRoutes.route('/').get(function (req, res) {
    Category.find(function(err, category){
    if(err){
      console.log(err);
    }
    else {
      res.json(category);
    }
  });
});


categoryRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Category.findById(id, function (err, category){
      res.json(category);
  });
});

//  Defined update route
/*categoryRoutes.route('/update/:id').post(function (req, res) {
    Category.findById(req.params.id, function(err, category) {
    if (!category)
      res.status(404).send("data is not found");
    else {
        category.person_name = req.body.person_name;
        category.category_name = req.body.category_name;
        category.category_gst_number = req.body.category_gst_number;

        category.save().then(category => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});*/

categoryRoutes.route('/delete/:id').get(function (req, res) {
    Category.findByIdAndRemove({_id: req.params.id}, function(err, category){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = categoryRoutes;