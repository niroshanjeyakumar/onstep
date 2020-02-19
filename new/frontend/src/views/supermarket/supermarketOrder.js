import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {
  Table,Button,Modal,ModalBody
} from 'reactstrap';
import moment from 'moment';

import IndexNavbar from "components/Navbars/SupermarketNavbar";
import IndexHeader from "components/Headers/supermarkethomeheader";
import DarkFooter from "components/Footers/Footer1";

function Products  () {
    useEffect(() => {
        document.body.classList.add("profile-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        return function cleanup() {
          document.body.classList.remove("profile-page");
          document.body.classList.remove("sidebar-collapse");
        };
      });

      const [product, setproduct] = useState([]);
      const [modal, setmodal]=useState(false);
      const [listID,setlistID]=useState([]);

     const user =sessionStorage.getItem('user'); 
     const customer =JSON.parse(user);
    const ID= customer.details._id;
      useEffect(()=>{
          axios.get('http://localhost:4000/onstep/order/supermarket/'+ID)
          .then(res=>{
            console.log(res);
            setproduct(res.data);
        })
        .catch(function(error){
            console.log(error);
        }) 
      });
     // console.log(product);
     // var status;
     function purchased(id){
      var now=moment().format('LLLL');
      const purchasedTime=JSON.stringify(now);
        axios.post("http://localhost:4000/onstep/order/purchased/"+id,{purchasedTime:purchasedTime}).catch(err=>{console.log(err);})
      }

      function vieworder(id){
        //setlistID(id);
        setmodal(true);
        console.log(id);
      }
 
      const pro = product.map(function (products, index){
        var disableButton=false;
         //if (!products.order_accepted){
        //     status="Active";
        // }
        // else 
        if(products.order_purchased){
            disableButton=true;
         }
        // else if(!products.order_delivered){
        //     status="Delivered";
        // }
        
          return (  
              <tr>
              <th>{index+1}</th>
              <td>{products.delivery.delivery_name}</td>
              <td>{products.delivery.delivery_number}</td>
              <td>Rs. {products.total}</td>
              <td><Button color="warning" onClick={()=>{setlistID(products.productlist); vieworder(products._id);}}>View Order</Button></td>
              <td><Button color="success" onClick={()=>purchased(products._id)} disabled={disableButton}>Purchased</Button></td>
              <td></td>
              <td></td>
              </tr>
          );
      
      });
      
      const order_list =listID.map(function (products, index){
        return(
          <tr>
          <td>{index+1}</td>
          <td>{products.product}</td>
          <td>{products.price}</td>
          <td>{products.unit}</td>
          <td>x {products.order_quantity}</td>
          <td>Rs. {products.order_quantity*products.price}</td>
          </tr>
        );
      });


  return (
      <>
    <IndexNavbar/>
    <IndexHeader/><br/>
    <h1 align="center">Orders</h1>
    <div className="row m-4">
      <Table hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Delivery Person Name</th>
        <th>Contact No</th>
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
    <Modal isOpen={modal} toggle={() => setmodal(false)}>
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setmodal(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">Ordered Items</h4>
                </div>
                <ModalBody>
                  <Table>
                  <th>#</th>
                  <th>Prodct</th>
                  <th>Unit Price</th>
                  <th>Unit Size</th>
                  <th>Order Size</th>
                  <th>Price</th>
                  {order_list}
                  </Table>
                </ModalBody>
                <div className="modal-footer">
                  <Button
                    color="danger"
                    type="button"
                    onClick={() => setmodal(false)}
                  >
                    Close
                  </Button>
                </div>
              </Modal>
  </div>
    <DarkFooter/>
    </>
  );
};

export default Products;