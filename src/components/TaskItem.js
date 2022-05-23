import React, { useContext } from "react";
import { AppContext } from "../context/TasksContext";

export const TaskItem = ({ task, allowDrag, openEditTask }) => {
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
        <button onClick={activateEditTask}>edit</button>
        <button>delete</button>
      </div>
    </li>
  );
};
