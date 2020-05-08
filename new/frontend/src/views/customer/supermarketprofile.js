import React, {useEffect, useState} from "react";
// import { useParams } from "react-router";
import {useParams} from "react-router-dom";
import axios from 'axios';
import {FaStar,FaStarHalf} from 'react-icons/fa';
import "assets/css/rating.css"

// reactstrap components
import {
  Card,
  CardTitle,
  Form,
  Button,
  CardText,
  CardBody,
  Modal,
  ModalBody,

} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/Customernavbar.js";
import Header from "components/Headers/CustomerHeader";
import TransparentFooter from "components/Footers/Footer1.js";
import Axios from "axios";
import {HorizontalBar} from 'react-chartjs-2';


function AdminCust() {
  useEffect(() => {
        document.body.classList.add("profile-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        return function cleanup() {
          document.body.classList.remove("profile-page");
          document.body.classList.remove("sidebar-collapse");
        };
      });


      const [supermarket,setSupermarket]=useState([]);
      const [product, setproduct] = useState([]);
      const [ordersize,setOrdersize] = useState("");
      const [modal1, setModal1] = React.useState(false);
      const [cartProduct,setcartProduct]=useState([]);
      const [Orders,setorders]=useState([]);


    React.useEffect(() => {
        document.body.classList.add("landing-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
    
        return function cleanup() {
          document.body.classList.remove("landing-page");
          document.body.classList.remove("sidebar-collapse");
        };
      });

      let {id}=useParams();
      console.log(id);
      useEffect(()=>{
        Axios.get('http://localhost:4000/onstep/user/supermarket/'+id).then(res=>setSupermarket(res.data))
        .catch(err=>console.log(err))
      })
      useEffect(()=>{
      Axios.post('http://localhost:4000/onstep/product/supermarket',{seller:id})
      .then(res=>{
        setproduct(res.data);
    })
    .catch(function(error){
        console.log(error);
    }) 
  });
//Rating functions
    useEffect(()=>{
      Axios.get('http://localhost:4000/onstep/order/supRating/'+id).then(res=>setorders(res.data))
        .catch(err=>console.log(err))
      });

      let sum=0;
      var StarValue=new Array(6).fill(0);
  Orders.forEach(function(order,i){
      sum=sum+order.CustSupRating;
      StarValue[order.CustSupRating]=StarValue[order.CustSupRating]+1
  })
  const avg=sum/Orders.length;
  const rating=avg.toFixed(1);
  const Star=avg/1;
  const NumOfStar=avg.toFixed(0);

console.log(StarValue[5]);

  const data = {
   labels: ['5', '4', '3', '2', '1'],
    datasets: [
      {
        label: "Data",
        backgroundColor: [
          '#008000',
          '#808000',
          '#FFFF00',
          '#FFA500',
          '#FF0000',
          ],
        //borderColor: 'rgba(255,99,132,1)',
        borderWidth: 0,
        hoverBackgroundColor: [
          '#006400',
          '#556B2F',
          '#FFD700',
          '#FF8C00',
          '#8B0000',
          ],
        //hoverBorderColor: 'rgba(255,99,132,1)',
        data: [StarValue[5], StarValue[4], StarValue[3], StarValue[2], StarValue[1]]
      }
    ]
  };

  const comments=Orders.map(function(order,i){
    return(
      <blockquote>
            <p className="blockquote blockquote-info">
           "{order.CustSupReview}"{" "}
           <br></br>
           <small> -{order.customer.customer_name}</small>
            </p>
          </blockquote>
    )
})


//saving to cart
  function saveCart(product) {
      //console.log(product);
      //setProductid(product);
      const cust=sessionStorage.getItem('user');
      const customer =JSON.parse(cust);
      var newcart={
        product:product,
        order_quantity:ordersize,
        customer_id:customer.details._id
      }
    axios.post('http://localhost:4000/onstep/cart/add',newcart)
    .then(res => console.log(res.data)); }
  const pro = product.map(function (products){

return <div className="col-sm-2 col-md-2">
        <Card>
        <CardBody>
        <CardTitle>{products.product_name}</CardTitle>
        <CardText>Rs. {products.product_price} / {products.product_unit}</CardText>
        <Form action="" className="form" method="post">
      
      
      <Button color="success" onClick={()=>{setcartProduct(products);setModal1(true)}}>Add to Cart</Button></Form>
    </CardBody>
        
</Card>

</div>
})

      
  return (
    <>
      <ExamplesNavbar />
      <Header/>

        <div><br/>
          <h2 align="center">{supermarket.supermarket_name}</h2>
          <span></span>

          </div>
          <div className="container">
          <h4>Rating</h4>
        <div className="row">
        <div className="col-md-4"> 
        
        <div className="ratevalue">{rating}</div>
        {[...Array(5)].map((star,i)=>{
      const Val=i+1;
      return (
        <label>
          {Val<=Star ?
        <FaStar color= "#ffc107" size={30}/>
              :
              (((rating%1)>=0.5)&&(NumOfStar>=Val))? <FaStarHalf color= "#ffc107" size={30} /> :""
          }
        </label>
        )
    })}
   ({Orders.length} reviews) 
        
        </div>

        <div className="col-lg-5">
        <HorizontalBar data={data} legend={{display:false,}} options={
              {scales: {
                yAxes: [
                  { gridLines: {
                    drawBorder:false,
                    drawOnChartArea: false,
                    
                    } },
                ],
                xAxes: [
                  {
                    display: false, 
                  },
                ],
              },}
            }/>
        </div>
        </div>
        <h4>Products</h4>
        <div className="row m-4">
        {pro}
        </div>
        <h3>Comments</h3>
        <div className="typography-line" >
          
                  {comments}
                </div>
        </div>
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
        <TransparentFooter />
    </>
  );
}

export default AdminCust;
