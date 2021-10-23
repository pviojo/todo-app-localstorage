import React from "react";
import styles from "./index.module.css";
const ToDoItem = ({ item, onChange }) => {
  return (
    <div className={styles.item}>
      <input
        type="checkbox"
        checked={item.complete}
        defaultValue={item.complete}
        onChange={(e) => {
          onChange(e.target.checked);
        }}
      />
      {item.label}
    </div>
  );
};

export default ToDoItem;
