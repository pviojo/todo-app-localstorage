import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import ToDoList from "./components/ToDoList";
import { v4 as uuidv4 } from "uuid";

import styles from "./index.module.css";

export default function App() {
  const [todo, setTodo] = useState([]);
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const LOCAL_STORAGE_KEY = "__todos";

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), label: todo, complete: false }];
    });
    setTodo("");
  };

  const onChangeItem = (id, complete) => {
    setTodos((prevTodos) => {
      return prevTodos.map((t) => (t.id === id ? { ...t, complete } : t));
    });
  };

  const pendingTodosStr = todos
    .map((t) => !t.complete && t.label)
    .filter((x) => !!x)
    .join("\n");
  const strWait = `
Lista de espera
***************

${pendingTodosStr}
`;

  return (
    <div className="App">
      <h1>Lista de espera</h1>
      <div className={styles.add}>
        <label>Agregar:</label>
        <input
          type="text"
          id="text"
          ref={inputRef}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={handleSubmit}>Agregar</button>
      </div>
      <div className={styles.cols}>
        <ToDoList todos={todos} onChangeItem={onChangeItem} />
        <textarea style={{ height: "10em", width: "100%" }} value={strWait} />
      </div>
    </div>
  );
}
