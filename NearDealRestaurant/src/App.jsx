import { useState } from "react";
import "./App.css";
import NavBar from "./common/NavBar";
import Login from "./common/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./restaurant/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
