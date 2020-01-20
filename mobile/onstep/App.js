 import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [Outtext,setOuttext]=useState("Niroshan loves Gaji");
  return (
    <View style={styles.container}>
      <Text>{Outtext}</Text>
      <Button title="In a few years" onPress={()=>setOuttext("Niroshan weds Gaji")}/>
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
