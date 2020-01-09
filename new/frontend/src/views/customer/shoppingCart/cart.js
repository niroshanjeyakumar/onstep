import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {
  Button, Table
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
  function deletefromcart (id){
    axios.get("http://localhost:4000/onstep/cart/delete/"+id).catch(function(error){
      console.log(error);
  }) 
  }
  function editcart (id){
    axios.get("http://localhost:4000/onstep/cart/update/"+id).catch(function(error){
      console.log(error);
  }) 
  }

  function makeorder (id){
    new order{
      cart_id:
    };
    axios.get("http://localhost:4000/onstep/order/add/").catch(function(error){
      console.log(error);
  }) 
  }
  const pro = product.map(function (products, index){

return ( 
<tr key={index}>
  <td>{products.product_name}</td>
  <td>{products.product_seller}</td>
  <td>{products.product_price}</td>
  <td>{products.order_size}</td>
  <td>{products.product_price*products.order_size}</td>
  <td><Button color="success" onClick={()=> makeorder(products._id)}>Order</Button></td>
  <td><Button color="warning" onClick={()=> editcart(products._id)}>Edit</Button></td>
  <td><Button color="danger" onClick={()=> deletefromcart(products._id)}>Delete</Button></td>
</tr>
)

})

  return (

    <div className="row m-4">
        <Table hover>
      <thead>
        <tr>
          <th>Product</th>
          <th>Seller</th>
          <th>Unit price</th>
          <th>Order Quantity</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
        
        {pro}

      </tbody>
      </Table>
    </div>
  );
};

export default Products;