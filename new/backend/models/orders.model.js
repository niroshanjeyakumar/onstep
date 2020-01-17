const mongoose =require('mongoose');
const Schema =mongoose.Schema;
const supermarket = require('./user/supermarket.model.js');
const customer = require('./user/customer.model.js');
const delivery = require('./user/delivery.model.js');
const product = require('./products.model.js');

let order =new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:'product',
        required:true
    },
    seller:{
        type:Schema.Types.ObjectId,
        ref:'supermarket',
        required:true
    },
    order_quantity:{
        type: String
    },
    customer:{
        type:Schema.Types.ObjectId,
        ref:'customer',
        required:true
    },
    delivery:{
        type:Schema.Types.ObjectId,
        ref:'delivery'
    },
    order_accepted:{
        type:Boolean,
        default:false
    },
    order_purchased:{
        type:Boolean,
        default:false
    },
    order_complete:{
        type:Boolean,
        default:false
    }
});


module.exports=mongoose.model('order',order);