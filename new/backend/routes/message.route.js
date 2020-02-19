const express = require('express');
const messageRoutes = express.Router();
const session = require('express-session');

let Message = require('../models/message.model');

messageRoutes.route('/add').post(function (req, res) {
  let message = new Message(req.body);
  console.log(message);
  message.save()
    .then(message => {
      res.status(200).json({'message': 'message in added successfully'});
    })
    .catch(err => {
      console.log(err);
    res.status(400).send("unable to save to database");
    
    });
});


messageRoutes.route('/unread').get(function (req, res) {
    Message.find({adminView:false}).then(function(message, err){
    if(err){
      console.log(err);
    }
    else {
      res.json(message);
    }
  });
});

messageRoutes.route('/read').get(function (req, res) {
    Message.find({adminView:true}).then(function(message, err){
    if(err){
      console.log(err);
    }
    else {
      res.json(message);
    }
  });
});

messageRoutes.route('/markasread/:id').post(function(req,res){
    console.log("hello");
    let id = req.params.id;
    Message.findById(id).then(function (message,err){
        if(err){
            console.log(err);
          }
          else {
            message.adminView=true;
            message.save(function (err,Message){
                if(err){
                  console.log(err);
                }
                else{
                  res.json(Message);
                }
              })
          }
    }).catch(err=>console.log(err))
})


messageRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Message.findById(id, function (err, message){
      res.json(message);
  });
});

//  Defined update route
/*messageRoutes.route('/update/:id').post(function (req, res) {
    Message.findById(req.params.id, function(err, message) {
    if (!message)
      res.status(404).send("data is not found");
    else {
        message.person_name = req.body.person_name;
        message.message_name = req.body.message_name;
        message.message_gst_number = req.body.message_gst_number;

        message.save().then(message => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});*/

messageRoutes.route('/delete/:id').get(function (req, res) {
    Message.findByIdAndRemove({_id: req.params.id}, function(err, message){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = messageRoutes;