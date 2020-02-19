import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as RootNavigation from '../util/RootNavigation.js';

export default function Welcome({navigation}) {
  

    return (
      <View style={styles.container}>
          <Text>Welcome</Text>
          <Button title="LOGIN" onPress={()=>navigation.navigate('Login')}/>
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
  