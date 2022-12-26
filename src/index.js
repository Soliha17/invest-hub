import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Home from "../src/pages/home/Index";
import Navbar from "../src/components/Navbar/Index";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  </React.StrictMode>
);
