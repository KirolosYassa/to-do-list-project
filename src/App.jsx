import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./styles.css";

export default function App() {
  // const [todos, setTodos] = useState([]);
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");

    if (localValue === null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => localStorage.setItem("ITEMS", JSON.stringify(todos)));

  function addToDo(item) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: item, completed: false },
      ];
    });
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

  // console.log(todos);

  return (
    <>
      <TodoForm onSubmit={addToDo} />
      <h1 className="header">Todo List</h1>
      {todos.length === 0 && "No Todos"}
      <TodoList
        todos={todos}
        toggleCheckbox={toggleCheckbox}
        deleteTodo={deleteTodo}
      />
    </>
  );
}
