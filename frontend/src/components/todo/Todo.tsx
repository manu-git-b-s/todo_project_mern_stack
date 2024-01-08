import React, { useEffect, useState } from "react";
import "./Todo.css";
import TodoCard from "./TodoCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoUpdate from "./TodoUpdate";
import axios from "axios";

interface Todo {
  title: string;
  body: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let toUpdateArray: any = [];
const id = sessionStorage.getItem("id");
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const submitHandler = async () => {
    if (inputs.title === "" || inputs.body === "") {
      toast.error("Title or body should not be empty!");
    } else {
      if (id) {
        await axios
          .post("http://localhost:8080/api/v2/add-task", { title: inputs.title, body: inputs.body, id: id })
          .then((response) => {
            console.log(response);
          });
        setInputs({ title: "", body: "" });
        toast.success("Your task is added");
      } else {
        setArray([...Array, inputs]);
        setInputs({ title: "", body: "" });
        toast.error("Your task is not saved! Please Sign up");
      }
    }
  };

  useEffect(() => {
    if (id) {
      const fetch = async () => {
        await axios
          .get(`http://localhost:8080/api/v2/get-tasks/${id}`)
          .then((response) => setArray(response.data.list));
      };
      fetch();
    }
  }, [submitHandler]);

  const deleteHandler = async (cardId: number) => {
    if (id) {
      await axios.delete(`http://localhost:8080/api/v2/delete-task/${cardId}`, { data: { id: id } }).then(() => {
        toast.success("Task deleted successfully");
      });
    } else {
      toast.error("Please signup first");
    }
  };

  const displayHandler = (value: string) => {
    const todoDiv = document.getElementById("todo-update");
    if (todoDiv) {
      todoDiv.style.display = value;
    }
  };

  const updateHandler = (id: number) => {
    toUpdateArray = Array[id];
  };

  return (
    <>
      <div className="todo">
        <ToastContainer />
        <div className="todo-main container d-flex flex-column justify-content-center align-items-center my-4 ">
          <div className="d-flex flex-column todo-inputs-div w-100 p-1">
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
          <div className="w-lg-50 w-100 d-flex justify-content-end w-50 my-3">
            <button className="home-btn px-2 py-1" onClick={submitHandler}>
              Add
            </button>
          </div>
        </div>
        <div className="todo-body">
          <div className="container-fluid">
            <div className="row">
              {Array &&
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                Array.map((item: any, index: number) => (
                  <div className="col-lg-3 col-11  mx-3 mx-lg-5 my-2" key={index}>
                    <TodoCard
                      title={item.title}
                      body={item.body}
                      id={item._id}
                      deleteFunc={deleteHandler}
                      displayPositionFunc={displayHandler}
                      updateId={index}
                      toBeUpdate={updateHandler}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="todo-update" id="todo-update">
        <div className="container update">
          <TodoUpdate displayPositionFunc={displayHandler} updateObj={toUpdateArray} />
        </div>
      </div>
    </>
  );
};

export default Todo;
