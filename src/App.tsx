import React, { useState } from "react";
import { TodoList } from "./toDoList";
import { Todo, ToggleToDo } from "./details";
import "./App.css";

const Firsttodos: Array<Todo> = [
  { task: "Review C# exercise", complete: true },
  { task: "React JS training", complete: false },
];

function App() {
  const [todos, setTodos] = useState(Firsttodos);
  const toggleToDo:ToggleTodo = toDoSelected => {
    const newToDos = todos.map((todo) => {
      if (todo === toDoSelected) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  return (
    <React.Fragment>
      <TodoList todo={todos[0]} toggleTodo={toggleTodo}></TodoList>
      <TodoList todo={todos[1]} toggleTodo={toggleTodo}></TodoList>
    </React.Fragment>
  );
}

export default App;
