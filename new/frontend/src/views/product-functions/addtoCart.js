import React, {useState} from 'react';
import {
    Button,ModalBody,Modal,
} from 'reactstrap';

function Products  () {
  const [modal,setModal]=useState(false);

  /*useEffect(()=>{
      axios.get('http://localhost:4000/onstep/product/')
      .then(res=>{
        setproduct(res.data);
    })
    .catch(function(error){
        console.log(error);
    }) 
  });
   const pro = product.map(function (products, index){*/

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

export default Products;