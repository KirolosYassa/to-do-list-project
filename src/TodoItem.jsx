export default function TodoItem({
  id,
  title,
  completed,
  toggleCheckbox,
  deleteTodo,
}) {
  return (
    <li>
      <label>
        <input
          checked={completed}
          type="checkbox"
          onChange={(e) => toggleCheckbox(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}
