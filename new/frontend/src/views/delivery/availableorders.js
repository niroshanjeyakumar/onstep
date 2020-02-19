import React, {useState,useEffect} from 'react';
import axios from 'axios';
//reactstrap components
import {
  Table, Button,
  Modal,ModalBody

} from 'reactstrap';
import moment from 'moment';
//core components
import IndexNavbar from "components/Navbars/DeliveryNavbar";
import IndexHeader from "components/Headers/delivery-homeHeader";
import DarkFooter from "components/Footers/Footer1";

function Products  () {
//add nav bar
    useEffect(() => {
        document.body.classList.add("profile-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        return function cleanup() {
          document.body.classList.remove("profile-page");
          document.body.classList.remove("sidebar-collapse");
        };
      });

   //declair,product,modal,listID
      const [product, setproduct] = useState([]);
      const [modal, setmodal]=useState(false);
      const [listID,setlistID]=useState([])
//get cistomer details from order
      const cust=sessionStorage.getItem('user');
      const customer =JSON.parse(cust);
      const ID= customer.details._id;

      useEffect(()=>{
          axios.get('http://localhost:4000/onstep/order/del')
          .then(res=>{
            setproduct(res.data);
        })
        .catch(function(error){//error handeling
            console.log(error);
        }) 
      });
     

      function acceptDelivery(id){
        var now=moment().format('LLLL');
      const acceptedTime=JSON.stringify(now);
        const orderAccept={ 
          order_id:id,
          delivery:ID,
          acceptedTime:acceptedTime
        }
        axios.post("http://localhost:4000/onstep/order/accept",orderAccept).catch(err=>{console.log(err);})
      }
      function vieworder(id){
        setmodal(true);
        console.log(id);
      }
//get product details which is to be delivered to pro
      const pro = product.map(function (products, index){
    
          return (  
              <tr>
            <th>{index+1}</th>
              <td>{products.seller.supermarket_name}</td>
              <td>{products.seller.supermarket_area}</td>
              <td>{products.customer.customer_address}</td>
              <td>{products.total}</td>
              <td>
{/*view order button*/}
	<Button color="warning" onClick={()=>{setlistID(products.productlist); vieworder(products._id);}}>View Order</Button></td>
{/*accept delivery button*/}
              <td><Button color="success" onClick={()=>acceptDelivery(products._id)}>Accept Delivery</Button></td>
              
              </tr>
          );
      
      });
//retriev product details to order_list
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
    <h1 align="center">Available Orders</h1>
    <div className="row m-4">
      <Table hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Seller</th>
        <th>Seller Area</th>
        <th>Delivery Address</th>
        <th>Total</th>
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
{/*ordered items*/}
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
