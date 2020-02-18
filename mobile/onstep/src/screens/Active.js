import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput,FlatList, TouchableOpacity,AsyncStorage } from 'react-native'
import axios from 'axios'
import {path} from '../util/backend.js';
const url=path;

export default function Active({navigation}) {
  const ID=global.ID;
    const [product, setproduct] = useState([]);
    // const [Result,setresult]=useState([]);
    
  // initAuth=async()=>{
  //   const result=await AsyncStorage.getItem('user');
  //   const delivery=JSON.parse(result);
  //   setresult(delivery);
  //  }
  //   //console.log(Result._id);
  //   useEffect(()=>{
  //           this.initAuth();
  //   },[])
      // const val=Result._id;
    //console.log(val);
    useEffect(()=>{
        axios.get(url+'/onstep/order/del/'+ID)
        .then(res=>{
          setproduct(res.data);
      })
      .catch(function(error){
          console.log(error);
      }) 
    });

    function onLearnMore(item) {
      navigation.navigate('OrderDetails', { ...item });
    };
    function Openmap(item) {
      navigation.navigate('Map', { ...item });
    };
    return (
      <View style={styles.container}>
          <FlatList
            data={product}
            renderItem={({item}) => (
            <View>
                <Text style={styles.item}>{item.seller.supermarket_name}</Text>
                
                <Text style={styles.price}>Rs.{item.total}</Text>
                <View style={{flexDirection: "row",alignSelf:'flex-end'}}>
                <TouchableOpacity style={styles.button2}><Text  style={styles.buttonText} onPress={() =>Openmap(item)}>Map</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button1}><Text  style={styles.buttonText} onPress={() =>onLearnMore(item)}>View Order</Text></TouchableOpacity>
              </View>
               
            </View>
            
            )}
            keyExtractor={(item, index) => index.toString()}
          
          />

          {/* <Text>{user.details._id}</Text> */}
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#fff',
      //alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
    price:{
        padding:10,
    },
    button1:{
      alignSelf:'flex-end',
      backgroundColor:'rgba(0,0,0,0.4)',
      //borderRadius:25, 
      width:150,
      paddingVertical:5
  },
  button2:{
    alignSelf:'flex-start',
    backgroundColor:'rgba(0,255,0,0.4)',
    //borderRadius:25, 
    width:100,
    paddingVertical:5
},
  buttonText:{
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
  });
  