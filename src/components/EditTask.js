import React, { useContext, useState } from "react";
import { AppContext } from "../context/TasksContext";

const EditTask = ({ task, closeEditForm }) => {
  // style variables
  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  };

  const editFormStyle = {
    background: "#fff",
    position: "relative",
    borderRadius: "1rem",
  };

  // local state to keep control on form inputs and get updates
  const [localTitle, setLocalTitle] = useState(task.title);
  const [localDescription, setLocalDescription] = useState(task.description);

  //  get access to context
  const { updateTasksAfterEdit } = useContext(AppContext);

  // save input change to state
  const handleChangeTitle = (e) => setLocalTitle(e.target.value);
  const handleChangeDescription = (e) => setLocalDescription(e.target.value);

  //submit method
  const saveChanges = (e) => {
    // prevent default behavior of reload
    e.preventDefault();
    let newTask = { ...task, title: localTitle, description: localDescription };
    updateTasksAfterEdit(newTask);
    //close form dialog
    closeEditForm();
  };

  return (
    <div style={overlayStyle}>
      <form onSubmit={saveChanges} style={editFormStyle}>
        <h2>EditTask</h2>
        <button onClick={closeEditForm}>X</button>
        <label>
          <p>Title:</p>
          <input type="text" value={localTitle} onChange={handleChangeTitle} />
        </label>
        <label>
          <p>
            Description:
            <textarea
              value={localDescription}
              onChange={handleChangeDescription}
            ></textarea>
          </p>
        </label>
        <input type="submit" value="Save Changes" />
      </form>
    </div>
  );
};

export default EditTask;
