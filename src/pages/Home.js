import React from "react";
import AddTask from "../components/AddTask";
import Header from "../components/Header";
import Tasks from "../components/Tasks";

const Home = () => {
  return (
    <>
      <Header />
      <main className="App">
        {/* add new task form  */}
        <AddTask />
        <Tasks />
      </main>
    </>
  );
};

export default Home;
