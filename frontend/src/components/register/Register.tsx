import HeadingComp from "./HeadingComp";
import "./Register.css";

const Register = () => {
  return (
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 column d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column w-100 p-5">
              <input className="p-2 my-3 input-sign-up" name="email" type="email" placeholder="Enter your email" />
              <input className="p-2 my-3 input-sign-up" name="username" type="text" placeholder="Enter your username" />
              <input
                className="p-2 my-3 input-sign-up"
                name="password"
                type="password"
                placeholder="Enter your password"
              />
              <button className="btn-signup p-2 my-2">Register</button>
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
