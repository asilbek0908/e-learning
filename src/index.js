import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
// React router dom
import { BrowserRouter } from "react-router-dom";

const root = document.getElementById("root");
const rootElement = createRoot(root);
rootElement.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
