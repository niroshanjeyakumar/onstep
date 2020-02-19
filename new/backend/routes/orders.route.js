const express = require('express');
const orderRoutes = express.Router();

let Order = require('../models/orders.model.js');

orderRoutes.route('/add').post(function (req, res) {
    let order = req.body;
  Order.findOne({customer:order.customer,seller:order.seller,order_accepted:false}).then(res=>{

    if(res==null){
      const orderData={
        productlist:[order.productlist],
        seller:order.seller,
        customer:order.customer,
        total:order.total,
        orderTime:order.orderTime
      }
      console.log(orderData)
      const orderSave =new Order(orderData);
      orderSave.save().catch(err=>console.log(err));
    }
    else{
      res.productlist.push(order.productlist);
      res.total=+res.total+ +order.total;
      res.save();
    }
  }  
    ).catch(err=>console.log(err));
  
    // order.save()
  //   .then(order => {
  //     res.status(200).json({'order': 'order in added successfully'});
  //   })
  //   .catch(err => {
  //   res.status(400).send("unable to save to database");
  //   });
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
    order.acceptedTime=req.body.acceptedTime;
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
      order.purchasedTime=req.body.purchasedTime;
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
        order.recievedTime=req.body.recievedTime;
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
//rating functions
      orderRoutes.route('/cust/rating/:id').post(function (req, res) {

        let id = req.params.id;
        
        Order.findById(id)
        .then(function(order, err){
          
        if(err){
          console.log(err);
        }
        else {
          order.CustomerRating=true;
          order.CustDelRating=req.body.CustDelRating;
          order.CustDelReview=req.body.CustDelReview;
          order.CustSupRating=req.body.CustSupRating;
          order.CustSupReview=req.body.CustSupReview;
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

orderRoutes.route('/delRating/:id').get(function (req, res) {
          Order.find({delivery:req.params.id, CustomerRating:true }).populate({path : 'customer'}).then(function(order, err){
            if(err){
              console.log(err);
            }
            else {
              res.json(order);
            }
          });
        });

orderRoutes.route('/supRating/:id').get(function (req, res) {
          Order.find({seller:req.params.id, CustomerRating:true }).populate({path : 'customer'}).then(function(order, err){
            if(err){
              console.log(err);
            }
            else {
              res.json(order);
            }
          });
        });

orderRoutes.route('/customer/:id').get(function (req, res) {
  Order.find({customer:req.params.id}).populate({path : 'delivery seller'}).then(function(order, err){
    if(err){
      console.log(err);
    }
    else {
      res.json(order);
    }
  });
});
orderRoutes.route('/completed/:id').get(function (req, res) {
  Order.find({delivery:req.params.id,order_complete:true}).populate({path : 'customer seller'}).then(function(order, err){
    if(err){
      console.log(err);
    }
    else {
      res.json(order);
    }
  });
});
orderRoutes.route('/supermarket/:id').get(function (req, res) {
  Order.find({seller:req.params.id,order_accepted:true}).populate('delivery').then(function(order, err){
  if(err){
    console.log(err);
  }
  else {
    res.json(order);
  }
}).catch(err=>console.log(err));
});

orderRoutes.route('/del/:id').get(function (req, res) {
  Order.find({delivery:req.params.id,order_accepted:true,order_complete:false}).populate('seller customer').then(function(order, err){
  if(err){
    console.log(err);
  }
  else {
    res.json(order);
  }
});
});

orderRoutes.route('/del').get(function (req, res) {
  Order.find({order_accepted:false}).populate('seller customer').then(function(order, err){
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