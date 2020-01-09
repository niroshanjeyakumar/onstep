const mongoose =require('mongoose');
const Schema =mongoose.Schema;

let cart =new Schema({
    product_id:{
        type:String
    },
    product: { 
        type: Schema.Types.ObjectId, 
        ref: 'Product' 
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