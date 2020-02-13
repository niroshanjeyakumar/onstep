import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Login from './src/login.js'

export default function App() {
  const [Outtext,setOuttext]=useState("");
  const [delEmail,setdelEmail]=useState("");
  const [delPass,setdelPass]=useState("");
  return (
    <Login />
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
