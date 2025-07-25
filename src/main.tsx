import React from "react";
import ReactDOM from "react-dom/client";
import { TodoProvider } from "./contexts/TodoContext";
import { Router } from "./router";
import "./index.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <TodoProvider>
      <Router />
    </TodoProvider>
  </React.StrictMode>
);
