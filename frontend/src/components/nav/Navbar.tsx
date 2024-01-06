import "./Navbar.css";
import { GiWhiteBook } from "react-icons/gi";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <GiWhiteBook /> &nbsp;
            <b>TODO</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#">
                  Todo
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active btn-nav" aria-current="page" href="#">
                  Sign Up
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active btn-nav" aria-current="page" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active btn-nav" aria-current="page" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
