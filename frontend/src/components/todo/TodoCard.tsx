import "./Todo.css";
import { AiFillDelete } from "react-icons/ai";
import { GrDocumentUpdate } from "react-icons/gr";

interface TodoCardProps {
  title: string;
  body: string;
  id: number;
  deleteFunc: (id: number) => void;
  displayPositionFunc: (postion: string) => void;
  toBeUpdate: (id: number) => void;
  updateId: number;
}

const TodoCard = ({ title, body, id, deleteFunc, displayPositionFunc, updateId, toBeUpdate }: TodoCardProps) => {
  return (
    <div className="todo-card p-3">
      <div>
        <h5>{title}</h5>
        <p className="todo-card-p">{body.split("", 77)}</p>
      </div>
      <div className="d-flex justify-content-around">
        <div
          className="card-icon-head px-2 py-1"
          onClick={() => {
            displayPositionFunc("block");
            toBeUpdate(updateId);
          }}
        >
          <GrDocumentUpdate className="card-icons" /> Update
        </div>
        <div
          className="card-icon-head px-2 py-1 text-danger"
          onClick={() => {
            deleteFunc(id);
          }}
        >
          <AiFillDelete className="card-icons del" /> Delete
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
