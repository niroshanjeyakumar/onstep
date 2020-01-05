const mongoose =require('mongoose');
const Schema =mongoose.Schema;

let order =new Schema({
    product_id:{
        type:String
    },
    seller_id:{
        type:String
    },
    order_quantity:{
        type: String
    },
    customer_id:{
        type:String
    },
    delivery_id:{
        type:String
    },
    order_complete:{
        type:Boolean,
        default:false
    }
});


module.exports=mongoose.model('order',order);