import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Navigation from "./Navbar";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navigation />
    <App />
  </React.StrictMode>
);
