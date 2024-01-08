import { useState } from "react";
import HeadingComp from "./HeadingComp";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const [inputs, setInputs] = useState({ email: "", username: "", password: "" });
  const navigate = useNavigate();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const submitHandler = async (e: React.MouseEvent) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/v1/register", inputs).then((response) => {
      if (response.data.message === "User already exists") {
        toast.error(response.data.message);
      } else {
        toast.success(response.data.message);
        setInputs({ email: "", username: "", password: "" });
        navigate("/login");
      }
    });
  };

  return (
    <div className="register">
      <ToastContainer />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 column d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column w-100 p-5">
              <input
                className="p-2 my-3 input-sign-up"
                name="email"
                type="email"
                placeholder="Enter your email"
                onChange={changeHandler}
                value={inputs.email}
              />
              <input
                className="p-2 my-3 input-sign-up"
                name="username"
                type="text"
                placeholder="Enter your username"
                onChange={changeHandler}
                value={inputs.username}
              />
              <input
                className="p-2 my-3 input-sign-up"
                name="password"
                type="password"
                placeholder="Enter your password"
                onChange={changeHandler}
                value={inputs.password}
              />
              <button className="btn-signup p-2 my-2" onClick={submitHandler}>
                Register
              </button>
            </div>
          </div>
          <div className="col-lg-4 col-left column d-flex justify-content-center align-items-center">
            <HeadingComp heading1={"Sign"} heading2={"Up"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
