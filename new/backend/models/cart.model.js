const mongoose =require('mongoose');
const Schema =mongoose.Schema;

let cart =new Schema({
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
    order_status:{
        type:Boolean
    }
});


module.exports=mongoose.model('carts',cart);