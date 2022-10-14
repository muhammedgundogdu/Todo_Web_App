import React from "react";
import ToDoList from "./ToDoList";
import ContentFooter from "./ContentFooter";
function Content() {
  return (
    <>
      <section className="main">
        <ToDoList />
      </section>
      <ContentFooter />
    </>
  );
}

export default Content;
