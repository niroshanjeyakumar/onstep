import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {
  Card, CardText, CardBody,CardFooter,Button,Modal,ModalBody,
  CardTitle, CardSubtitle, 
} from 'reactstrap';

function Products  () {
  const [product, setproduct] = useState([]);
  const [modal,setModal]=useState(true);

  //var cart_product_name ="";
 // var cart_product_id="";
  //var cart_product_unit="";
  //var cart_seller="";
  //var cart_product_price="";
  useEffect(()=>{
      axios.get('http://localhost:4000/onstep/product/')
      .then(res=>{
        setproduct(res.data);
    })
    .catch(function(error){
        console.log(error);
    }) 
  });
  function addproduct(cart){
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
  }
    
  const pro = product.map(function (products, index){
    

return <div className="col-sm-2 col-md-2" key={index}>
        <Card>
        <CardBody>
        <CardTitle>Item Name ={products.product_name}</CardTitle>
        <CardSubtitle>Seller={products.product_seller}</CardSubtitle>
        <CardText>Unit Price={products.product_price} <br/> Units ={products.product_unit}</CardText>
        </CardBody>
        <CardFooter><Button color="success" onClick= {()=>{setModal(true);addproduct(products)}} >Add to Cart</Button></CardFooter>
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