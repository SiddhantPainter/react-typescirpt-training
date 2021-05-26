import React from "react";
import { Todo } from "./details";
import "./TodoList.css";
interface TodoListprops {
  todo: Todo;
  toggleTodo: 
}

export const TodoList: React.FC<TodoListprops> = ({ todo }) => {
  return (
    <div>
      <li className={todo.complete ? "complete" : undefined}>
        <input type="checkbox" checked={todo.complete}></input>
        {todo.task}
      </li>
    </div>
  );
};
