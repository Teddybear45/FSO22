import logo from "./logo.svg";
import React, { Fragment } from "react";
import "./App.css";

//init component
const Greeting = (props) => (
  <div>
    <p>props name greet: {props.name}</p>
    <p>props age: {props.age}</p>
  </div>
);

const App = () => {
  const name = "Peter";
  const age = 10;

  return (
    <Fragment>
      <Greeting name={name} age={age} />
      <Greeting name="george" age={20} />
    </Fragment>
  );
};

export default App;
