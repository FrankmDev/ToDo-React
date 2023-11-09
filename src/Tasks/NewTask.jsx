import { IoClose } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";

import "./NewTask.css";
const NewTask = ({ title, description }) => {
  return (
    <section className="newTask-section">
      <div className="task">
        <div className="task-text">
          <h3 className="task-title">{title}</h3>
          <p className="task-description">{description}</p>
        </div>
        <FaReact className="reactIcon" />
      </div>
      <button className="closeBtn">
        <IoClose className="closeIcon" />
      </button>
    </section>
  );
};

export default NewTask;
