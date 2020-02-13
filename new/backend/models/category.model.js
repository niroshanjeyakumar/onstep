const mongoose =require('mongoose');
const Schema =mongoose.Schema;
let category =new Schema({
    category_name: { 
        type:  String
    }
});


module.exports=mongoose.model('category',category);