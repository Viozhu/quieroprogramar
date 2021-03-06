import React from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Info from "./Components/Info/Info.tsx";
import { Route } from "react-router-dom";
import Questions from "./Components/Questions/Questions.tsx";

export default function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Route path="/" component={Nav} />
        <Route exact path="/" component={Home} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/questions" component={Questions} />
      </div>
    </React.Fragment>
  );
}
