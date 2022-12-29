import React from "react";
import { Outlet } from "react-router-dom";
import News from "../news/Index"
function Home() {
  return (
    <div>
      <News/>
    </div>
  );
}

export default Home;
