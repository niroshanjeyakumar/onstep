const mongoose =require('mongoose');
const Schema =mongoose.Schema;


let message =new Schema({
    userType: { 
        type:  String
    },
    user:{
        type: String,
    },
    subject:{
        type:String
    },
    message:{
        type:String
    },
    adminView:{
        type:Boolean,
        default:false
    }


});


module.exports=mongoose.model('message',message);