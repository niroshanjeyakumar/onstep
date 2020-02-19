import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput,AsyncStorage,Dimensions,Image } from 'react-native';

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
          <Text style={styles.text}>HOME</Text>
          <View>
          <Image
          style={{width: 200, height: 200, alignSelf:"center"}}
          source={require('../assets/images/delivery.jpg')}
        />
            </View>
            
            <View>
  
   <View style={styles.txtborder}><Text style={{paddingLeft:10,fontSize:18}}>Name : {Result.delivery_name}</Text></View>
   <View style={styles.txtborder}><Text style={{paddingLeft:10,fontSize:18}}>Contact Number: {Result.delivery_number}</Text></View>
    <View style={styles.txtborder}><Text style={{paddingLeft:10,fontSize:18}}>Email : {Result.delivery_email}</Text></View>
    </View>
    <View style={{justifyContent:'flex-end'}}>
    <Button title="Logout" onPress={()=>logout()}/>
    </View>

      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#fff',
      //alignItems: 'center',
    },
    text: {
      fontSize:48,
      alignSelf:"center"
    },
txtborder:{
  padding:10,
  borderWidth:10,
  borderColor:'#fff'
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