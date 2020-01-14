import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {
  Card, CardText, CardBody,CardFooter,Button,
  CardTitle, CardSubtitle, Form
} from 'reactstrap';
//import AddtoCart from "views/product-functions/addtoCart.js";

function Products  () {
  const [product, setproduct] = useState([]);
  //const [modal,setModal]=useState(true);
  //const [order,setOrder] = useState("")
  //const [productid,setProductid] = useState("");
  const [ordersize,setOrdersize] = useState("");
  

  useEffect(()=>{
      axios.get('http://localhost:4000/onstep/product/')
      .then(res=>{
        setproduct(res.data);
    })
    .catch(function(error){
        console.log(error);
    }) 
  });
 /* function addproduct(cart){
    console.log(cart.product_name);
    console.log(modal);
      return (
      
      <>
      <div>
      <Modal isOpen={modal} toggle={() => setModal(false)}>
      
      <div className="modal-header justify-content-center">
        <button
          className="close"
          type="button"
          onClick={() => setModal(false)}
        >
          <i className="now-ui-icons ui-1_simple-remove"></i>
        </button>
  <h4 className="title title-up">Title={cart.product_name}</h4>
      </div>

      <ModalBody>
        <p>
          Far far away
        </p>
      </ModalBody>
      <div className="modal-footer">
        <Button color="default" type="button">
          Nice Button
        </Button>
        <Button
          color="danger"
          type="button"
          onClick={() => setModal(false)}
        >
          Close
        </Button>
      </div>
    </Modal>
    </div>
    </>)
  }*/
    function saveCart(product) {
      //console.log(product);
      //setProductid(product);
      const cust=localStorage.getItem('user');
      const customer =JSON.parse(cust);
      var newcart={
        product_id:product,
        order_size:ordersize,
        customer_id:customer.details._id
      }
    axios.post('http://localhost:4000/onstep/cart/add',newcart)
    .then(res => console.log(res.data)); }
    
  const pro = product.map(function (products){
//<input type="hidden" name="id" value={this.products._id} on={e=>setProductid(e.target.value)}/>
return <div className="col-sm-2 col-md-2">
        <Card>
        <CardBody>
        <CardTitle>Item Name ={products.product_name}</CardTitle>
        <CardSubtitle>Seller={products.product_seller}</CardSubtitle>
        <CardText>Unit Price={products.product_price} <br/> Units ={products.product_unit}</CardText>
        </CardBody>
        <CardFooter center><Form action="" className="form" method="post">
      
      <input type="number" name="order_size" onChange={e=>setOrdersize(e.target.value)} required/>
      <Button color="success" onClick={()=>saveCart(products._id)}>Add to Cart</Button></Form></CardFooter>
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