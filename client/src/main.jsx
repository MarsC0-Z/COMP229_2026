import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
const root = createRoot(document.getElementById("root"));

// Mount the application in React StrictMode to surface development warnings.
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
