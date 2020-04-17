import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

// import SignIn from "./views/SignIn";
import Home from "./views/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

const App = () => (
  <Router>
    <Home />
  </Router>
);

export default App;