import React, { useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function Map({navigation}) {
    const [Position,setPosition]=useState({
        latitude:6.9017,
        longitude:79.8734,
        
    })
    const order = navigation.state.params;
    const region= {
        latitude: Position.latitude,
        longitude: Position.longitude,
        latitudeDelta: 0.00522,
        longitudeDelta: 0.00521,
      };
      navigator.geolocation.getCurrentPosition((location)=>{setPosition(location.coords)},{enableHighAccuracy:true,timeout:20000,maximumAge:10000});
    return (
      <View style={styles.container}>
          
        <MapView style={styles.mapStyle} region={region}><MapView.Marker coordinate={{latitude: Position.latitude,
        longitude: Position.longitude,}} title="My Location"/></MapView>
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
