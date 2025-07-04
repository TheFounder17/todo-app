export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task-item">
      <label className="checkbox-wrapper">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span>{task.text}</span>
      </label>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(task.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}
