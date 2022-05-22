import React from "react";

export const TaskItem = ({ task }) => {
  return (
    <li>
      <div className="task-content">
        <p className="task-title">{task.title}</p>
        <p>{task.description}</p>
      </div>
      <div className="task-actions">
        <button>edit</button>
        <button>delete</button>
      </div>
    </li>
  );
};
