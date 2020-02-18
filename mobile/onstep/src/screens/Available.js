import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput,FlatList, TouchableOpacity,AsyncStorage } from 'react-native'
import axios from 'axios'
import {path} from '../util/backend.js';

const url=path;
export default function Available({navigation}) {

    const [product, setproduct] = useState([]);
    //const [Result,setresult]=useState([]);
    
    // initAuth=async()=>{
    //   const result=await AsyncStorage.getItem('user').catch(err=>console.log(err));
    //   const delivery=JSON.parse(result);
    //   setresult(delivery);
    //  }
    //   //console.log(Result._id);
    //   useEffect(()=>{
    //           this.initAuth();
    //   },[])

    
    useEffect(()=>{
        axios.get(url+'/onstep/order/del')
        .then(res=>{
          setproduct(res.data);
      })
      .catch(function(error){
          console.log(error);
      }) 
    });
    // const val=Result._id;
    const val=global.ID;
    function acceptDelivery(id){
      const orderAccept={ 
        order_id:id,
        delivery:val
      }
      axios.post(url+"/onstep/order/accept",orderAccept).catch(err=>{console.log(err);})
    }

    function onLearnMore(item) {
      navigation.navigate('OrderDetails', { ...item });
    };
    return (
      <View style={styles.container}>
          <FlatList
            data={product}
            renderItem={({item}) => (
            <View style={styles.order}>
                <Text style={styles.item}>{item.seller.supermarket_name}</Text>
                <Text style={styles.price}>Rs.{item.total}</Text>
                <TouchableOpacity style={styles.button1}><Text  style={styles.buttonText} onPress={() =>onLearnMore(item)}>View Order</Text></TouchableOpacity>
                <TouchableOpacity  style={styles.button2}><Text style={styles.buttonText} onPress={() =>acceptDelivery(item._id)}>Accept</Text></TouchableOpacity>
            </View>
            
            )}
            keyExtractor={(item, index) => index.toString()}
            
          />
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
    order:{
      backgroundColor:'#fff',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
    price:{
        padding:10,
        alignSelf:'flex-end'
    },
    button1:{
          alignSelf:'flex-start',
          backgroundColor:'rgba(0,0,0,0.4)',
          borderRadius:25, 
          width:200,
          paddingVertical:5
      },
      button2:{
        alignSelf:'flex-end',
          backgroundColor:'rgba(0,0,0,0.4)',
          borderRadius:25, 
          width:200,
          paddingVertical:5
    },
    buttonText:{
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
    },
  });
  