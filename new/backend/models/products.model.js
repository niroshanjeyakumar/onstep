const mongoose =require('mongoose');
const Schema =mongoose.Schema;
const seller = require('./user/supermarket.model.js')
let product =new Schema({
    product_name:{
        type:String
    },
    product_category:{
        type:String,
        default:"general"
    },
    seller_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'supermarkets'
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


module.exports=mongoose.model('product',product);