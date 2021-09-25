import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {
  Card, CardText, CardBody,Button,
  CardTitle, CardSubtitle, Form, Modal,ModalBody
} from 'reactstrap';
//import AddtoCart from "views/product-functions/addtoCart.js";

function Products  () {
  const [product, setproduct] = useState([]);

  const [ordersize,setOrdersize] = useState("");
  const [modal1, setModal1] = React.useState(false);
  const [cartProduct,setcartProduct]=useState([]);

  useEffect(()=>{
      axios.get('http://localhost:4000/onstep/product/')
      .then(res=>{
        setproduct(res.data);
    })
    .catch(function(error){
        console.log(error);
    }) 
  });
 
    function saveCart(product) {
    
      const cust=sessionStorage.getItem('user');
      const customer =JSON.parse(cust);
      var newcart={
        product:product,
        order_quantity:ordersize,
        customer_id:customer.details._id
      }
    axios.post('http://localhost:4000/onstep/cart/add',newcart)
    .then(res => console.log(res.data)); }
    
  const pro = [].concat(product).sort(function(a, b){
    if(a.seller_name < b.seller_name) { return -1; }
    if(a.seller_name > b.seller_name) { return 1; }
    return 0;
}).map(function (products){

return <div className="col-sm-2 col-md-2">
        <Card>
        <CardBody>
        <CardTitle>{products.product_name}</CardTitle>
        <CardSubtitle>{products.seller_name}</CardSubtitle>
        <CardText>Rs. {products.product_price} / {products.product_unit}</CardText>
        <Form action="" className="form" method="post">
      
     
      <Button color="success" onClick={()=>{setcartProduct(products);setModal1(true)}}>Add to Cart</Button></Form>
        </CardBody>
        
</Card>

</div>
})

  return (

    <div className="row m-4">
        {pro}
        <Modal isOpen={modal1} toggle={() => setModal1(false)}>
        <Form action="" className="form" method="post">
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModal1(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">Add to Cart</h4>
                </div>
                <ModalBody>
                  Product : {cartProduct.product_name}<br/>
                  Seller : {cartProduct.seller_name}<br/>
                  Price : Rs.{cartProduct.product_price} per {cartProduct.product_unit}<br/>
                  
      Order size: 
       <input type="number" name="order_size" min="1" onChange={e=>setOrdersize(e.target.value)} required/> 
      {/* <Button color="success" >Add to Cart</Button> */}<br/>
      Total price:Rs.{ordersize*cartProduct.product_price}
                </ModalBody>
                <div className="modal-footer">
                  <Button color="success" type="button" onClick={()=>{saveCart(cartProduct._id);setModal1(false)}}>
                    Add to cart
                  </Button>
                  <Button
                    color="danger"
                    type="button"
                    onClick={() => setModal1(false)}
                  >
                    Close
                  </Button>
                </div>
                </Form>
              </Modal>
      
    </div>
  );
};

export default Products;