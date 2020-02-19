import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput,FlatList, TouchableOpacity,AsyncStorage } from 'react-native'
import axios from 'axios'
import {path} from '../util/backend.js';
import { Ionicons } from '@expo/vector-icons';

const url=path;
export default function Completed({navigation}) {

    const [product, setproduct] = useState([]);
    //const [Result,setresult]=useState([]);
    
  // initAuth=async()=>{
  //   const result=await AsyncStorage.getItem('user');
  //   const delivery=JSON.parse(result);
  //   setresult(delivery);
  //  }
  //   //console.log(Result._id);
  //   useEffect(()=>{
  //           this.initAuth();
  //   },[])

    //const ID=Result._id;
    const ID=global.ID;
    useEffect(()=>{
        axios.get(url+'/onstep/order/completed/'+ID)
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

    return (
      <View style={styles.container}>
        
          <FlatList
            data={product}
            renderItem={({item}) => (
            <View>
                <Text style={styles.item}>{item.seller.supermarket_name}</Text>
                <Text style={styles.price}>Rs.{item.total}</Text>
                <TouchableOpacity style={styles.button1}>
                <Ionicons style={{alignSelf:"center"}} name="ios-list" size={32} color="black" />
                <Text  style={styles.buttonText} onPress={() =>onLearnMore(item)}>View Order</Text></TouchableOpacity>
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
      borderBottomLeftRadius:25,
    borderTopLeftRadius:25, 
      width:150,
      paddingVertical:5
  },
  buttonText:{
    fontSize:16,
    fontWeight:'500',
    color:'#000',
    textAlign:'center'
  },
  });
  