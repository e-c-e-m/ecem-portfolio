import React from "react";
import "./project.scss";

const Project = ({ name, code, live }) => {
  return (
    <div className="projectBox">
      <h1>{name}</h1>
      <div className="btnLayout">
        <button className="codeBtn" onClick={() => window.open(code, "_blank")}>
          Code
        </button>
        <button className="viewBtn" onClick={() => window.open(live, "_blank")}>
          View
        </button>
      </div>
    </div>
  );
};

export default Project;
