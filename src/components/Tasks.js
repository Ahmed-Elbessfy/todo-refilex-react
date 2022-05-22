import React, { useContext } from "react";
import { AppContext } from "../context/TasksContext";

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
      <div className="todo-list"></div>
      <div className="inProgress-list"></div>
      <div className="done-list"></div>
    </section>
  );
};

export default Tasks;
