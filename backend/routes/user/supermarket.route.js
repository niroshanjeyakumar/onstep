const express = require('express');
const supermarketRoutes = express.Router();
const session = require('express-session');
const bcrypt = require('bcryptjs');
const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const saltrounds=10;
let Supermarket = require('../../models/user/supermarket.model');

supermarketRoutes.route('/add').post(function (req, res) {
  let supermarket = new Supermarket(req.body);
  Supermarket.findOne({supermarket_email:supermarket.supermarket_email}).then(user=>{
    if(user) {
      console.log(user.supermarket_email);
      res.json({email : true});}
  
    else {
      const password=req.body.supermarket_password;
      const salt= bcrypt.genSaltSync(saltrounds);
      const hashedpass=bcrypt.hashSync(password,salt);
      console.log(hashedpass);
      
      supermarket.supermarket_password = hashedpass;
      console.log(supermarket.supermarket_password);
      supermarket.save()
        .then(supermarket => {
          res.status(200).json({'supermarket': 'supermarket in added successfully'});
        })
        .catch(err => {
        res.status(400).send("unable to save to database");
        });}
  }).catch(err=> {console.log(err);});
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
      return res.json({ email: false, password:false });  
    }
    else{ 
      if(bcrypt.compareSync(password,user.supermarket_password)){
        req.session.User_id=user._id;
        req.session.UserType="supermarket";
        req.session.email=user.supermarket_email;
        console.log(req.session.email);
        return res.json({email: true, password:true,details:user });
      }
      else{
        return res.json({email: true, password:false, id:user._id });
      }
    }
  })
});

supermarketRoutes.route('/:id').get(function (req, res) {
  let id = req.params.id;
  Supermarket.findById(id, function (err, supermarket){
      res.json(supermarket);
  }).catch(err=>console.log(err))
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