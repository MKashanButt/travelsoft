import React from "react";
import Sidebar from "./components/Sidebar/Index";
import Topbar from "./components/Topbar/Index";

const Template = ({ content }) => {
  return (
    <>
      <div className="content">
        <Sidebar />
        <div className="sub-content">
          <Topbar />
          {content}
        </div>
      </div>
    </>
  );
};

export default Template;
