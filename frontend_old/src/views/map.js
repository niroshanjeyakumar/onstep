import React, { useState, useEffect } from 'react'
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";

 function Map({coordinates}){
     
     const [Coordinates,setcoordinates]= useState({
         lat:6.902140,
        lng:79.861004});
     //const [lng,setlng]= this.props.lng;
    // console.log(coordinates)
    useEffect(()=>{
        setcoordinates(coordinates)
    },[coordinates.lat!=Coordinates.lat&&coordinates.lng!=Coordinates.lng])
     //if(coordinates) {  }
    return(
        <GoogleMap defaultZoom={10} defaultCenter={Coordinates}>
            <Marker position={Coordinates}/>
        </GoogleMap>
    );
}

const WrappedMap= withScriptjs(withGoogleMap(Map))
export default WrappedMap;