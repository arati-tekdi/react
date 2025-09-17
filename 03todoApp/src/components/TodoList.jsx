import TodoItem from "./TodoItem";
import styles from "./TodoItem.module.css";
export default function TodoList({ todos, setTodos }) {
  return todos.map((todo, index) => (
    <div key={index}>
      <TodoItem item={todo} todos={todos} setTodos={setTodos} />
    </div>
  ));
}
