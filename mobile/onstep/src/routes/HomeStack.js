import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen.js'

const HomeStack = createStackNavigator({
    Home: {
        screen:HomeScreen,
        navigationOptions:{
            title:"Home"
        }
        
    },
  });
  
  export default HomeStack;