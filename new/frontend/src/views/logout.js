import React from 'react';
import {Redirect} from 'react-router-dom';

function logout(){
    sessionStorage.removeItem('user');
    return(
        <Redirect to='/'/>
    )
}
export default logout;