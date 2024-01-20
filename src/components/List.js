import Todo from "./Todo";

export default function List({ todoList, onSelect }) {
  return (
    <ul className={"list"}>
      {todoList.map((todo) => (
        <Todo todo={todo} key={todo.id} onSelect={onSelect} />
      ))}
    </ul>
  );
}
