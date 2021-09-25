const mongoose =require('mongoose');
const Schema =mongoose.Schema;

let customer_model =new Schema({
    customer_name:{
        type:String,
        unique:true
    },
    customer_email:{
        type:String
    },
    customer_number:{
        type:String
    },
    customer_address:{
        type: String
    },
    customer_password:{
        type:String
    },
    profile_picture: {
        type: String
    }
});
module.exports=mongoose.model('customer',customer_model);
