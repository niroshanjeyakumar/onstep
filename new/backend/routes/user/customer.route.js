const express = require('express');
const customerRoutes = express.Router();
const session = require('express-session');
const bcrypt = require('bcryptjs');
const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const saltrounds=10;
 
const Customer = require('../../models/user/customer.model');  

customerRoutes.route('/add').post(function (req, res) {
  //const email =req.params.email
  const customer = new Customer(req.body);
  Customer.findOne({customer_email:customer.customer_email}).then(user=>{
    if(user) {
      console.log(user.customer_email);
      res.json({email : true});}
  
    else {
      const password=req.body.customer_password;
      const salt= bcrypt.genSaltSync(saltrounds);
      const hashedpass=bcrypt.hashSync(password,salt);
      console.log(hashedpass);
      
      customer.customer_password = hashedpass;
      console.log(customer.customer_password);
      customer.save()
        .then(customer => {
          res.status(200).json({'customer': 'customer in added successfully'});
        })
        .catch(err => {
        res.status(400).send("unable to save to database");
        });}
  }).catch(err=> {console.log(err);});
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

      Customer.findOne({ customer_email: email },function(err,user) {
    if (!user) {
      return res.json({ email: false, password:false });  
    }
    else{ 
      if(bcrypt.compareSync(password,user.customer_password)){
        req.session.User_id=user._id;
        req.session.UserType="customer";
        req.session.email=user.customer_email;
        console.log(req.session.email);
        return res.json({email: true, password:true });
      }
      else{
        return res.json({email: true, password:false, id:user._id });
      }
    }
  })
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

/*customerRoutes.route('/edit').get(function (req, res) {
  const email = req.body.email;
  const name = req.body.name;
  const address = req.body.address;
  const number = req.body.number;
  const password = req.body.password; 
  Customer.findOne({ customer_email: email }, ).then(user => {
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });  
    }
    else{ return res.json(user)}
     
  });
});*/

customerRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  customer.findById(id, function (err, customer){
      res.json(customer);
  });
});

customerRoutes.route('/edit/:id').post(function (req, res) {
  customer.findById(req.params.id, function(err, customer) {
  if (!customer)
    res.status(404).send("data is not found");
  else {
      customer.customer_name = req.body.customer_name;
      customer.customer_email= req.body.customer_email;
      customer.customer_address= req.body.customer_address;
      customer.customer_number= req.body.customer_number;
      customer.customer_password= req.body.customer_password;

      customer.save().then(customer => {
        res.json('Update complete');
    })
    .catch(err => {
          res.status(400).send("unable to update the database");
    });
  }
});
});
  
function checkAuthenticated(req,res, next){
  if(req.isAuthenticated()){
    return next()
  }
}
function checkNotAuthenticated(req,res,next){
  if(req.isAuthenticated()){
    return res.redirect ('/')
  }
}



module.exports = customerRoutes;