import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import ProjectPage from "./ProjectPage";
import AboutPage from "./AboutPage";
import Contactpage from "./Contactpage";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/contact" element={<Contactpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
