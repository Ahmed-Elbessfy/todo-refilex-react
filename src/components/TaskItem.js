import React from "react";

export const TaskItem = ({ task }) => {
  return (
    <li>
      <div className="task-content">
        <h3 className="task-title">{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <div className="task-actions">
        <button>edit</button>
        <button>delete</button>
      </div>
    </li>
  );
};
