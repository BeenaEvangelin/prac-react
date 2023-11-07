import "./App.css";
import { useState, useEffect } from "react";
import Todos from "./Components/Todos";
import Button from "./Components/Button";

function App() {
  const [count, setCount] = useState(0);
  const lightmode = false;
  const addCountHandler = () => {
    setCount((prevcount) => prevcount + 1);
  };
  const deleteCountHandler = () => {
    setCount((prevcount) => prevcount - 1);
  };
  useEffect(() => {
    setCount(100);
    console.log("The counter number is " + count);
  }, []);
  return (
    <>
      <h1>Hello World</h1>
      <Todos />

      <p>Lets add a counter</p>
      <Button color="teal" title="Add" onClick={addCountHandler} />
      <h6>{count}</h6>
      <Button color="purple" title="Delete" onClick={deleteCountHandler} />
      <h4>{lightmode ? "light mode is on" : "dark mode is on"}</h4>
    </>
  );
}

export default App;
