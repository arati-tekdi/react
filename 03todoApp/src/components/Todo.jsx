import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  let completedTodos = todos.filter((todo) => todo.done).length;

  return (
    <div>
      <h3>completed Todo : {completedTodos}</h3>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
