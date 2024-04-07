import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleCheckbox, deleteTodo }) {
  return (
    <ul className="list">
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleCheckbox={toggleCheckbox}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
