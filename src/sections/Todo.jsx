import React from 'react';
import "./static/Todo.css"
const Todo = () => {
  return (
    <>
      <div class = "content" id = "todo-tab">
            <div class = "todo-frame">
                <input type="text" id = "task-input" placeholder="Enter a task: "/>
                <button id = "task-button" onclick="add_task()">Add</button>
                <p id="no_of_task">Number of tasks: <div id = "task-count" onchange="incrementTask()">0</div></p>
            </div> 

            <div class = "list-frame">
                <ul id = "todo-list"></ul>
            </div>
        
        </div>
    </>
  );
};

export default Todo;
