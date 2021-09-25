import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput,KeyboardAvoidingView,AsyncStorage } from 'react-native';
import axios from "axios";
import {path} from "../util/backend.js"
const url=path;




export default function Login({navigation}) {
  const [Outtext,setOuttext]=useState("Who are you?");
  const [delEmail,setdelEmail]=useState("");
  const [delName,setdelName]=useState("");
  const [delNumber,setdelNumber]=useState("");
  const [delPass,setdelPass]=useState("");
  const [delConfirm,setdelConfirm]=useState("");
  const [emailAlert, setemailAlert] = React.useState(false);
  const [passwordAlert, setpasswordAlert] = React.useState(false);

  function saveDelivery(){
    setemailAlert(false);
    setpasswordAlert(false);
    if (delPass!==delConfirm){
       setpasswordAlert(true);
    }
    else{
    const newDel={
      delivery_name:delName,
      delivery_email:delEmail,
      delivery_number:delNumber,
      delivery_password:delPass
  }
  axios.post(url+'/onstep/user/delivery/add',newDel)
  .then(res => {console.log(res.data);
    const data=res.data.email;
    if (data===true){
      setemailAlert(true);
    }
    else{
      navigation.navigate('Login');
    }
  }
  ); }
  }


  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
       <Text style={styles.onstep}>SignUp</Text>
       <View style={styles.credentials}>
      <TextInput  placeholder="Name" 
                  style={styles.input}
                  value={delName}
                  onChangeText={(value)=>setdelName(value)}
                  placeholderTextColor='#ffffff'
                  keyboardType='email-address'/>
    <TextInput  placeholder="Contact Number" 
                  style={styles.input}
                  value={delNumber}
                  onChangeText={(value)=>setdelNumber(value)}
                  placeholderTextColor='#ffffff'
                  keyboardType='phone-pad' 
                  maxLength={10}/>
    <TextInput  placeholder="Email" 
                  style={styles.input}
                  value={delEmail}
                  autoCapitalize='none'
                  autoCompleteType='email'
                  onChangeText={(value)=>setdelEmail(value)}
                  placeholderTextColor='#ffffff'
                  keyboardType='email-address'/>
                  {emailAlert ? <Text style={{alignSelf:'center'}}>Email already in use</Text> : null}
      <TextInput  placeholder="Password" 
                  secureTextEntry
                  style={styles.input}
                  value={delPass}
                  onChangeText={(value)=>setdelPass(value)}
                  placeholderTextColor='#ffffff'/>
                  {passwordAlert ? <Text style={{alignSelf:'center'}}>Passwords do not match</Text> : null}
      <TextInput  placeholder="Confirm Password" 
                  secureTextEntry
                  style={styles.input}
                  value={delConfirm}
                  onChangeText={(value)=>setdelConfirm(value)}
                  placeholderTextColor='#ffffff'/>
     </View>
      <TouchableOpacity style={styles.loginButton} onPress={()=>saveDelivery()}> 
        <Text style={styles.buttonText}>LOGIN</Text> 
      </TouchableOpacity>
      <View style={{flexDirection: 'row',paddingTop:40 ,}}>
      <Text style={{color:"white"}}>Already have an account?   </Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
        <Text style={{fontWeight:"bold"}}>Login</Text>
      </TouchableOpacity>
      </View>
          </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#00BFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  onstep:{
    fontSize:48

  },
  credentials:{
    paddingTop:10,
    paddingBottom:20
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
