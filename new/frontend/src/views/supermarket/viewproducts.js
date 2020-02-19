import React, {useState,useEffect} from 'react';
import axios from 'axios';

import {
  Button,
  Table
} from 'reactstrap';

//import AddtoCart from "views/product-functions/addtoCart.js";
import IndexNavbar from "components/Navbars/SupermarketNavbar";
import IndexHeader from "components/Headers/supermarkethomeheader";
import DarkFooter from "components/Footers/onstepFooter.js";

function Products  () {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  const user=sessionStorage.getItem('user');
  const userData=JSON.parse(user);
  useEffect(()=>{
      axios.post('http://localhost:4000/onstep/product/supermarket',{seller:userData.details._id})
      .then(res=>{
        setproduct(res.data);
    })
    .catch(function(error){
        console.log(error);
    }) 
  });
 
  function deleteproduct (id){
    axios.get("http://localhost:4000/onstep/product/delete/"+id).catch(function(error){
      console.log(error);
  }) 
  }
  function editproduct (id){
    axios.get("http://localhost:4000/onstep/product/update/"+id).catch(function(error){
      console.log(error);
  }) 
  }
  const pro = product.map(function (products,i){

            return (
              <tr key={i}>
                <td>{products.product_name}</td>
                <td>{products.product_category.category_name}</td>
                <td>{products.product_unit}</td>
                <td>{products.product_price}</td>
                <td><Button color="warning" onClick={()=> editproduct(products._id)}>Edit</Button></td>
                <td><Button color="danger" onClick={()=> deleteproduct(products._id)}>Delete</Button></td>
              </tr>
            )
            })

            return (
              <>
                <IndexNavbar />
                <div className="wrapper">
                  <IndexHeader />
                  <div className="main">
                  <div className="row m-4">
                      <Table hover>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Category</th>
                        <th>Unit</th>
                        <th>Unit price</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      
                      {pro}

                    </tbody>
                    </Table>
                  </div>
                  </div>
                  <DarkFooter />
                </div>
              </>
            );
};

export default Products;
