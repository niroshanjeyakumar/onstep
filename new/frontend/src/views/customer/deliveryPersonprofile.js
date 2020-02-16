import React, {useEffect, useState} from "react";
// import { useParams } from "react-router";
import {useParams} from "react-router-dom";
import {FaStar,FaStarHalf} from 'react-icons/fa';
import "assets/css/rating.css"
// reactstrap components
import {
  
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
//const [id,setid]=useState('');
  //useEffect(()=>{setid(useParams)})
//console.log(id);

      const [delivery,setDelivery]=useState([]);
      const [Orders,setorders]=useState([]);


    React.useEffect(() => {
        document.body.classList.add("landing-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
       // window.scrollTo(0, 0);
        //document.body.scrollTop = 0;
        return function cleanup() {
          document.body.classList.remove("landing-page");
          document.body.classList.remove("sidebar-collapse");
        };
      });

      let {id}=useParams();
      //console.log(id);
      useEffect(()=>{
        Axios.get('http://localhost:4000/onstep/user/delivery/'+id).then(res=>setDelivery(res.data))
        .catch(err=>console.log(err))
      },[])
      useEffect(()=>{
        Axios.get('http://localhost:4000/onstep/order/delRating/'+id).then(res=>setorders(res.data))
        .catch(err=>console.log(err))
      },[])
      
      //const arrAvg =  arr.reduce((a,b) => a + b, 0) / arr.length;
      let sum=0;
      var StarValue=new Array(6).fill(0);
  Orders.forEach(function(order,i){
      sum=sum+order.CustDelRating;
      StarValue[order.CustDelRating]=StarValue[order.CustDelRating]+1
  })
  const avg=sum/Orders.length;
  const rating=avg.toFixed(1);
  const Star=avg/1;
  const NumOfStar=avg.toFixed(0);

console.log(StarValue[5])
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
                   "{order.CustDelReview}"{" "}
                   <br></br>
                   <small> -{order.customer.customer_name}</small>
                    </p>
                  </blockquote>
            )
  })
  

     
  return (
    <>
      <ExamplesNavbar />
      <Header/>

        <div className="container"><br/>
          <h2 align="center">{delivery.delivery_name}</h2>
          <span></span>

          
        <div className="content">
        Name : {delivery.delivery_name}<br/>
        Contact No: {delivery.delivery_number}
        </div>
        <br/><br/>
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
        gridLines: {
        },
        display: false, // this will hide vertical lines
      },
    ],
  },}
}/>
        </div>
        </div>
        <h3>Comments</h3>
        <div className="typography-line" >
          
                  {comments}
                </div>



        </div>
        
        
        <TransparentFooter />
    </>
  );
}

export default AdminCust;
