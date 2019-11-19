import React, {useState,useEffect} from 'react';
import axios from 'axios';

import {
  Card, CardText, CardBody,
  CardTitle, 
} from 'reactstrap';

//import AddtoCart from "views/product-functions/addtoCart.js";
import IndexNavbar from "components/Navbars/SupermarketNavbar";
import IndexHeader from "components/Headers/onstepHeader";
import DarkFooter from "components/Footers/onstepFooter.js";

function Products  () {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  const super_name = "Niroshan" 
  useEffect(()=>{
      axios.post('http://localhost:4000/onstep/product/supermarket',{seller:super_name})
      .then(res=>{
        setproduct(res.data);
    })
    .catch(function(error){
        console.log(error);
    }) 
  });
 
    
  const pro = product.map(function (products){

            return <div className="col-sm-2 col-md-2">
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
