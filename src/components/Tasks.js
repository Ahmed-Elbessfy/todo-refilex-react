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
    <section class="tasks-container">
      <ul className="todo-list">
        <h2>Todo Tasks</h2>
        {todoList.map((task) => (
          <TaskItem task={task} key={task.id} />
        ))}
      </ul>
      <ul className="inProgress-list">
        <h2>In Progress Tasks</h2>
        {inProgressList.map((task) => (
          <TaskItem task={task} key={task.id} />
        ))}
      </ul>
      <ul className="done-list">
        <h2>Done Tasks</h2>
        {doneList.map((task) => (
          <TaskItem task={task} key={task.id} />
        ))}
      </ul>
    </section>
  );
};

export default Tasks;
