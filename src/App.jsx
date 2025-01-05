import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header"; // Ensure the path is correct
import Homepage from "./HomePage"; // Ensure these paths are correct as well
import Aboutpage from "./Aboutpage";
import Projectpage from "./Projectpage";
import Contactpage from "./Contactpage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/projects" element={<Projectpage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
    </Router>
  );
}

export default App;
