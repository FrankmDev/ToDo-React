/* eslint-disable no-unused-vars */
import "../Input/Input.css";
import { IoAddOutline } from "react-icons/io5";
import { List } from "../data";
import { useState } from "react";

const Input = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const titleHandler = (event) => {
    setTitle(event.target.value);
    List.add(title);
    console.log(List);
  };
  const descriptionHandler = (event) => {
    setDescription(event.target.value);
    List.add(description);
    console.log(List);
  };

  return (
    <div className="input-div">
      <form className="form__group field" onSubmit={title}>
        <input
          type="text"
          className="form__field"
          placeholder="Name"
          required=""
          value={title}
          onChange={titleHandler}
        />
        <label className="form__label">Add Task</label>
      </form>
      <button className="addBtn" type="submit">
        <IoAddOutline className="addIcon" />
      </button>
    </div>
  );
};

export default Input;
