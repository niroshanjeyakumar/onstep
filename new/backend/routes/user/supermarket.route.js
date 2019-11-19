const express = require('express');
const supermarketRoutes = express.Router();

let Supermarket = require('../../models/user/supermarket.model');

supermarketRoutes.route('/add').post(function (req, res) {
  let supermarket = new Supermarket(req.body);
  supermarket.save()
    .then(supermarket => {
      res.status(200).json({'supermarket': 'supermarket in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

supermarketRoutes.route('/').get(function (req, res) {
    Supermarket.find(function(err, supermarket){
    if(err){
      console.log(err);
    }
    else {
      res.json(supermarket);
    }
  });
});

supermarketRoutes.route('/login').post(function(req,res){
  const email = req.body.email;
  const password = req.body.password;
  Supermarket.findOne({ supermarket_email: email }, ).then(user => {
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });  
    }
    else{ return res.json(user)}
     /* if(password==user.customer_password){
        return res.status(101).json({passwordsmatch: "Passwords Match"});
      }
      else{
        return res.status(201).json({passwordmismatch:"Passwords Do not match"});
      }*/
  });
});

supermarketRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Supermarket.findById(id, function (err, supermarket){
      res.json(supermarket);
  });
});

//  Defined update route
/*supermarketRoutes.route('/update/:id').post(function (req, res) {
    Supermarket.findById(req.params.id, function(err, supermarket) {
    if (!supermarket)
      res.status(404).send("data is not found");
    else {
        supermarket.person_name = req.body.person_name;
        supermarket.supermarket_name = req.body.supermarket_name;
        supermarket.supermarket_gst_number = req.body.supermarket_gst_number;

        supermarket.save().then(supermarket => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});*/

supermarketRoutes.route('/delete/:id').get(function (req, res) {
    Supermarket.findByIdAndRemove({_id: req.params.id}, function(err, supermarket){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = supermarketRoutes;