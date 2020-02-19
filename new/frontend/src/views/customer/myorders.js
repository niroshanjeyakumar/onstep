import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {
  Table, Button,Modal,ModalBody,ButtonGroup,Form,Input
} from 'reactstrap';
import moment from 'moment'
import 'assets/css/rating.css'
import {FaStar} from 'react-icons/fa';
import IndexNavbar from "components/Navbars/Customernavbar";
import IndexHeader from "components/Headers/CustomerHeader";
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
      const [Recieved, setRecieved]=useState("");
      const [modalRec, setmodalRec]=useState(false);
      const [RateDel,setRateDel]=useState(null);
      const [DelHover,setDelHover]=useState(null);
      const [DelComment,setDelComment]=useState("");
      const [RateSup,setRateSup]=useState(null);
      const [SupHover,setSupHover]=useState(null);
      const [SupComment,setSupComment]=useState("");

      const cust=sessionStorage.getItem('user');
      const customer =JSON.parse(cust);
      const id= customer.details._id;
      useEffect(()=>{
          axios.get('http://localhost:4000/onstep/order/customer/'+id)
          .then(res=>{
            setproduct(res.data);
        })
        .catch(function(error){
            console.log(error);
        }) 
      });
      var status;
     function removeOrder(id){
       console.log(id);
     }
     function trackOrder(id){
      console.log(id);
    }
    function vieworder(id){
      //setlistID(id);
      setmodal(true);
      console.log(id);
    }
    function recievedOrder(id){
      var now=moment().format('LLLL');
      const recievedTime=JSON.stringify(now);
      axios.post("http://localhost:4000/onstep/order/recieved/"+id,{recievedTime:recievedTime}).catch(err=>{console.log(err);})
      setRecieved(id);
      setmodalRec(true);

    }
function submitReview(){
  const review={
      CustDelRating:RateDel,
      CustDelReview:DelComment,
      CustSupRating:RateSup,
      CustSupReview:SupComment
  };
      axios.post("http://localhost:4000/onstep/order/cust/rating/"+Recieved,review).catch(err=>{console.log(err);})
}
      const pro = product.map(function (products, index){
        var remove=true;
        var track=true;
        var recieved=true;

        if (!products.order_accepted){
            status="Active";
            remove=false;
        }
        else if (products.order_accepted && !products.order_purchased && !products.order_delivered){
          status="Accepted";
      }
        else if(products.order_purchased && !products.order_complete){
            status="In delivery";
            track=false;
            recieved=false;
        }
        else if(products.order_complete){
            status="Delivered";
            recieved=false;
            remove=false;
        }
        
        
          return (  
              <tr>
              <td>{index+1}</td>
              <td>{status}</td>
              <td><a href={`/seller/view/${products.seller._id}`}>{products.seller.supermarket_name}</a></td>
              {/* <td>{products.order_accepted ? products.delivery.delivery_name : " "}</td> */}
              <td>{products.order_accepted ?<a href={`/delivery/view/${products.delivery._id}`}> {products.delivery.delivery_name} </a> : " "}</td>

              <td>{products.order_accepted ? products.delivery.delivery_number : " "}</td>
              <td>Rs.{products.total}</td>
              <td>
              <ButtonGroup>
              <Button color="warning" onClick={()=>{setlistID(products.productlist); vieworder(products._id);}}>View Order</Button>
              <Button color="info" onClick={()=>trackOrder(products._id)} disabled={track}>Track Order</Button>
              <Button color="success" onClick={()=>recievedOrder(products._id)} disabled={recieved}>Recieved</Button>
              <Button color="danger" onClick={()=>removeOrder(products._id)} disabled={remove}>Delete</Button>
              </ButtonGroup></td>
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
    <h1 align="center">My Orders</h1>
    <div className="row m-4">
      <Table hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Status</th>
        <th>Seller</th>
        <th>Delivery Person Name</th>
        <th>Contact No</th>
        <th>Total</th>
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
              <Modal isOpen={modalRec} toggle={() => setmodalRec(false)}>
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setmodalRec(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">Rate and Review</h4>
                </div>
                <ModalBody>
                <Form>
                  <h4>Delivery Person</h4>
                  <h5>Rating</h5>
                  {[...Array(5)].map((star,i)=>{
                    const rateVal=i+1;
                    return (
                      <label>
                      <input type='radio' name='ratingDel'value={rateVal} onClick={()=>setRateDel(rateVal)}/>
                      <FaStar className='star' color={rateVal<=(DelHover||RateDel) ? "#ffc107" :"#e4e5e9" } 
                            size={30}
                            onMouseEnter={()=>setDelHover(rateVal)}
                            onMouseLeave={()=>setDelHover(null)}/>
                      </label>
                      )
                  })}
                  <h5>Comments</h5>
                    <Input type="textarea" placeholder="Any other comments..."  value={DelComment} onChange={e=> setDelComment(e.target.value)}/> 
                
                  <h4>Supermarket</h4>
                  <h5>Rating</h5>
                  {[...Array(5)].map((star,i)=>{
                    const rateVal=i+1;
                    return (
                      <label>
                      <input type='radio' name='ratingDel'value={RateSup} onClick={()=>setRateSup(rateVal)}/>
                      <FaStar className='star' color={rateVal<=(SupHover||RateSup) ? "#ffc107" :"#e4e5e9" } 
                            size={30}
                            onMouseEnter={()=>setSupHover(rateVal)}
                            onMouseLeave={()=>setSupHover(null)}/>
                      </label>
                      )
                  })}
                  
                  <h5>Comments</h5>
                    <Input type="textarea" placeholder="Any other comments..."  value={SupComment} onChange={e=> setSupComment(e.target.value)}/>
                </Form>
                </ModalBody>
                <div className="modal-footer">
                <Button
                    color="success"
                    type="submit"
                    onClick={() => {submitReview()}}
                  >
                    Submit Review
                  </Button>
                  <Button
                    color="danger"
                    type="button"
                    onClick={() => setmodalRec(false)}
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