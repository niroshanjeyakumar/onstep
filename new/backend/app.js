const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
var session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const customerRoutes =require("./routes/user/customer.route")
const deliveryRoutes =require("./routes/user/delivery.route")
const supermarketRoutes =require("./routes/user/supermarket.route")
const productRoutes =require("./routes/product.route")
//const cartRoutes =require("./routes/cart.route")
//const orderRoutes =require("./routes/orders.route.js")
const PORT =  4000;

app.use(cors());
app.use(bodyParser.json());

app.use(session({
    secret:"Onstep Online Shopping Platform",
    resave:false, 
    saveUninitialized:false
}))
app.use(passport.initialize())
app.use(passport.session())
mongoose.connect('mongodb://127.0.0.1:27017/onstep',{useNewUrlParser:true});
const connection = mongoose.connection;

connection.once('open', function(){
    console.log("MongoDB connected");
} )



app.use('/onstep/user/customer',customerRoutes);
app.use('/onstep/user/delivery',deliveryRoutes);
app.use('/onstep/user/supermarket',supermarketRoutes);
app.use('/onstep/product',productRoutes);
//app.use('/onstep/cart',cartRoutes);
//app.use('/onstep/order',orderRoutes);

app.listen(PORT,function(){
    console.log("Server is running on Port: " + PORT)
});
