const express = require('express');
const Routes = express.Router();
const bcrypt = require('bcryptjs');
const saltrounds=10;
//const  = require('../../models/user/customer.model'); 
const admin_name="admin";
const admin_pass="admin@123";
const salt= bcrypt.genSaltSync(saltrounds);
const hashedpass=bcrypt.hashSync(admin_pass,salt);

Routes.route('/login').post(function(req,res){
    const username = req.body.username;
    const password = req.body.password;
  
        if(bcrypt.compareSync(password,hashedpass)&&admin_name==username){
          return res.json({loggedin:true});
        }
        else{
          return res.json({loggedin:false});
        }
      });

module.exports=Routes;