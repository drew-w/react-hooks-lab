import React, { useState } from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import List from "./Components/List";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (item) => {
    const newTodo = [...todos, item];
    setTodos(newTodo);
  };
  return (
    <div className="App">
      <AddTodo addTodo={addTodo} />
      <List list={todos} />
    </div>
  );
}

export default App;
