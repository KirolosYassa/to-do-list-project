import { useState } from "react";
import "./styles.css";

export default function App() {
  const [item, setItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: item, completed: false },
      ];
    });

    setItem("");
  }

  function toggleCheckbox(todoId, completed) {
    setTodos(() => {
      return todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(todoId) {
    setTodos((todos) => {
      return todos.filter((todo) => todo.id !== todoId);
    });
  }

  function handleChange(e) {
    setItem(e.target.value);
    console.log(item);
  }

  console.log(todos);

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={item}
            onChange={(e) => setItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      {todos.length === 0 && "No Todos"}
      <ul className="list">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  // checked={todo.completed}
                  type="checkbox"
                  onClick={(e) => toggleCheckbox(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
