import React from "react";

import Navbar from "../../components/Navbar/Index";
import NewsFeed from "../../components/NewsFeed/Index";
import Sidebar from "../../components/Sidebar/Index";
import NewsMain from "../../components/NewsMain/Index";

function News() {
  return (
    <div>
      <Navbar />
      <div className="main">
        <Sidebar />
        <div className="main-full">
          <NewsFeed />
          <NewsMain />
        </div>
      </div>
    </div>
  );
}

export default News;
