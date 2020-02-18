import React, { useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
const GOOGLE_MAPS_APIKEY ='AIzaSyCV4b6OJIuL6b1HtVabtN-8v0XuJ1o4T_I';


export default function Map({navigation}) {

  const order = navigation.state.params;

    const [Position,setPosition]=useState({
        latitude:6.903753,
        longitude:79.871589,
    })
    const [DelLocation,setDelLocation]=useState({
      latitude:6.901957,
      longitude:79.8734,
  })
  const [Seller,setseller]=useState({
    latitude:6.901957,
    longitude:79.8734,
})
    
    const origin = {latitude: Position.latitude, longitude: Position.longitude};
    const supermarket={latitude: order.seller.supermarket_coods.lat, longitude:  order.seller.supermarket_coods.lng}
    const destination = {latitude: order.deliveryCoords.lat, longitude:  order.deliveryCoords.lng};
    const region= {
        latitude: Position.latitude,
        longitude: Position.longitude,
        latitudeDelta: 0.00522,
        longitudeDelta: 0.00521,
      };
      navigator.geolocation.getCurrentPosition((location)=>{setPosition(location.coords)},{enableHighAccuracy:true,timeout:2000000,maximumAge:1000000});
  
   //{latitude: Position.latitude,longitude: Position.longitude,}
   //{latitude: 37.771707, longitude: -122.4053769}

      return (
      <View style={styles.container}>
          
        <MapView style={styles.mapStyle} region={region} >
          <MapViewDirections
          origin={origin}
          destination={destination}
          waypoints={[supermarket]}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="red"/>
          
        <MapView.Marker coordinate={{latitude: Position.latitude,
        longitude: Position.longitude,}} title="My Location"/>
        <MapView.Marker coordinate={supermarket} title="Seller"/>
        <MapView.Marker coordinate={destination} title="Delivery"/>

      </MapView>
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
