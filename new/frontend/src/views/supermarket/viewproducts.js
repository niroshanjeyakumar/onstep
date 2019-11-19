import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {
  Card, CardText, CardBody,CardFooter,Button,
  CardTitle, CardSubtitle, 
} from 'reactstrap';
//import AddtoCart from "views/product-functions/addtoCart.js";
import IndexNavbar from "components/Navbars/onstepNavbar.js";
import IndexHeader from "components/Headers/onstepHeader.js";
import DarkFooter from "components/Footers/onstepFooter.js";

function Products  () {
  const [product, setproduct] = useState([]);
  //const [modal,setModal]=useState(true);
  //const [order,setOrder] = useState("")
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  //var cart_product_name ="";
 // var cart_product_id="";
  //var cart_product_unit="";
  //var cart_seller="";
  //var cart_product_price="";

  const super_name = "Cargills" 
  useEffect(()=>{
      axios.get('http://localhost:4000/onstep/product/supermarket',{seller:super_name})
      .then(res=>{
        setproduct(res.data);
    })
    .catch(function(error){
        console.log(error);
    }) 
  });
 
    
  const pro = product.map(function (products, index){

return <div className="col-sm-2 col-md-2" key={index}>
        <Card>
        <CardBody>
        <CardTitle>Item Name ={products.product_name}</CardTitle>
        <CardText>Unit Price={products.product_price} <br/> Units ={products.product_unit}</CardText>
        </CardBody>
        
</Card>
</div>
})

  return (
<>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
    <div className="row m-4">
        {pro}

      </div>
    </div>
        <DarkFooter />
      </div>
    </>
  );
};

export default Products;