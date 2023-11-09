import "../Input/Input.css";
import { IoAddOutline } from "react-icons/io5";

const Input = () => {
  return (
    <div className="input-div">
      <div className="form__group field">
        <input
          type="text"
          className="form__field"
          placeholder="Name"
          required=""
        />
        <label className="form__label">Add Task</label>
      </div>
      <button className="addBtn">
        <IoAddOutline className="addIcon" />
      </button>
    </div>
  );
};

export default Input;
