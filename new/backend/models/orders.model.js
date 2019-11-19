const mongoose =require('mongoose');
const Schema =mongoose.Schema;

let order =new Schema({
    product_name:{
        type:String
    },
    product_seller:{
        type:String
    },
    seller_id:{
        type:String
    },
    product_unit:{
        type:String
    },
    product_price:{
        type: String
    },
    order_quantity:{
        type: String
    },
    customer_id:{
        type:String
    },
    customer_name:{
        type:String
    },
    cutomer_address:{
        type:String
    },
    customer_number:{
        type:String
    },
    delivery_id:{
        type:String
    },
    delivery_name:{
        type:String
    },
    order_complete:{
        type:Boolean
    }
});


module.exports=mongoose.model('order',order);