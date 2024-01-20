import React, { useState, useEffect } from "react";

export default function Detail({ todo, onUpdateToDo }) {
  const [updatedTodo, setUpdatedTodo] = useState({
    id: todo.id,
    title: todo.title,
    description: todo.description,
    state: todo.state,
  });

  useEffect(() => {
    setUpdatedTodo({
      id: todo.id,
      title: todo.title,
      description: todo.description,
      state: todo.state,
    });
  }, [todo]);

  // i can you generic function for handling multiple input change
  //   const handleInputChange = (e) => {
  //     const { name, value } = e.target;
  //     setUpdatedTodo((prevTodo) => ({
  //       ...prevTodo,
  //       [name]: value,
  //     }));
  //   };

  const handleTitleChange = (e) => {
    const { value } = e.target;
    setUpdatedTodo({
      ...updatedTodo,
      title: value,
    });
  };

  const handleDescriptionChange = (e) => {
    const { value } = e.target;
    setUpdatedTodo({
      ...updatedTodo,
      description: value,
    });
  };

  const handleStateChange = (e) => {
    const { value } = e.target;
    setUpdatedTodo({
      ...updatedTodo,
      state: value,
    });
  };

  const handleSubmit = () => {
    if (updatedTodo.title.trim() === "") return;
    if (updatedTodo.description.trim() === "") return;

    onUpdateToDo(updatedTodo);
  };

  return (
    <div className={"detail"}>
      <h2>update item </h2>
      <div>
        <p className={"label"}>Title</p>
        <input
          type="text"
          className={"input"}
          value={updatedTodo.title}
          onChange={handleTitleChange}
          name="title"
        />
      </div>
      <div>
        <p className={"label"}>Description</p>
        <textarea
          cols="30"
          rows="2"
          className={"input"}
          value={updatedTodo.description}
          onChange={handleDescriptionChange}
          name="description"
        ></textarea>
      </div>
      <div>
        <select
          name="state"
          className={"detail-select"}
          value={updatedTodo.state}
          onChange={handleStateChange}
        >
          <option value="Completed">completed</option>
          <option value="Canceled">canceled</option>
          <option value="Progress">progress</option>
          <option value="New">new</option>
        </select>
      </div>

      <button className={"form-btn"} onClick={handleSubmit}>
        update
      </button>
    </div>
  );
}
