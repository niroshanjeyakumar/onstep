import React,{useEffect,useState} from 'react';
//import axios from 'axios'
import {
    Button,Modal,ModalBody
} from 'reactstrap';



/*function Products  () {
  const [modal,setModal]=useState(false);

  
   const pro = product.map(function (products, index){

return <Modal
modalClassName="modal-mini modal-info"
toggle={() => setModal(false)}
isOpen={modal}
>
<div className="modal-header justify-content-center">
  <div className="modal-profile">
    <i className="now-ui-icons users_circle-08"></i>
  </div>
</div>
<ModalBody>
  <p>Always have an access to your profile</p>
</ModalBody>
<div className="modal-footer">
  <Button className="btn-neutral" color="link" type="button">
    Back
  </Button>
  <Button
    className="btn-neutral"
    color="link"
    type="button"
    onClick={() => setModal(false)}
  >
    Close
  </Button>
</div>
</Modal>
};

export default Products;*/

  const AddtoCart = ({product})=>{
console.log("hi")
    const [modal,setModal]=useState(true);
    useEffect(() => {
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
    /*useEffect(()=>{
      axios.get('http://localhost:4000/onstep/product/')
      .then(res=>{
        setproduct(res.data);
    })
    .catch(function(error){
        console.log(error);
    }) 
  });*/
    return(
      <Modal isOpen={modal} toggle={() => setModal(false)}>
      
      <div className="modal-header justify-content-center">
        <button
          className="close"
          type="button"
          onClick={() => setModal(false)}
        >
          <i className="now-ui-icons ui-1_simple-remove"></i>
        </button>
  <h4 className="title title-up">Title={product.product_name}</h4>
      </div>

      <ModalBody>
      <form>
      <input type="hidden" name="name" value={product.product_name} />
      <input type="hidden" name="id" value={product.product_id} />
      <input type="hidden" name="seller" value={product.product_seller} />
      <input type="hidden" name="unit" value={product.product_unit} />  
      <input type="hidden" name="price" value={product.product_price} />  
      <input type="number" name="order_size" />
      <Button color="success">Add to Cart</Button>
    </form>
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

    )
  }

  export default AddtoCart;