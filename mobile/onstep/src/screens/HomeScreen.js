import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput,AsyncStorage,Dimensions } from 'react-native';
import {useDispatch} from 'react-redux'
import {loggedIn} from '../actions'
import MapView from 'react-native-maps';

export default function Home({navigation}) {
    const [Result,setresult]=useState([]);
  initAuth=async()=>{
    const result=await AsyncStorage.getItem('user');
    const delivery=JSON.parse(result);
    setresult(delivery);
   }

    useEffect(()=>{
            this.initAuth();
    },[])

    async function  logout(){
    await AsyncStorage.clear();
    navigation.navigate('Auth');
}

global.ID=Result._id;
    return (
      <View style={styles.container}>
          <Text>HOME</Text>
          <Button title="dispatch"onPress={()=>dispatch(loggedIn(Result._id))}/>
    <Text>Hello {Result.delivery_name}</Text>
    <Text>Hello {Result.delivery_number}</Text>
    <Text>{Result._id}</Text>
    <Button title="Logout" onPress={()=>logout()}/>
   
        <MapView style={styles.mapStyle} />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#00BFFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    credentials:{
      paddingTop:10,
      paddingBottom:20
    },
    mapStyle: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height/2,
    },
  
    input:{
      borderBottomColor:'rgba(0,0,0,0)', 
      backgroundColor:'rgba(255,255,255,0.3)',
      borderRadius:25, 
      width:300,
      paddingHorizontal:20,
      padding: 10,
      fontSize:16,
      color:'#ffffff',
      marginVertical:10
    },
    buttonText:{
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
    },
    loginButton:{
      backgroundColor:'rgba(0,0,128,0.4)',
      borderRadius:25, 
      width:300,
      paddingVertical:10
    }
    
  });