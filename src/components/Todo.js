import { useState } from "react";

export default function Todo({ todo, onSelect, onDelete }) {
  function statusColor() {
    const statusMap = {
      Completed: "completed",
      Canceled: "canceled",
      Progress: "progress",
      New: "new",
    };
    return statusMap[todo.state] || "";
  }

  const [showen, setShowen] = useState(false);

  return (
    <li className={"todo"} onClick={() => setShowen(!showen)}>
      <div className={"todo-title"}>
        <h3>{todo.title}</h3>
        {todo.status === "Completed" && <div className={"status "}></div>}

        <div className={`status ${statusColor()}`}></div>
      </div>
      <div className={` ${showen ? "todo-desc" : "hidden"}`}>
        <p>{todo.description}</p>
        <button onClick={() => onSelect(todo)}>
          <img src="/icon/pencil.svg" alt="" className={"icon"} />
        </button>
        <button
          className={todo.state === "Canceled" ? "" : "hide-delete"}
          onClick={() => onDelete(todo)}
        >
          <img src="/icon/trash.svg" alt="" className={"icon"} />
        </button>
      </div>
    </li>
  );
}
