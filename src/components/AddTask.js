import React, { useContext, useState } from "react";
import { AppContext } from "../context/TasksContext";

const AddTask = () => {
  const { addNewTask } = useContext(AppContext);
  // state
  const [title, setTitle] = useState("");

  // functions
  const handleChangeTitle = (e) => setTitle(e.target.value);

  const addTask = (e) => {
    //prevent default behavior of reloading
    e.preventDefault();
    // initiate new task
    let newTask = {
      id: Math.floor(Math.random() * 10000),
      title,
      description: "",
      status: "todo",
    };
    // save new task to state context
    addNewTask(newTask);
    // empty field
    setTitle("");
  };

  return (
    <section>
      <form onSubmit={addTask}>
        <h2>Add New Task</h2>
        <label>
          <p>Title:</p>
          <input type="text" value={title} onChange={handleChangeTitle} />
        </label>
        <input type="submit" value="Add Task" />
      </form>
    </section>
  );
};

export default AddTask;
