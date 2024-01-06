import "./Home.css";
const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container d-flex flex-column  justify-content-center align-items-center">
        <h1 className="text-center">
          Organize your <br /> work and life, finally
        </h1>
        <p>
          Become focused, organized, and calm with <br />
          todo app. The World's #1 task manager app.
        </p>
        <button className="home-btn p-2">Make todo list</button>
      </div>
    </div>
  );
};

export default Home;
