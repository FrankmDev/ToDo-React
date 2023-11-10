import { FaReact } from "react-icons/fa6";
import "./NewTask.css";
import CloseTask from "./CloseTask";

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
      <CloseTask />
    </section>
  );
};

export default NewTask;
