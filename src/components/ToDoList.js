import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, onChangeItem }) => {
  return (
    <div>
      <ul>
        {todos.map((item) => {
          return (
            <ToDoItem
              key={item.id}
              item={item}
              onChange={(value) => onChangeItem(item.id, value)}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
