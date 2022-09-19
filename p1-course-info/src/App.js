import logo from "./logo.svg";
import "./App.css";

const Header = (props) => {
  return (
    <div>
      <h1>Welcome to {props.course}</h1>
    </div>
  );
};

const Content = (props) => {
  const { parts } = props;
  return (
    <div>
      <p>{parts[0].name}</p>
      <p>{parts[0].exercises}</p>
      <p>{parts[1].name}</p>
      <p>{parts[1].exercises}</p>
      <p>{parts[2].name}</p>
      <p>{parts[2].exercises}</p>
    </div>
  );
};

const Total = (props) => {
  const { parts } = props;
  return (
    <p>
      total parts:{" "}
      {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>
  );
};

function App() {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
}

export default App;
