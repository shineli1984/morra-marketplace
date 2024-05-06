import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// Import Bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css";
// Import Bootstrap JavaScript (optional, only if you need Bootstrap JS features like dropdowns, modals, etc.)
import "bootstrap/dist/js/bootstrap.bundle.min.js";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
