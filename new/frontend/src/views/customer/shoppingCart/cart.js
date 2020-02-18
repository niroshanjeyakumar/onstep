import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {
  Button, Table,Modal,ModalBody, Input
} from 'reactstrap';
import moment from 'moment';
import { ButtonGroup } from 'react-bootstrap';
import PlacesAutocomplete,{
  geocodeByAddress,getLatLng
} from 'react-places-autocomplete'

import Map from '../../map'

function Products  () {

  const cust=sessionStorage.getItem('user');
  const customer =JSON.parse(cust);
  const ID= customer.details._id;

  const [product, setproduct] = useState([]);
  const [totVal,settotalVal]=useState(0);
  const [ModalTrack, setModalTrack]=useState(false);
  const [OrderID,setOrderID]=useState("");
  const [coordinates,setcoordinates]=useState({
    lat:null,
    lng:null
  })
  const [address,setaddress] = useState(customer.details.customer_address);
  //const [neworder, setnewOrder]=useState([]);
 // const [modal, setModal] = useState(false);
  
  //const toggle = () => setModal(!modal);
  

  
  useEffect(()=>{
      axios.get('http://localhost:4000/onstep/cart/cust/'+ID)
      .then(res=>{
        //console.log(res.data);
        setproduct(res.data);
    })
    .catch(function(error){
        console.log(error);
    }) 
  });

  function deletefromcart (id){
    axios.get("http://localhost:4000/onstep/cart/delete/"+id).catch(function(error){
      console.log(error);
  }) 
  }
  function editcart (id){
    
    axios.get("http://localhost:4000/onstep/cart/update/"+id).catch(function(error){
      console.log(error);
  }) 
  }

const handleselect = async(value)=>{
  const results = await geocodeByAddress(value);
  const latlng =await getLatLng(results[0]);
  console.log(latlng);
  console.log(address);
  setcoordinates(latlng);
}


  function makeorder (){
    axios.get("http://localhost:4000/onstep/cart/"+OrderID).then(response=>
      {
        //console.log(response);
        const cartData=response.data;
        let total=cartData.product.product_price * cartData.order_quantity;
        //alert(total);
        var now=moment().format('LLLL');
        const orderTime=JSON.stringify(now);
       // alert(orderTime);
        const order ={
          productlist:{product:cartData.product.product_name, unit:cartData.product.product_unit,price:cartData.product.product_price, order_quantity:cartData.order_quantity},
          seller:cartData.product.seller_id,
          customer:cartData.customer_id,
          total:total,
          orderTime:orderTime,
          deliveryAddress:address,
          deliveryCoords:coordinates

        };
        //alert(order.total);
        //setnewOrder(order);
        axios.post("http://localhost:4000/onstep/order/add/",order).catch(function(error){
          console.log(error);
      }) 
      }
    ).catch(err=>console.log(err));
    //console.log(neworder);
    setModalTrack(false);
  
  }
  function orderAll(){
        product.map(function (products, index){
          makeorder(products._id);
          });
  }
  

  const pro = product.map(function (products, index){
     // console.log(products.product.product_name);
let total=products.product.product_price*products.order_quantity;

return (  
<tr>
  <td>{index + 1}</td>
  <td>{products.product.product_name}</td>
  <td><a href={`/seller/view/${products.product.seller_id}`}>{products.product.seller_name}</a></td>
  <td>{products.product.product_price}</td>
  <td>{products.order_quantity}</td>
  <td>{total}</td>
 <td>
    <ButtonGroup>
    <Button color="success" onClick={()=> {setOrderID(products._id);setModalTrack(true) }}>Order</Button>
    <Button color="warning" onClick={()=> editcart(products._id)}>Edit</Button>
    <Button color="danger" onClick={()=> deletefromcart(products._id)}>Delete</Button>
  </ButtonGroup>
  </td>
</tr>
)

})

  return (

    <div className="row m-4">
        <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>Seller</th>
          <th>Unit price</th>
          <th>Order Quantity</th>
          <th>Total Price</th>
          <th></th>
      
        </tr>
      </thead>
      <tbody>
        
        {pro}

      </tbody>
      </Table>
      <Button color="success" size="lg"onClick={()=> {orderAll()}}>Order All</Button>
      <Modal isOpen={ModalTrack} toggle={() => setModalTrack(false)}>
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModalTrack(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">Set Delivery Address</h4>
                </div>
                <ModalBody>
                  <div>
                  <PlacesAutocomplete value={address} onChange={setaddress} onSelect={handleselect}>
                        {({ getInputProps, suggestions, getSuggestionItemProps, loading })=>(
                        <div> 
                          <Input {...getInputProps({placeholder:"Enter Delivery Address"})}/>
                          <div>
                            {loading ? <div>...loading</div>: null}
                            {suggestions.map((suggestion)=>{

                              const style={
                                backgroundColor:suggestion.active ? '#0000ff': "#fff"
                              }
                              return(
                              <div {...getSuggestionItemProps(suggestion,{style})}>{suggestion.description}</div>
                              )
                            })}
                          </div>
                        
                        
                        </div>
                        
                        )}

                  </PlacesAutocomplete>
                  </div>
                  <div style={{ height: '50%', width: '100%' }}>
                    <Map 
                        coordinates= {coordinates}
                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCV4b6OJIuL6b1HtVabtN-8v0XuJ1o4T_I"
                        loadingElement={<div style={{ height:'100%' }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}/>
                  </div>
                </ModalBody>
                <div className="modal-footer">
                <Button
                    color="success"
                    type="submit"
                    onClick={() => makeorder()}
                  >
                    Order
                  </Button>
                  <Button
                    color="danger"
                    type="button"
                    onClick={() => setModalTrack(false)}
                  >
                    Close
                  </Button>
                </div>
              </Modal>
    </div>
  );
};

export default Products;