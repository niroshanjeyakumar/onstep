const mongoose =require('mongoose');
const Schema =mongoose.Schema;
const Product = require('../models/products.model');
let cart =new Schema({
    product: { 
        type: Schema.Types.ObjectId, 
        ref: 'products' 
    },
    order_quantity:{
        type: String
    },
    customer_id:{
        type:String
    },
    order_status:{
        type:Boolean,
        default:false
    }
});


module.exports=mongoose.model('carts',cart);