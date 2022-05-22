import React, { useContext } from "react";
import { AppContext } from "../context/TasksContext";
import { TaskItem } from "./TaskItem";

const Tasks = () => {
  // import tasks list
  const { tasks } = useContext(AppContext);
  // filter tasks depending on status
  const todoList = [...tasks].filter((task) => task.status === "todo");
  const inProgressList = [...tasks].filter(
    (task) => task.status === "inProgress"
  );
  const doneList = [...tasks].filter((task) => task.status === "done");

  return (
    <section>
      <div className="todo-list">
        {todoList.map((task) => (
          <TaskItem task={task} key={task.id} />
        ))}
      </div>
      <div className="inProgress-list">
        {inProgressList.map((task) => (
          <TaskItem task={task} key={task.id} />
        ))}
      </div>
      <div className="done-list">
        {doneList.map((task) => (
          <TaskItem task={task} key={task.id} />
        ))}
      </div>
    </section>
  );
};

export default Tasks;
