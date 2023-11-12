/* eslint-disable no-unused-vars */
import "../Input/Input.css";
import { IoAddOutline } from "react-icons/io5";
import { List } from "../data";
import { useState } from "react";

const Input = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = (event) => {
    event.preventDefault();

    if (title.trim() !== "") {
      onAddTask({ title, description });

      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="input-div">
      <form className="form__group field" onSubmit={handleAddTask}>
        <input
          type="text"
          className="form__field"
          placeholder="Title"
          required=""
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="form__label">Add Task</label>
      </form>
      <button className="addBtn" type="submit" onClick={handleAddTask}>
        <IoAddOutline className="addIcon" />
      </button>
      {/* Puedes agregar un campo de descripción si es necesario */}
      {/* <textarea
        className="form__field"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      /> */}
    </div>
  );
};

export default Input;
