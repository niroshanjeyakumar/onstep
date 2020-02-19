import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {
  Button, Table
} from 'reactstrap';
import moment from 'moment'; //date library 
import { 
  ButtonGroup 
} from 'react-bootstrap';

function Products  () {
  const [product, setproduct] = useState([]);
  const [totVal,settotalVal]=useState(0);

  const cust=sessionStorage.getItem('user');
  const customer =JSON.parse(cust); //create object 
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
        let total=cartData.product.product_price * cartData.order_quantity;
        //alert(total);
        var now=moment().format('LLLL');
        const orderTime=JSON.stringify(now);
       // alert(orderTime);
        const order ={
          productlist:{product:cartData.product.product_name, unit:cartData.product.product_unit,price:cartData.product.product_price, order_quantity:cartData.order_quantity},
          seller:cartData.product.seller_id,
          customer:cartData.customer_id,
          total:total,
          orderTime:orderTime,
        }; //create object 
        
        axios.post("http://localhost:4000/onstep/order/add/",order).catch(function(error){
          console.log(error);
      }) 
      }
    ).catch(err=>console.log(err));
    //console.log(neworder);
  
  }
  function orderAll(){
        product.map(function (products, index){
          makeorder(products._id);
          }); 
  }
  
  const pro = product.map(function (products, index){
  
let total=products.product.product_price*products.order_quantity;

return (  
<tr>
  <td>{index + 1}</td>
  <td>{products.product.product_name}</td>
  <td><a href={`/seller/view/${products.product.seller_id}`}>{products.product.seller_name}</a></td>
  <td>{products.product.product_price}</td>
  <td>{products.order_quantity}</td>
  <td>{total}</td>
 <td>
    <ButtonGroup>
    <Button color="success" onClick={()=> {makeorder(products._id); }}>Order</Button>
    <Button color="warning" onClick={()=> editcart(products._id)}>Edit</Button>
    <Button color="danger" onClick={()=> deletefromcart(products._id)}>Delete</Button>
  </ButtonGroup>
  </td>
</tr>
)

})

  return (

    <div className="row m-4">
        <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>Seller</th>
          <th>Unit price</th>
          <th>Order Quantity</th>
          <th>Total Price</th>
          <th></th>
      
        </tr>
      </thead>
      <tbody>
        
        {pro}

      </tbody>
      </Table>
      <Button color="success" size="lg"onClick={()=> {orderAll()}}>Order All</Button>
    
    </div>
  );
};

export default Products;