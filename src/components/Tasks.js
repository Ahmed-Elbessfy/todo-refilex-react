import React, { useContext } from "react";
import { AppContext } from "../context/TasksContext";
import { TaskItem } from "./TaskItem";

const Tasks = () => {
  // import tasks list
  const { tasks, movingTask, updateTasksAfterDrag } = useContext(AppContext);
  // filter tasks depending on status
  const todoList = [...tasks].filter((task) => task.status === "todo");
  const inProgressList = [...tasks].filter(
    (task) => task.status === "inProgress"
  );
  const doneList = [...tasks].filter((task) => task.status === "done");

  //  modify moving task status to match the dropped in list
  const modifyMovingTaskState = (e, status) => {
    e.preventDefault();
    // update status of the task
    movingTask.status = status;
    // dispatch changes to update tasks list at the main state
    updateTasksAfterDrag(movingTask.id);
  };

  return (
    <section className="tasks-container">
      <ul
        className="todo-list"
        onDrop={(e) => modifyMovingTaskState(e, "todo")}
        onDragOver={(e) => e.preventDefault()}
      >
        <h2>Todo Tasks</h2>
        {/* todo task can be moved to in progress or done tasks  */}
        {todoList.map((task) => (
          <TaskItem task={task} key={task.id} allowDrag="true" />
        ))}
      </ul>
      <ul
        className="inProgress-list"
        onDrop={(e) => modifyMovingTaskState(e, "inProgress")}
        onDragOver={(e) => e.preventDefault()}
      >
        {/* in progress task can be moved to todo or done tasks  */}
        <h2>In Progress Tasks</h2>
        {inProgressList.map((task) => (
          <TaskItem task={task} key={task.id} allowDrag="true" />
        ))}
      </ul>
      <ul
        className="done-list"
        onDrop={(e) => modifyMovingTaskState(e, "done")}
        onDragOver={(e) => e.preventDefault()}
      >
        <h2>Done Tasks</h2>
        {/* done task can not be moved  */}
        {doneList.map((task) => (
          <TaskItem task={task} key={task.id} />
        ))}
      </ul>
    </section>
  );
};

export default Tasks;
