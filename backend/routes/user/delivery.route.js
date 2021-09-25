const express = require('express');
const deliveryRoutes = express.Router();
const session = require('express-session');
const bcrypt = require('bcryptjs');
const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const saltrounds=10;

let Delivery = require('../../models/user/delivery.model');

deliveryRoutes.route('/add').post(function (req, res) {
  let delivery = new Delivery(req.body);
  Delivery.findOne({delivery_email:delivery.delivery_email}).then(user=>{
    if(user) {
      console.log(user.delivery_email);
      res.json({email : true});}
  
    else {
      const password=req.body.delivery_password;
      const salt= bcrypt.genSaltSync(saltrounds);
      const hashedpass=bcrypt.hashSync(password,salt);
      console.log(hashedpass);
      
      delivery.delivery_password = hashedpass;
      console.log(delivery.delivery_password);
      delivery.save()
        .then(delivery => {
          res.status(200).json({'delivery': 'delivery in added successfully'});
        })
        .catch(err => {
        res.status(400).send("unable to save to database");
        });}
  }).catch(err=> {console.log(err);});
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
//rout to login
deliveryRoutes.route('/login').post(function(req,res){
  const email = req.body.email;
  const password = req.body.password;
  console.log("Login attempt");
  Delivery.findOne({ delivery_email: email }, ).then(user => {
    if (!user) {
      return res.json({ email: false, password:false });  
    }
    else{ 
      if(bcrypt.compareSync(password,user.delivery_password)){
        req.session.User_id=user._id;
        req.session.UserType="delivery";
        req.session.email=user.delivery_email;
        console.log(req.session.email);
        return res.json({email: true, password:true,details:user });
      }
      else{
        return res.json({email: true, password:false, id:user._id });
      }
    }
  })
});

deliveryRoutes.route('/:id').get(function (req, res) {
  let id = req.params.id;
  Delivery.findById(id, function (err, delivery){
      res.json(delivery);
  }).catch(err=>console.log(err));
});

// Defined update route
deliveryRoutes.route('/editdelp/:id').post(function (req, res) {
    Delivery.findById(req.params.id, function(err, delivery) {
    if (!delivery)
      res.status(404).send("data is not found");
    else {
        delivery.detail.delivery_number = req.body.delivery_number;
        delivery.detail.delivery_name = req.body.delivery_name;
        

        delivery.save().then(delivery => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

deliveryRoutes.route('/delete/:id').get(function (req, res) {
    Delivery.findByIdAndRemove({_id: req.params.id}, function(err, delivery){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = deliveryRoutes;
