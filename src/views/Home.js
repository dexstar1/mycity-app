import React from "react";
// import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
// import "../App.css";
import Dashboard from "../components/dashboard";
import SignIn from "../views/SignIn";


class DefaultLayout extends React.Component {
  render() {
    return (
      <Dashboard/>
    );
  }
}

export default DefaultLayout;

