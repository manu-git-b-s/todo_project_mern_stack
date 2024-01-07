import "./Todo.css";
import { AiFillDelete } from "react-icons/ai";
import { GrDocumentUpdate } from "react-icons/gr";

interface TodoCardProps {
  title: string;
  body: string;
}

const TodoCard = ({ title, body }: TodoCardProps) => {
  return (
    <div className="todo-card p-3">
      <div>
        <h5>{title}</h5>
        <p className="todo-card-p">{body.split("", 77)}</p>
      </div>
      <div className="d-flex justify-content-around">
        <div className="card-icon-head px-2 py-1">
          <GrDocumentUpdate className="card-icons" /> Update
        </div>
        <div className="card-icon-head px-2 py-1 text-danger">
          <AiFillDelete className="card-icons del" /> Delete
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
