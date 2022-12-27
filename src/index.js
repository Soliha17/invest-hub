import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";

import Home from "../src/pages/home/Index";
import News from "../src/pages/news/Index";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <News/>
    </BrowserRouter>
  </React.StrictMode>
);
