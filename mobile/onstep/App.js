 import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [Outtext,setOuttext]=useState("");
  const [delEmail,setdelEmail]=useState("");
  const [delPass,setdelPass]=useState("");
  return (
    <View style={styles.container}>
       <Text>LOGIN</Text>
      <TextInput  placeholder="Email" 
                  style={{borderBottomColor:'black', borderBottomWidth:2, padding:10}}
                  value={delEmail}
                  
                  onChange={()=>setdelEmail(e.target.value)}/>
      <TextInput  placeholder="Password" 
                  style={{borderBottomColor:'black', borderBottomWidth:2, padding:10}}
                  value={delPass}
                  onChange={()=>setdelPass(e.target.value)}/>
     
      <Button title="LOGIN" onPress={()=>setOuttext("")} style={{padding:20}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
