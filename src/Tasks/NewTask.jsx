import { IoClose } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";

import "./NewTask.css";
const NewTask = () => {
  return (
    <section className="newTask-section">
      <div className="task">
        <div className="task-text">
          <h3 className="task-title">Futbol</h3>
          <p className="task-description">Play Futbol with my fck parents</p>
        </div>
        <FaReact className="react-icon" />
      </div>
      <button className="closeBtn">
        <IoClose className="closeIcon" />
      </button>
    </section>
  );
};

export default NewTask;
