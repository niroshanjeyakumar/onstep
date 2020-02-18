const mongoose =require('mongoose');
const Schema =mongoose.Schema;

let supermarket_model =new Schema({
    supermarket_name:{
        type:String
    },
    supermarket_email:{
        type:String
    },
    supermarket_number:{
        type:String
    },
    supermarket_area:{
        type: String
    },
    supermarket_address:{
        type: String
    },
    supermarket_password:{
        type:String
    },   
});


module.exports=mongoose.model('supermarket',supermarket_model);