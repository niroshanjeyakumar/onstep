const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose =require('mongoose');
const customerRoutes =require("./routes/user/customer.route")
const deliveryRoutes =require("./routes/user/delivery.route")
const supermarketRoutes =require("./routes/user/supermarket.route")
const productRoutes =require("./routes/product.route")
const PORT =  4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/onstep',{useNewUrlParser:true});
const connection = mongoose.connection;

connection.once('open', function(){
    console.log("MongoDB connected");
} )



app.use('/onstep/user/customer',customerRoutes);
app.use('/onstep/user/delivery',deliveryRoutes);
app.use('/onstep/user/supermarket',supermarketRoutes);
app.use('/onstep/product',productRoutes);

app.listen(PORT,function(){
    console.log("Server is running on Port: " + PORT)
});