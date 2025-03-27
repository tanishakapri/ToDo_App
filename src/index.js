

import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot
import Root from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
