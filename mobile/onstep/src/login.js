import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput,KeyboardAvoidingView } from 'react-native';
import axios from "axios";
import {path} from "../util/backend.js"
const url=path;
console.log(url);
export default function Login() {
  const [Outtext,setOuttext]=useState("Who are you?");
  const [delEmail,setdelEmail]=useState("");
  const [delPass,setdelPass]=useState("");

function LoginAuth(){
    console.log("Function" + delEmail + delPass);
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
          //var user={type:'delivery', details:res.data.details};
            //sessionStorage.setItem('user',JSON.stringify(user))
        }
      }).catch(err => console.log('err', err));
}

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
       <Text>Delivery Person Login</Text>
       <View style={styles.credentials}>
      <TextInput  placeholder="Email" 
                  style={{borderBottomColor:'black', borderBottomWidth:2, padding:10}}
                  value={delEmail}
                  onChangeText={(value)=>setdelEmail(value)}/>
      <TextInput  placeholder="Password" 
                  style={{borderBottomColor:'black', borderBottomWidth:2, padding:10}}
                  value={delPass}
                  onChangeText={(value)=>setdelPass(value)}/>
     </View>
      <Button title="LOGIN" onPress={()=>LoginAuth()} style={{padding:40}}/>

      <Text>{Outtext}</Text>
          </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  credentials:{
    paddingTop:10,
    paddingBottom:20
  }
});
