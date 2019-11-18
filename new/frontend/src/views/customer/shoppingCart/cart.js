import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, 
} from 'reactstrap';
function Products  () {
  const [product, setproduct] = useState([]);
  
  useEffect(()=>{
      axios.get('http://localhost:4000/onstep/cart/')
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
<CardSubtitle>Seller={products.product_seller}</CardSubtitle>
<CardText>Unit Price={products.product_price} <br/> Units ={products.product_unit}</CardText>
</CardBody>
</Card>
</div>
})

  return (

    <div className="row m-4">
        {pro}

      
    </div>
  );
};

export default Products;