import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput,Image } from 'react-native';
import * as RootNavigation from '../util/RootNavigation.js';

export default function Welcome({navigation}) {
  

    return (
      <View style={styles.container}>
      <View style={styles.container1}>
          <Text style={styles.welcome}>Welcome!!!</Text>
          <Text style={styles.onstep}>ONSTEP</Text>
         <Text style={styles.del}>Delivery</Text> 
         </View>
         <View style={styles.container2}>
          <Button title="LOGIN" onPress={()=>navigation.navigate('Login')} style={styles.button}/>
      </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#fff',
      
    },
    container1: {
      flex: 1,
      backgroundColor:'#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2: {
      //flex: 1,
      //backgroundColor:'#fff',
     // alignItems: 'center',
      justifyContent:'flex-end',
      paddingBottom:80
    },
    welcome:{
      fontSize:48
    },
    onstep:{
      fontSize:48

    },
    del:{
      fontSize:20
    },
    button:{
      width:200,
      borderRadius:25,
      height:30
    }
  });
  