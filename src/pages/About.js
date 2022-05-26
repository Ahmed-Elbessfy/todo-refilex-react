import React from "react";
import Header from "../components/Header";

const About = () => {
  // style variables
  const liStyle = {
    display: "list-item",
    minHeight: "auto",
    listStyle: "decimal",
  };
  return (
    <>
      <Header />
      <main className="App">
        <section>
          <h1 style={{ marginBottom: "1rem" }}>TODO application</h1>
          <p>This is a todo application as a part of hiring process</p>
          <h2 style={{ textAlign: "left", margin: "2rem 0 1rem" }}>
            Features you can find:
          </h2>
          <ol>
            <li style={liStyle}>Add, edit and delete tasks</li>
            <li style={liStyle}>
              You can move tasks from Todo to in progress and vice verse but
              once task is done it can't be moved
            </li>
            <li style={liStyle}>You can move tasks by drag and drop</li>
            <li style={liStyle}>Store your tasks in local storage</li>
          </ol>
        </section>
      </main>
    </>
  );
};

export default About;
