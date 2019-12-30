const mongoose =require('mongoose');
const Schema =mongoose.Schema;

let customer_model =new Schema({
    customer_name:{
        type:String
    },
    customer_email:{
        type:String,
        unique:true
    },
    customer_number:{
        type:String
    },
    customer_address:{
        type: String
    },
    customer_password:{
        type:String
    }

});




module.exports=mongoose.model('customer',customer_model);