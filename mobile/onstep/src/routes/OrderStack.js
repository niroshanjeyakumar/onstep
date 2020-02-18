import React from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import Available from '../screens/Available.js';
import Active from '../screens/Active.js';
import Completed from '../screens/Completed.js';
import OrderDetails from '../screens/OrderDetails.js';


const OrderTab = createMaterialTopTabNavigator({
    
    Active:Active,
    Completed:Completed,
    Available: Available,
  });
 
  const OrderStack = createStackNavigator({
    Orders: {
        screen:OrderTab,
        navigationOptions:{
            title:"Orders"
        },
      },
    OrderDetails:{
      screen:OrderDetails,
      navigationOptions:{
        title:"Order Details"
    },
        
    },
  });

  export default OrderStack;