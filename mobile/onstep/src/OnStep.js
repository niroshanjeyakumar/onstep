import 'react-native-gesture-handler';
import React, { useState,useEffect } from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen.js';
import LoginScreen from './screens/LoginScreen.js';
import TabNav from './routes/tabNav.js';
import {useDispatch,connect} from 'react-redux';
import {loggedIn} from './actions'

const screensAuth = {
  Wecome:{
    screen:WelcomeScreen,
  },
  Login: {
    screen: LoginScreen,
  },
};
// const screensApp={
//   Home: {
//     screen: HomeScreen,
//   },
// }

import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
} from 'react-native';

function AuthLoadingScreen ({navigation}) {
 
const dispatch = useDispatch();
  // Fetch the token from storage then navigate to our appropriate place
  initAuth=async()=>{
    const result=await AsyncStorage.getItem('user');
    if (result){
      const details=JSON.parse(result);
        dispatch(loggedIn(details));
    }
    navigation.navigate(result ? 'App' : 'Auth');
   }
    
    // ,(err,result)=>{
    //     setresult(result);
    // }) ;

    useEffect(()=>{
            this.initAuth();
    })

  // Render any loading content that you like here
  
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  
}




// home stack navigator screens
//const AppStack = createStackNavigator(screensApp);
const AuthStack = createStackNavigator(screensAuth);

const Application = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: TabNav,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));



export default function App() {

  return (
    <Application/>
    // <NavigationContainer  ref={navigationRef}>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Welcome" component={WelcomeScreen} />
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="Login" component={LoginScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer >
    
  );
}

// const AppStackNavigator={
//   HomeScreen:{screens:HomeScreen},
//   LoginScreen:{screens:LoginScreen}
// })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
