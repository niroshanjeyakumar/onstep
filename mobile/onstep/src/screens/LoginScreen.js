import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput,KeyboardAvoidingView,AsyncStorage } from 'react-native';
import axios from "axios";
import {path} from "../util/backend.js"
const url=path;
console.log(url);


export default function Login({navigation}) {
  const [Outtext,setOuttext]=useState("Who are you?");
  const [delEmail,setdelEmail]=useState("");
  const [delPass,setdelPass]=useState("");

function LoginAuth(){
    axios.post(url+'/onstep/user/delivery/login',{email:delEmail, password:delPass})
      .then(res => {

        if (res.data.email===false){
            console.log("Email not found");
           
        }
        else if(res.data.email===true && res.data.password===false){
          console.log("Password wrong");
         // setloginfailAlert(true);
        }
        else if(res.data.email===true && res.data.password===true){
            setOuttext("Logged in successfully");
         // setLoggedin(true);
          var user=res.data.details;
            AsyncStorage.setItem('user',JSON.stringify(user));
            // AsyncStorage.getItem('user', (err, result) => {
            //   console.log(result);
            // })
            navigation.navigate('App');
        }
      }).catch(err => console.log('err', err));
}


  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
       <Text>Delivery Person Login</Text>
       <View style={styles.credentials}>
      <TextInput  placeholder="Email" 
                  style={styles.input}
                  value={delEmail}
                  onChangeText={(value)=>setdelEmail(value)}
                  placeholderTextColor='#ffffff'/>
      <TextInput  placeholder="Password" 
                  style={styles.input}
                  value={delPass}
                  onChangeText={(value)=>setdelPass(value)}
                  placeholderTextColor='#ffffff'/>
     </View>
      <TouchableOpacity style={styles.loginButton} onPress={()=>LoginAuth()}> 
        <Text style={styles.buttonText}>LOGIN</Text> 
      </TouchableOpacity>
      <Text>{Outtext}</Text>
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
