import React from "react";
import { useState } from "react";

const Todos = () => {
  const [inputTask, setInputTask] = useState("");
  const [toDos, setToDos] = useState([
    { id: 1, name: "Learn React" },
    { id: 2, name: "Learn Next" },
    { id: 3, name: "Learn Material UI" },
  ]);
  const inputChangeHandler = (event) => {
    //event.preventDefault();
    setInputTask(event.target.value);
  };

  const addTodoHandler = () => {
    const newTodo = {
      id: Math.random(),
      name: inputTask,
    };
    setToDos([...toDos, newTodo]);
    setInputTask("");
  };
  const deleteTodoHandler = (id) => {
    const newTodo = toDos.filter((todo) => todo.id !== id);
    setToDos(newTodo);
  };
  // const submitHandler = (e) => {
  //   e.preventDefault();
  // };
  return (
    <div>
      <div>
        <form>
          <label>Enter a To do: </label>
          <input
            placeholder="Eg: Meeting with Francium"
            type="text"
            value={inputTask}
            onChange={inputChangeHandler}
          />
        </form>
        <button onClick={() => addTodoHandler(inputTask)}>Add To Do</button>
        {toDos.map((todo) => (
          <li key={todo.id}>
            {todo.name}
            <button onClick={() => deleteTodoHandler(todo.id)}>X</button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Todos;
