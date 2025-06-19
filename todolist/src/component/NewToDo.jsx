import React, { useState } from "react";

export default function NewToDo() {
  const [todo, settodo] = useState([]);
  const handletodo = () => {
    const todolist = document.getElementById("todolist").value;
    document.getElementById("todolist").value = "";
    settodo([...todo, todolist]);
  };
  const deletetod = (index) => {
    const updatedtodo = todo.filter((_,i)=>i !== index)
    settodo(updatedtodo)
  };
  return (
    <div>
      <input
        type="text"
        name="todo"
        id="todolist"
        placeholder="Enter your todo here"
        className="border-2 p-3 mx-4 my-5"
      />
      <button
        id="todo_1"
        onClick={handletodo}
        className="bg-blue-900 text-white p-3 rounded"
      >
        Submit
      </button>
      {todo && (
        <div>
          <div className="m-5 ">
              <h4 className="m-5">you'r todo's show here</h4>
            {todo.map((todo, index) => {
                return (<div key={index} className="flex justify-between items-center mb-2">
                    <span>{todo}</span>
            <button
              onClick={() => deletetod(index)}
              className="bg-blue-900 text-white p-3 rounded m-5"
            >
              Delete
            </button>
          </div>
               );
            })}
        </div>
    </div>
      )}
      </div>
  )
}