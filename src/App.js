import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Nopage from "./components/Nopage";

let globalId = 0;

function App() {
  const [task, setTask] = useState("");
  const [Todos, setTodos] = useState([]);
  const addTodo = () => {
    setTodos((oldTodos) => {
      setTask("");
      return [...oldTodos, { todo: task, id: globalId++ }];
    });
  };
  const deleteTodo = (itemId) => {
    setTodos((oldTodos) => oldTodos.filter((item) => item.id !== itemId));
  };
  const enterkeytap = (e) => {
    if (e.keyCode === 13) {
      addTodo();
    }
  };
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              deleteTodo={deleteTodo}
              Todos={Todos}
              setTask={setTask}
              task={task}
              addTodo={addTodo}
              enterkeytap={enterkeytap}
            />
          }
        />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/:id" element={<Nopage/>} />
      </Routes>
    </Router>
  );
}

export default App;
