import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import data from "./data.json";

export const App = () => {
  const [todos, setTodos] = useState(data);

  

  const addTodo = (newTodo) => {
    console.log("newTodo", newTodo);
    let newItem = { id: new Date().getTime(), task: newTodo, completed: false };

    setTodos([...todos, newItem]);
  };

  const onDeleteItem = (id) => {
    setTodos([...todos].filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <TodoForm addTodo={addTodo} />
      <Todo
        todos={todos}        
        onDeleteItem={onDeleteItem}
      />
    </div>
  );
};

export default App;
