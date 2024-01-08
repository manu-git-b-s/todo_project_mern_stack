import "./Navbar.css";
import { GiWhiteBook } from "react-icons/gi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authActions } from "../../store";
import { useDispatch } from "react-redux";

const Navbar = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isLoggedIn = useSelector((state: any) => state.isLoggedIn);
  console.log(isLoggedIn);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    sessionStorage.clear();
    dispatch(authActions.logout());
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <GiWhiteBook /> &nbsp;
            <b>TODO</b>
          </Link>
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/todo">
                  Todo
                </Link>
              </li>
              {!isLoggedIn && (
                <>
                  <li className="nav-item mx-2">
                    <Link className="nav-link active btn-nav" aria-current="page" to="/register">
                      Sign Up
                    </Link>
                  </li>
                  <li className="nav-item mx-2">
                    <Link className="nav-link active btn-nav" aria-current="page" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
              {isLoggedIn && (
                <li className="nav-item mx-2" onClick={logoutHandler}>
                  <Link className="nav-link active btn-nav" aria-current="page" to="/">
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
