const express = require('express');
const orderRoutes = express.Router();

let Order = require('../models/orders.model.js');

orderRoutes.route('/add').post(function (req, res) {

  let order = new Order (req.body);
  order.save()
    .then(order => {
      res.status(200).json({'order': 'order in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});
orderRoutes.route('/accept').post(function (req, res) {

  let id = req.body.order_id;
  
  Order.findById(id)
  .then(function(order, err){
    
  if(err){
    console.log(err);
  }
  else {
    order.delivery=req.body.delivery;
    order.order_accepted=true;
    order.save(function (err,Order){
      if(err){
        console.log(err);
      }
      else{
        res.json(Order);
      }
    })
}}).catch(err=>{console.log(err);})
  });


  orderRoutes.route('/purchased/:id').post(function (req, res) {

    let id = req.params.id;
    
    Order.findById(id)
    .then(function(order, err){
      
    if(err){
      console.log(err);
    }
    else {
      order.order_purchased=true;
      order.save(function (err,Order){
        if(err){
          console.log(err);
        }
        else{
          res.json(Order);
        }
      })
  }}).catch(err=>{console.log(err);})
    });


    orderRoutes.route('/recieved/:id').post(function (req, res) {

      let id = req.params.id;
      
      Order.findById(id)
      .then(function(order, err){
        
      if(err){
        console.log(err);
      }
      else {
        order.order_complete=true;
        order.save(function (err,Order){
          if(err){
            console.log(err);
          }
          else{
            res.json(Order);
          }
        })
    }}).catch(err=>{console.log(err);})
      });

orderRoutes.route('/customer/:id').get(function (req, res) {
  Order.find({customer:req.params.id}).populate({path : 'product delivery'}).then(function(order, err){
    if(err){
      console.log(err);
    }
    else {
      res.json(order);
    }
  });
});
orderRoutes.route('/completed/:id').get(function (req, res) {
  Order.find({delivery:req.params.id,order_complete:true}).populate({path : 'product'}).then(function(order, err){
    if(err){
      console.log(err);
    }
    else {
      res.json(order);
    }
  });
});
orderRoutes.route('/supermarket/:id').get(function (req, res) {
  Order.find({seller:req.params.id,order_accepted:true}).populate('product delivery').then(function(order, err){
  if(err){
    console.log(err);
  }
  else {
    res.json(order);
  }
});
});

orderRoutes.route('/del/:id').get(function (req, res) {
  Order.find({delivery:req.params.id,order_accepted:true}).populate('product customer').then(function(order, err){
  if(err){
    console.log(err);
  }
  else {
    res.json(order);
  }
});
});

orderRoutes.route('/del').get(function (req, res) {
  Order.find({order_accepted:false}).populate('product customer').then(function(order, err){
  if(err){
    console.log(err);
  }
  else {
    res.json(order);
  }
});
});


// orderRoutes.route('/edit/:id').get(function (req, res) {
//   let id = req.params.id;
//   Order.findById(id, function (err, order){
//       res.json(order);
//   });
// });

//  Defined update route
/*orderRoutes.route('/update/:id').post(function (req, res) {
    Order.findById(req.params.id, function(err, order) {
    if (!order)
      res.status(404).send("data is not found");
    else {
        order.person_name = req.body.person_name;
        order.order_name = req.body.order_name;
        order.order_gst_number = req.body.order_gst_number;

        order.save().then(order => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});*/

orderRoutes.route('/delete/:id').get(function (req, res) {
    Order.findByIdAndRemove({_id: req.params.id}, function(err, order){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = orderRoutes;