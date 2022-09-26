import React, { Fragment, useState } from "react";
import "./App.css";

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>The app is used by clicking buttons</div>;
  } else {
    return (
      <div>
        <h1>button press history</h1>
        <p>{props.allClicks.join(" ")}</p>
      </div>
    );
  }
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const [clicks, setClicks] = useState({ left: 0, right: 0 });
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setClicks({
      ...clicks,
      left: clicks.left + 1,
    });
    setAll(allClicks.concat("L"));
  };
  const handleRightClick = () => {
    setClicks({
      ...clicks,
      right: clicks.right + 1,
    });
    setAll(allClicks.concat("R"));
  };

  return (
    <div>
      {clicks.left}
      <Button handleClick={handleRightClick} text="right" />
      <Button handleClick={handleLeftClick} text="left" />
      {clicks.right}
      <History allClicks={allClicks} />
      <br />
    </div>
  );
};

export default App;
