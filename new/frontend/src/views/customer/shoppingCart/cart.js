import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {
  Button, Table
} from 'reactstrap';

function Products  () {
  const [product, setproduct] = useState([]);
  //const [neworder, setnewOrder]=useState([]);
 // const [modal, setModal] = useState(false);
  
  //const toggle = () => setModal(!modal);
  const cust=localStorage.getItem('user');
  const customer =JSON.parse(cust);
  const ID= customer.details._id;
  useEffect(()=>{
      axios.get('http://localhost:4000/onstep/cart/cust/'+ID)
      .then(res=>{
        setproduct(res.data);
    })
    .catch(function(error){
        console.log(error);
    }) 
  });
 // console.log(product);
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
    axios.get("http://localhost:4000/onstep/cart/"+id).then(response=>
      {
        //console.log(response);
        const cartData=response.data;
        
        const order ={
          product:cartData.product._id,
          seller:cartData.product.seller_id,
          order_quantity:cartData.order_quantity,
          customer:cartData.customer_id
        };
        //setnewOrder(order);
        axios.post("http://localhost:4000/onstep/order/add/",order).catch(function(error){
          console.log(error);
      }) 
      }
    ).catch(err=>console.log(err));
    //console.log(neworder);
  
  }
  
  

  const pro = product.map(function (products, index){
     // console.log(products.product.product_name);
return (  
<tr>
  <td>{products.product.product_name}</td>
  <td>{products.product.seller_name}</td>
  <td>{products.product.product_price}</td>
  <td>{products.order_quantity}</td>
  <td>{products.product.product_price*products.order_quantity}</td>
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
          <th></th>
          <th></th>
          <th></th>
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