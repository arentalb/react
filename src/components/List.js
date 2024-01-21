import Todo from "./Todo";

export default function List({ todoList, onSelect, onDelete }) {
  return (
    <ul className={"list"}>
      {todoList.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          onSelect={onSelect}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
