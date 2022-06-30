import "./App.css";

import { Link, Route, Routes } from "react-router-dom";

import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Sheets from "./components/Sheets";

function App() {
  return (
    <>
      <div className="App">
        <header>
          <h1>Welcome to ATIXLABS Challenge!</h1>
        </header>
        <main>
          <nav>
            <Link to="/home">Home</Link>
            <Link to="/images">Gallery</Link>
            <Link to="/sheets">Sheets</Link>
          </nav>
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/images" element={<Gallery />} />
            <Route exact path="/sheets" element={<Sheets />} />
          </Routes>
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
