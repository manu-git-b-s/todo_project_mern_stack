import { useState } from "react";
import HeadingComp from "./HeadingComp";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";
// import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const submitHandler = async (e: React.MouseEvent) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/v1/login", inputs).then((response) => {
      sessionStorage.setItem("id", response.data.others._id);
      dispatch(authActions.login());
      navigate("/todo");
    });
  };

  return (
    <div>
      <div className="register">
        {/* <ToastContainer /> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-4 column d-none d-lg-flex justify-content-center align-items-center">
              <HeadingComp heading1={"Sign"} heading2={"In"} />
            </div>
            <div className="col-lg-8 column d-flex justify-content-center align-items-center">
              <div className="d-flex flex-column w-100 p-3">
                <input
                  className="p-2 my-3 input-sign-up"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={inputs.email}
                  onChange={changeHandler}
                />
                <input
                  className="p-2 my-3 input-sign-up"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={inputs.password}
                  onChange={changeHandler}
                />
                <button className="btn-signup p-2 my-2" onClick={submitHandler}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
