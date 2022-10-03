import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Yardsales from "./components/Yardsales";
import CreateYardsale from "./components/CreateYardsale";
import Login from "./components/Login";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/yardsales" element={<Yardsales />}></Route>
        <Route path="/createyardsale" element={<CreateYardsale />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
