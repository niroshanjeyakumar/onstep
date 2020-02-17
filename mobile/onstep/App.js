import React from 'react';
import OnStep from './src/OnStep.js';
import store from './src/store'
import {Provider} from 'react-redux'

export default function App(){
    
    return(
      <Provider store={store}>
          <OnStep/>
      </Provider>
        
    )
}