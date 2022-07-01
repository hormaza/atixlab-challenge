import "./App.css";

import { NavLink, Route, Routes, useNavigate } from "react-router-dom";

import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Sheets from "./components/Sheets";

function App() {
  const navigate = useNavigate();

  function removeFiles() {
    localStorage.clear();
    alert("LocalStorage cleared.");
    navigate("/home");
  }
  return (
    <>
      <div className="App">
        <header>
          <h1>Welcome to ATIXLABS Challenge!</h1>
        </header>
        <main>
          <nav>
            <div className="nav-container">
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/images">Gallery</NavLink>
              <NavLink to="/sheets">Sheets</NavLink>
            </div>
          </nav>
          <div className="content">
            <Routes>
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/images" element={<Gallery />} />
              <Route exact path="/sheets" element={<Sheets />} />
            </Routes>
          </div>
          <button className="clearButton" onClick={removeFiles}>
            Click here to clear LocalStorage
          </button>
        </main>
        <footer>
          <p>
            This exercise was made by{" "}
            <a
              href="//www.matias.hormaza.com.ar"
              target="_blank"
              rel="noreferrer"
            >
              Matias Hormaza
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
