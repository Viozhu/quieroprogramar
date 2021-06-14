import React from "react";
import "./App.css";
import Nav from "./Nav";

export default function App() {
  return (
    <div className="container">
      <Nav />
      <div className="waves">
        <div className="wave circulo a"></div>
        <div className="wave circulo b"></div>
        <div className="wave circulo c"></div>
      </div>
    </div>
  );
}
