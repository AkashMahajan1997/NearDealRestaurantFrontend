import { useState } from "react";
import "./App.css";
import NavBar from "./common/NavBar";
import Login from "./common/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./restaurant/home";
import SignUp from "./common/SignUp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
