import React from 'react';

const Greeting = ({ greeting, isShow }) =>
isShow ? <h1>{greeting}</h1> : null;

export default Greeting