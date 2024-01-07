import "./Todo.css";

interface TodoUpdateProps {
  displayPositionFunc: (postion: string) => void;
}

const TodoUpdate = ({ displayPositionFunc }: TodoUpdateProps) => {
  return (
    <div className="p-5 d-flex flex-column justify-content-center align-items-start update">
      <h3>Update your task</h3>
      <input type="text" className="todo-inputs my-4 w-100 p-3" />
      <textarea className="todo-inputs w-100 p-3" />
      <div>
        <button className="btn btn-dark my-4"> UPDATE</button>
        <button className="btn btn-danger my-4 mx-3" onClick={() => displayPositionFunc("none")}>
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default TodoUpdate;
