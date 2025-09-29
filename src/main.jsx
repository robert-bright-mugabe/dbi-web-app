import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Add basename to BrowserRouter */}
    <BrowserRouter basename="/dbi-web-app">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
