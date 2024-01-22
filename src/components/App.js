import Detail from "./Detail";
import List from "./List";
import Form from "./Form";
import { useState } from "react";
import Todo from "./Todo";

const obj = [
  {
    id: 1,
    title: "Go to the grocery store",
    description: "Buy fruits, vegetables, and other essentials.",
    state: "New",
  },
  {
    id: 2,
    title: "Finish coding assignment",
    description:
      "Complete the coding assignment for the web development course.",
    state: "Progress",
  },
  {
    id: 3,
    title: "Prepare presentation slides",
    description: "Create slides for the upcoming project presentation.",
    state: "New",
  },
  {
    id: 4,
    title: "Cancel subscription",
    description:
      "Cancel the subscription for the magazine that is no longer needed.",
    state: "Canceled",
  },
  {
    id: 5,
    title: "Read a book",
    description:
      "Start reading the new novel that was recommended by a friend.",
    state: "New",
  },
  {
    id: 6,
    title: "Complete workout routine",
    description: "Finish the daily exercise routine for physical fitness.",
    state: "Progress",
  },
  {
    id: 7,
    title: "Write blog post",
    description: "Create a blog post about the latest trends in technology.",
    state: "Completed",
  },
  {
    id: 8,
    title: "Cancel weekend plans",
    description:
      "Due to unforeseen circumstances, cancel the plans for the weekend getaway.",
    state: "Canceled",
  },
];

function App() {
  const [isFormOpen, setFormOpen] = useState(false);
  const [todoList, setTodoList] = useState(obj);
  const [selectedToDo, setSelectedToDo] = useState(null);

  const toggleForm = () => {
    setFormOpen(!isFormOpen);
    document.body.classList.toggle("form-open", !isFormOpen);
  };

  function handelAddNewToDo(todo) {
    toggleForm();
    setTodoList([...todoList, todo]);
  }
  function handelSelectToDo(todo) {
    setSelectedToDo(todo);
  }
  function handelUpdateToDo(updatedTodo) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === updatedTodo.id ? { ...updatedTodo } : todo,
      ),
    );
    setSelectedToDo(null);
  }
  function handelDelete(deleteTodo) {
    setTodoList(
      todoList.filter((todo) => {
        return todo.id !== deleteTodo.id;
      }),
    );
    setSelectedToDo(null);
  }
  return (
    <main className={"body"}>
      <section className={`section ${selectedToDo === null ? "one-col" : ""}`}>
        <List>
          {todoList.map((todo) => (
            <Todo
              todo={todo}
              key={todo.id}
              onSelect={handelSelectToDo}
              onDelete={handelDelete}
            />
          ))}
        </List>
        {selectedToDo === null ? null : (
          <Detail
            todo={selectedToDo}
            onUpdateToDo={handelUpdateToDo}
            key={selectedToDo.id}
          />
        )}
        {isFormOpen && (
          <>
            <div className="overlay" onClick={toggleForm}></div>
            <Form closeForm={toggleForm} onAddNewToDo={handelAddNewToDo} />
          </>
        )}
        <button className="form-btn btn" onClick={toggleForm}>
          Add New Item
        </button>
      </section>
    </main>
  );
}

export default App;
