import React from "react";
import Sidebar from "./components/Sidebar/Index";
import Topbar from "./components/Topbar/Index";

const Template = ({ content }) => {
  return (
    <>
      <Topbar />
      <div className="content">
        <Sidebar />
        <div className="sub-content">{content}</div>
      </div>
    </>
  );
};

export default Template;
