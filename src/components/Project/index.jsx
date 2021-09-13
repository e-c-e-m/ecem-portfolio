import React from "react";
import "./project.scss";

const Project = ({ name, code, live, technologies, desc }) => {
  return (
    <div className="projectBox">
      <h1 className="projectTitle">{name}</h1>
      <div className="btnLayout">
        <button className="codeBtn" onClick={() => window.open(code, "_blank")}>
          Code
        </button>
        <button className="viewBtn" onClick={() => window.open(live, "_blank")}>
          View
        </button>
      </div>
      <p className="technologiesText">{technologies}</p>
      <p className="descText">{desc}</p>
    </div>
  );
};

export default Project;
