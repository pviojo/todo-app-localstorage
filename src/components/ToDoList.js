import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ todoList }) => {
  return (
    <div>
      <ul>
        {todoList.map((item) => {
          return <ToDoItem key={item.id} todos={item} />;
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
