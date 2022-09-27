import logo from './logo.svg';
import './App.css';
import React, { Fragment, useState } from "react";

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Info = ({text, amount}) => {
  return (
    <p>{text}: {amount}</p>
  )
}


function App() {
  const [neutral, setNeutral] = useState(0)
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <Fragment>
      <h1>give feedback</h1>
      <Button text="good" handleClick={() => setGood(good + 1)}/>
      <Button text="bad" handleClick={() => setBad(bad + 1)}/>
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)}/>

      <h1>statistics</h1>
      <Info text="good" amount={good}/>
      <Info text="bad" amount={bad}/>
      <Info text="neutral" amount={neutral}/>
      <Info text="all" amount={good + bad + neutral}/>
      
      <Info text="average" amount={(good) / (good + bad)}/>
      <Info text="positive" amount={(good) / (good + neutral + bad) * 100 + " %"}/>


    </Fragment>
  );
}

export default App;
