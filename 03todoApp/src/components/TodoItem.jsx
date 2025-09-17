import styles from "./TodoItem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(name) {
    alert(`Delete ${item.name}`);
    todos = todos.filter((todo) => todo.name !== name);
    setTodos(todos);
  }
  function handleCheck(name) {
    const updatedTodos = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
  }
  const className = item.done ? styles.completed : "";
  return (
    <div>
      <div className={styles.item}>
        <span className={className} onClick={() => handleCheck(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item.name)}
            className={styles.deleteButton}
          >
            X
          </button>
        </span>
      </div>
    </div>
  );
}
