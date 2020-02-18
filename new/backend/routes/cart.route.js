const express = require('express');
const cartRoutes = express.Router();
const session = require('express-session');

let Cart = require('../models/cart.model');
let Product = require('../models/products.model');

cartRoutes.route('/add').post(function (req, res) {
  let cart = new Cart(req.body);
  cart.save()
    .then(cart => {
      res.status(200).json({'cart': 'cart in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

cartRoutes.route('/').get(function (req, res) {

    Cart.find()
    .populate('product')
    .then(function(cart, err){
      
    if(err){
      console.log(err);
    }
    else {
      
      res.json(cart);
    }
  });
});
cartRoutes.route('/cust/:id').get(function (req, res) {
  let id = req.params.id;
  Cart.find({customer_id:id, order_status:false})
  .populate('product')
  .then(function(cart, err){
    
  if(err){
    console.log(err);
  }
  else {
    
    res.json(cart);
  }
});
});

cartRoutes.route('/:id').get(function (req, res) {
  let id = req.params.id;
  
  Cart.findById(id)
  .populate('product')
  .then(function(cart, err){
    
  if(err){
    console.log(err);
  }
  else {
    cart.order_status=true;
    cart.save(function (err,Order){
      if(err){
        console.log(err);
      }
      else{
        res.json(Order);
      }
    })
    
  }
});
});
// cartRoutes.route('/edit/:id').get(function (req, res) {
//   let id = req.params.id;
//   Cart.findById(id, function (err, cart){
//       res.json(cart);
//   });
// });

//  Defined update route
  cartRoutes.route('/update/:id').post(function (req, res) { console.log(req.params.id)
     Cart.findByIdAndUpdate({_id: req.params.id}, function(err, cart) {
     if (!cart)
        res.status(404).send("data is not found");
      else {
          cart.order_quantity = req.body.order_quantity;
         cart.customer_id = req.body. customer_id;
         cart.order_status = req.body.order_status;

         cart.save().then(cart => {
            res.json('Update complete');
        })
        .catch(err => {
              res.status(400).send("unable to update the database");
        });
      }
    });
  });

cartRoutes.route('/delete/:id').get(function (req, res) {
    Cart.findByIdAndRemove({_id: req.params.id}, function(err, cart){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});


// cartRoutes.get('/:id/edit', async (req, res) => {
//   try {
//     const author = await Author.findById(req.params.id)
//     res.render('authors/edit', { author: author })
//   } catch {
//     res.redirect('/authors')
//   }
// })

// router.put('/:id', async (req, res) => {
//   let author
//   try {
//     author = await Author.findById(req.params.id)
//     author.name = req.body.name
//     await author.save()
//     res.redirect(`/authors/${author.id}`)
//   } catch {
//     if (author == null) {
//       res.redirect('/')
//     } else {
//       res.render('authors/edit', {
//         author: author,
//         errorMessage: 'Error updating Author'
//       })
//     }
//   }
// })


module.exports = cartRoutes;