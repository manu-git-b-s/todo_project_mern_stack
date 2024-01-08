import Home from "./components/home/Home";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/footer";
import About from "./components/about/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/register/Register";
import Login from "./components/register/Login";
import Todo from "./components/todo/Todo";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "./store/index";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const id: string | null = sessionStorage.getItem("id");
    if (id) {
      dispatch(authActions.login());
    }
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
