import React, { useContext } from "react";
import { AppContext } from "../context/TasksContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export const TaskItem = ({ task, allowDrag, openEditTask }) => {
  // styles
  const delBtn = {
    color: "#bf0000",
    cursor: "pointer",
    marginBottom: "1.5rem",
  };
  const editBtn = {
    color: "#2c3e50",
    cursor: "pointer",
  };

  const { setMovingTask } = useContext(AppContext);
  // drag function
  const startDrag = (e, task) => {
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.effectAllowed = "move";
    // store task id to use at drop
    setMovingTask(task);
  };

  // emit Edit task function
  const activateEditTask = () => {
    // call open edit task form at parent component
    openEditTask(task);
  };

  return (
    <li
      draggable={allowDrag}
      onDragStart={(e) => startDrag(e, task)}
      style={{ cursor: allowDrag && "pointer" }}
    >
      <div className="task-content">
        <h3 className="task-title">{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <div className="task-actions">
        <FontAwesomeIcon icon={faXmark} style={delBtn} size="xl" />
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={activateEditTask}
          style={editBtn}
          size="lg"
        />
      </div>
    </li>
  );
};
