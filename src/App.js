import { AppProvider } from "./context/TasksContext";

import "./App.css";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  return (
    <AppProvider>
      <main className="App">
        {/* add new task form  */}
        <AddTask />
        <Tasks />
      </main>
    </AppProvider>
  );
}

export default App;
