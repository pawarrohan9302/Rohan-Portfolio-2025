import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Homepage from "./HomePage";
import Aboutpage from "./Aboutpage";
import Projectpage from "./Projectpage";
import Contactpage from "./Contactpage";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/projects" element={<Projectpage />} />
          <Route path="/contact" element={<Contactpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
