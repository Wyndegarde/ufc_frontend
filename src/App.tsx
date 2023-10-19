import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, Statistics, Events, Models } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Models" element={<Models />} />
        {/* <HomePage /> */}
      </Routes>
    </Router>
  );
}

export default App;
