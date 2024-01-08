import axios from "axios";
import Todo from "./Todo";
import "./Todo.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface UpdateObj {
  body?: string;
  createdAt?: string;
  title?: string;
  updatedAt?: string;
  user?: string[];
  __v?: number;
  _id?: string;
}
interface TodoUpdateProps {
  displayPositionFunc: (postion: string) => void;
  updateObj: UpdateObj;
}

const TodoUpdate = ({ displayPositionFunc, updateObj }: TodoUpdateProps) => {
  const [inputs, setInputs] = useState<Todo>({ title: "", body: "" });
  useEffect(() => {
    setInputs({ title: updateObj.title!, body: updateObj.body! });
  }, [updateObj]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const submitHandler = async () => {
    await axios.put(`http://localhost:8080/api/v2/update-task/${updateObj._id}`, inputs).then((response) => {
      toast.success(response.data.message);
    });
    displayPositionFunc("none");
  };

  return (
    <div className="p-5 d-flex flex-column justify-content-center align-items-start update">
      <h3>Update your task</h3>
      <input
        type="text"
        className="todo-inputs my-4 w-100 p-3"
        value={updateObj.title}
        onChange={changeHandler}
        name="title"
      />
      <textarea className="todo-inputs w-100 p-3" value={updateObj.body} onChange={changeHandler} name="body" />
      <div>
        <button className="btn btn-dark my-4" onClick={submitHandler}>
          UPDATE
        </button>
        <button className="btn btn-danger my-4 mx-3" onClick={() => displayPositionFunc("none")}>
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default TodoUpdate;
