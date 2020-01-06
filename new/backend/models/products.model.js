const mongoose =require('mongoose');
const Schema =mongoose.Schema;

let product =new Schema({
    product_name:{
        type:String
    },
    product_category:{
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
    product_available:{
        type:Boolean,
        default: true
    }

});


module.exports=mongoose.model('products',product);