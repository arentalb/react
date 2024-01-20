import { useState } from "react";

export default function Form({ onAddNewToDo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handelFormSubmit = (e) => {
    e.preventDefault();
    if (title === "" || description === "") return;
    const newToDo = {
      id: Date.now(),
      title: title,
      description: description,
      state: "New",
    };
    onAddNewToDo(newToDo);
  };
  return (
    <form className={"form"} onSubmit={handelFormSubmit}>
      <h2>add new item </h2>
      <div>
        <p className={"label"}>Title</p>
        <input
          type="text"
          className={"input"}
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <p className={"label"}>Description</p>
        <textarea
          name=""
          id=""
          cols="30"
          rows="2"
          className={"input"}
          value={description}
          onChange={handleDescriptionChange}
        ></textarea>
      </div>
      <button className={"form-btn"}>add</button>
    </form>
  );
}
