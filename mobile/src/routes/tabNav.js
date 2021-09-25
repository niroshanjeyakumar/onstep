import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';


import HomeStack from './HomeStack.js';
import OrderStack from './OrderStack.js';

const TabNavigator = createBottomTabNavigator({
  Orders:{
    screen:OrderStack,
      navigationOptions: {
        tabBarLabel:"Orders",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons style={{alignSelf:"center"}} name="ios-cart" size={32}  color={tintColor}/>
        )
      }
  },
    Home: {
      screen:HomeStack,
      navigationOptions: {
        tabBarLabel:"Home",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons style={{alignSelf:"center"}} name="ios-home" size={32} color ={tintColor} />
        )
      }},
    
  },
  {
    initialRouteName:'Home',
    tabBarOptions:{
      activeTintColor:'#1e90ff',
      inactiveTintColor:'grey'
    }
  }
  );
  
  export default TabNavigator;