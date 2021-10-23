import React from "react";

const ToDoItem = ({todos}) => {
  return (
    <div>
   {todos.name}
   <input type="checkbox" value={todos.complete} />
  </div>
  )
};

export default ToDoItem;
 