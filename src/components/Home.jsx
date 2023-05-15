import React from "react";

export default function Home({ Todos, setTask, task, addTodo, deleteTodo, enterkeytap}) {
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
        <button onClick={addTodo}>Add</button>
        <ol className="list centerItem">
          {Todos.map((item, index) => {
            return (
              <div key={item.id} className="listItem">
                <li>{item.todo}</li>
                <button onClick={() => deleteTodo(item.id)} className="itembtn">
                  Delete
                </button>
              </div>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
