import React, { useState } from "react";
import "./Todo.css";
import TodoCard from "./TodoCard";

interface Todo {
  title: string;
  body: string;
}

const Todo = () => {
  const [inputs, setInputs] = useState<Todo>({ title: "", body: "" });
  const [Array, setArray] = useState<Todo[] | []>([]);
  const showHandler = () => {
    const textEl = document.getElementById("textarea");
    if (textEl) {
      textEl.style.display = "block";
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const submitHandler = () => {
    setArray([...Array, inputs]);
    setInputs({ title: "", body: "" });
  };

  return (
    <div className="todo">
      <div className="todo-main container d-flex flex-column justify-content-center align-items-center my-4 ">
        <div className="d-flex flex-column todo-inputs-div w-50 p-1">
          <input
            type="text"
            placeholder="TITLE"
            className="my-2 p-2 todo-inputs"
            onClick={showHandler}
            onChange={changeHandler}
            value={inputs.title}
            name="title"
          />
          <textarea
            id="textarea"
            placeholder="BODY"
            className="p-2 todo-inputs"
            onChange={changeHandler}
            value={inputs.body}
            name="body"
          />
        </div>
        <div className="d-flex justify-content-end w-50 my-3">
          <button className="home-btn px-2 py-1" onClick={submitHandler}>
            Add
          </button>
        </div>
      </div>
      <div className="todo-body">
        <div className="container-fluid">
          <div className="row">
            {Array &&
              Array.map((item: Todo) => (
                <div className="col-lg-3 col-10  mx-5 my-2">
                  <TodoCard title={item.title} body={item.body} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
