import React from "react";
import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Header />
      <main className="App">
        <section>
          <h1>TODO application</h1>
          <p>This a todo application as a part of hiring process</p>
          <h2>Features you can find:</h2>
          <ol>
            <li>Add, edit and delete tasks</li>
            <li>
              You can move tasks from Todo to in progress and vice verse but
              once task is done it can't be moved
            </li>
            <li>You can move tasks by drag and drop</li>
            <li>Store your tasks in local storage</li>
          </ol>
        </section>
      </main>
    </>
  );
};

export default About;
