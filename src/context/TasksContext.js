import { createContext, useReducer } from "react";

// initial state
const appState = {
  // tasks: [
  //   {
  //     id: 1,
  //     title: "code",
  //     description: "do refilex task for Todo application",
  //     status: "todo",
  //   },
  //   {
  //     id: 2,
  //     title: "solve",
  //     description: "solve Leetcode problem ",
  //     status: "todo",
  //   },
  //   {
  //     id: 3,
  //     title: "train",
  //     description: "go to train",
  //     status: "todo",
  //   },

  //   /************** In Progress Tasks ************/

  //   {
  //     id: 4,
  //     title: "code in progress",
  //     description: "do refilex task for Todo application",
  //     status: "inProgress",
  //   },
  //   {
  //     id: 5,
  //     title: "solve in progress",
  //     description: "solve Leetcode problem ",
  //     status: "inProgress",
  //   },
  //   {
  //     id: 6,
  //     title: "train in progress",
  //     description: "go to train",
  //     status: "inProgress",
  //   },

  //   /************** Done Tasks ************/

  //   {
  //     id: 7,
  //     title: "code done",
  //     description: "do refilex task for Todo application",
  //     status: "done",
  //   },
  //   {
  //     id: 8,
  //     title: "solve done",
  //     description: "solve Leetcode problem ",
  //     status: "done",
  //   },
  //   {
  //     id: 9,
  //     title: "train done",
  //     description: "go to train",
  //     status: "done",
  //   },
  // ],
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  movingTask: {},
};

// reducer to determine actions and mutations for the state
const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_TASK":
      localStorage.setItem(
        "tasks",
        JSON.stringify([...state.tasks, action.payload])
      );
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case "SET_MOVING_TASK":
      return {
        ...state,
        movingTask: action.payload,
      };

    case "UPDATE_TASKS_AFTER_DRAG":
      localStorage.setItem(
        "tasks",
        JSON.stringify([
          ...state.tasks.filter((task) => task.id !== action.payload),
          state.movingTask,
        ])
      );
      return {
        ...state,
        tasks: [
          ...state.tasks.filter((task) => task.id !== action.payload),
          state.movingTask,
        ],
      };

    case "UPDATE_TASKS_AFTER_EDIT":
      localStorage.setItem(
        "tasks",
        JSON.stringify([
          ...state.tasks.filter((task) => task.id !== action.payload.id),
          action.payload,
        ])
      );
      return {
        ...state,
        tasks: [
          ...state.tasks.filter((task) => task.id !== action.payload.id),
          action.payload,
        ],
      };

    default:
      return state;
  }
};

// export context
export const AppContext = createContext(appState);

// export provider to provide accessibility for the context
export const AppProvider = ({ children }) => {
  // initiate state as an AppProvider state
  const [state, dispatch] = useReducer(appReducer, appState);

  // add new task
  const addNewTask = (newTask) => {
    dispatch({ type: "ADD_NEW_TASK", payload: newTask });
  };

  // set moving task to get dragged task data to change its status
  const setMovingTask = (task) => {
    dispatch({ type: "SET_MOVING_TASK", payload: task });
  };

  // update tasks list with the new status of the moving task
  const updateTasksAfterDrag = (id) =>
    dispatch({ type: "UPDATE_TASKS_AFTER_DRAG", payload: id });

  // update tasks list with the new task of the editing task
  const updateTasksAfterEdit = (task) => {
    dispatch({ type: "UPDATE_TASKS_AFTER_EDIT", payload: task });
  };

  return (
    <AppContext.Provider
      value={{
        tasks: state.tasks,
        movingTask: state.movingTask,
        addNewTask,
        setMovingTask,
        updateTasksAfterDrag,
        updateTasksAfterEdit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
