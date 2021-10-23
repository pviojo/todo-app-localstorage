import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import ToDoList from "./components/ToDoList";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [todo, setTodo] = useState([]);
  const inputRef = useRef();

  const LOCAL_STORAGE_KEY = "ajdin.kmetas";

  useEffect(() => {
    const storedTodo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodo) setTodo(storedTodo);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todo));
  }, [todo]);

  handleSubmit = () => {
    const name = inputRef.current.value;
    setTodo((prevTodo) => {
      return [...prevTodo, { id: uuidv4(), name: name, complete: false }];
    });
    inputRef.current.value = null;
  };

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <label>Todo:</label>
      <input
        type="text"
        id="text"
        ref={inputRef}
        // value={todo}
        // onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <ToDoList todoList={todo} />
    </div>
  );
}
