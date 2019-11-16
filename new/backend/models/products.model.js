const mongoose =require('mongoose');
const Schema =mongoose.Schema;

let product =new Schema({
    product_name:{
        type:String
    },
    product_seller:{
        type:String
    },
    product_unit:{
        type:String
    },
    product_price:{
        type: String
    }
});


module.exports=mongoose.model('products',product);