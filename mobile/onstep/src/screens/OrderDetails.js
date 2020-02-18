import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput,AsyncStorage, FlatList, TouchableOpacity} from 'react-native';


export default function OrderDetails({navigation}) {

    const order = navigation.state.params;

    function onLearnMore(item) {
      navigation.navigate('Map', { ...item });
    };
   
    return (
      <View style={styles.container}>
          <Text style={styles.title}>{order.seller.supermarket_name}</Text>
          <FlatList data={order.productlist}
          renderItem={({item}) => (
            <View>
                <Text style={styles.item}>{item.product}</Text>
          <Text style={styles.price}>Rs.{item.price} x {item.order_quantity}</Text>
            </View>
            
            )}
            keyExtractor={(item, index) => index.toString()}
          
          />
          <Text style={styles.item}>Total</Text> 
          <Text style={styles.price}>Rs.{order.total}</Text>
          <TouchableOpacity style={styles.button1}><Text  style={styles.buttonText} onPress={() =>onLearnMore(order._id)}>View Order</Text></TouchableOpacity>
          
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
          fontSize: 16,
          alignSelf:'flex-end'
      },
      title:{
        padding: 10,
        fontSize: 18,
        height: 44,
        alignSelf:'center'
      }
    
  });