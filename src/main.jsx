import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.jsx";

// Find the <div id="root"> in index.html
const rootElement = document.getElementById("root");

// Tell React to render our App component inside that div
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
