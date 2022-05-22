import { AppProvider } from "./context/TasksContext";

import "./App.css";
import Tasks from "./components/Tasks";

function App() {
  return (
    <AppProvider>
      <main className="App">
        <Tasks />
      </main>
    </AppProvider>
  );
}

export default App;
