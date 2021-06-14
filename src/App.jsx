import React from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Info from "./Components/Info/Info";
import { Route } from "react-router-dom";

export default function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Route path="/" component={Nav} />
        <Route exact path="/" component={Home} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </React.Fragment>
  );
}
