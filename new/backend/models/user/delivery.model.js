const mongoose =require('mongoose');
const Schema =mongoose.Schema;

let delivery_model =new Schema({
    delivery_name:{
        type:String
    },
    delivery_email:{
        type:String
    },
    delivery_number:{
        type:String
    },
    delivery_password:{
        type:String
    }
});


module.exports=mongoose.model('delivery',delivery_model);