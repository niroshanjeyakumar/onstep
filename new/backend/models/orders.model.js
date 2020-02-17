const mongoose =require('mongoose');
const Schema =mongoose.Schema;
const supermarket = require('./user/supermarket.model.js');
const customer = require('./user/customer.model.js');
const delivery = require('./user/delivery.model.js');
const product = require('./products.model.js');

var order_item=new Schema({
    product:{
        type:String
    },
    unit:{
        type:String
    },
    price:{
        type:String
    },
    order_quantity:{
        type: String
    }
});



let order =new Schema({
    productlist:[order_item],
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
    total:{
        type:String,
    },
    orderTime:{
        type:String
    },
    order_accepted:{
        type:Boolean,
        default:false
    },
    acceptedTime:{
        type:String
    },
    order_purchased:{
        type:Boolean,
        default:false
    },
    purchasedTime:{
        type:String
    },
    order_complete:{
        type:Boolean,
        default:false
    },
    recievedTime:{
        type:String
    },
    CustomerRating:{
        type:Boolean,
        default:false
    },
    CustDelRating:{
        type:Number,
    },
    CustDelReview:{
        type:String,
    },
    CustSupRating:{
        type:Number,
    },
    CustSupReview:{
        type:String,
    },
    DeliveryRating:{
        type:Boolean,
        default:false
    },
    DelCustRating:{
        type:Number,
    },
    DelCustReview:{
        type:String,
    },
    DelSupRating:{
        type:Number,
    },
    DelSupReview:{
        type:String,
    }
});


module.exports=mongoose.model('order',order);
//module.exports=mongoose.model('order_item',order_item);