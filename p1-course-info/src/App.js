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
      <ul>
        {parts.map((part) => (
          <li key={part.id}>
            {part.name}: {part.exercises}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Total = (props) => {
  const { parts } = props;
  let total = 0;
  for (let part in parts) {
    total += part.exercises;
  }
  return <p>{total}</p>;
};

function App() {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
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
