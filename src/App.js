import React, { useState } from "react";
import "./App.css";

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
    <div className="body centerItem">
      <h1 id="Heading" className="centerItem">
        To Do App
      </h1>
      <div className="centerItem">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onKeyDown={enterkeytap}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <br />
        <button onClick={addTodo} >Add</button>
        <ol className="list centerItem">
          {Todos.map((item, index) => {
            return (
              <div key={item.id} className="listItem">
                <li>{item.todo}</li>
                <button onClick={() => deleteTodo(item.id)} className="itembtn">Delete</button>
              </div>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
