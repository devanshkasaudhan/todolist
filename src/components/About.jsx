import React from "react";

const About = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className=" col-6 md-col-11 m-4 back56 ">
        </div>
        <div className="col-6 md-col-11 m-4 abouttxt">
          <h2>About Todo List App</h2>
          <p>
            To build a to-do list project in React, I needed to use the useState
            hook to manage the state of the tasks and the input field. I also
            needed to create a form component that handles the submission of new
            tasks and a list component that displays the existing tasks. I used
            the map method to render each task as a list item. I also added a
            button to each task that allows me to delete it from the state
            array.
          </p>
          <h2>By Devansh Kasaudhan</h2>
          <p>
            I am a software developer with expertise in C++, JavaScript, and
            Python. As a highly skilled developer, I have experience working
            with a variety of programming languages and technologies. My
            expertise in C++ allows me to create efficient, high-performance
            software, while my proficiency in JavaScript and Python enables me
            to build user-friendly, interactive web applications.
          </p>
          <p>
            {" "}
            My understanding of software development methodologies and ability
            to work in a team environment make me a valuable asset to any
            project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
