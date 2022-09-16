import logo from './logo.svg';
import React, { Fragment } from 'react';
import './App.css';

//init component
const Greeting = (props) => (
  <div>
    <h1>hello</h1>
    <p>props name greet: {props.name}</p>

  </div>
)




const App = () => (
  <Fragment>
    <Greeting name="aaron"/>
    <Greeting name="george"/>

  </Fragment>
)

export default App;
