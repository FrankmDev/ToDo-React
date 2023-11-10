import "./CloseTask.css";
import { IoClose } from "react-icons/io5";

const CloseTask = () => {
  return (
    <button className="closeBtn">
      <IoClose className="closeIcon" />
    </button>
  );
};

export default CloseTask;
