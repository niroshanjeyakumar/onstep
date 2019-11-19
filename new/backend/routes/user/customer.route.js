const express = require('express');
const customerRoutes = express.Router();

let Customer = require('../../models/user/customer.model');

customerRoutes.route('/add').post(function (req, res) {
  let customer = new Customer(req.body);
  customer.save()
    .then(customer => {
      res.status(200).json({'customer': 'customer in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

customerRoutes.route('/').get(function (req, res) {
    Customer.find(function(err, customer){
    if(err){
      console.log(err);
    }
    else {
      res.json(customer);
    }
  });
});
customerRoutes.route('/login').post(function(req,res){
  const email = req.body.email;
  const password = req.body.password;
  Customer.findOne({ customer_email: email }).then(user => {
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
customerRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Customer.findById(id, function (err, customer){
      res.json(customer);
  });
});

//  Defined update route
/*customerRoutes.route('/update/:id').post(function (req, res) {
    Customer.findById(req.params.id, function(err, customer) {
    if (!customer)
      res.status(404).send("data is not found");
    else {
        customer.person_name = req.body.person_name;
        customer.customer_name = req.body.customer_name;
        customer.customer_gst_number = req.body.customer_gst_number;

        customer.save().then(customer => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});*/

customerRoutes.route('/delete/:id').get(function (req, res) {
    Customer.findByIdAndRemove({_id: req.params.id}, function(err, customer){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = customerRoutes;