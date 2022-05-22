import { createContext, useReducer } from "react";
import App from "../App";

// initial state
const appState = {
  tasks: [
    {
      id: 1,
      title: "code",
      description: "do refilex task for Todo application",
      status: "todo",
    },
    {
      id: 2,
      title: "solve",
      description: "solve Leetcode problem ",
      status: "todo",
    },
    {
      id: 3,
      title: "train",
      description: "go to train",
      status: "todo",
    },

    /************** In Progress Tasks ************/

    {
      id: 4,
      title: "code in progress",
      description: "do refilex task for Todo application",
      status: "inProgress",
    },
    {
      id: 5,
      title: "solve in progress",
      description: "solve Leetcode problem ",
      status: "inProgress",
    },
    {
      id: 6,
      title: "train in progress",
      description: "go to train",
      status: "inProgress",
    },

    /************** Done Tasks ************/

    {
      id: 7,
      title: "code done",
      description: "do refilex task for Todo application",
      status: "done",
    },
    {
      id: 8,
      title: "solve done",
      description: "solve Leetcode problem ",
      status: "done",
    },
    {
      id: 9,
      title: "train done",
      description: "go to train",
      status: "done",
    },
  ],
};

// reducer to determine actions and mutations for the state
const appReducer = (state, action) => {
  switch (action.type) {
  }
};

// export context
export const AppContext = createContext(appState);

// export provider to provide accessibility for the context
export const AppProvider = ({ children }) => {
  // initiate state as an AppProvider state
  const [state, dispatch] = useReducer(appReducer, appState);
  return (
    <AppContext.Provider
      value={{
        tasks: state.tasks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
