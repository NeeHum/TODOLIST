import TodoItem from "./TodoItem";
import React from "react";

export default function Todo({ todos, onMarkComplete, onDeleteItem }) {
  return (
    <div className="items">
      {todos.map((item, index) => (
        <TodoItem
          key={`todo-${index}`}
          todo={item}
          onMarkComplete={onMarkComplete}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </div>
  );
}
