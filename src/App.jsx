import React from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import { Route } from "react-router-dom";

export default function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route path="/" component={Nav} />
      </div>
    </React.Fragment>
  );
}
