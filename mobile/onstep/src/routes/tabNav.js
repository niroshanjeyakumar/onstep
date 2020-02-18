import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeStack from './HomeStack.js';
import OrderStack from './OrderStack.js';

const TabNavigator = createBottomTabNavigator({
  Orders:OrderStack,
    Home: HomeStack,
    
  },
  {
    initialRouteName:'Home'
  }
  );
  
  export default TabNavigator;