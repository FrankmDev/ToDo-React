import "./Input.css";
import { IoAddOutline } from "react-icons/io5";

const Input = () => {
  return (
    <div className="input-div">
      <div className="form__group field">
        <input
          type="input"
          className="form__field"
          placeholder="Name"
          required=""
        />
        <label className="form__label">Name</label>
      </div>
      <button className="addBtn">
        <IoAddOutline className="addIcon" />
      </button>
    </div>
  );
};

export default Input;
