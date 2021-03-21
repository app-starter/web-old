import React from "react";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { BaseRouter } from "./navigations";

function App() {
  return (
    <Router>
      <BaseRouter />
    </Router>
  );
}

export default App;
