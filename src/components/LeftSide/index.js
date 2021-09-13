import React from "react";
import Parallax from "react-rellax";
import "./leftside.scss";

const LeftSide = ({ isDarkModeActive, switchModes }) => {
  return (
    <div className="leftSide">
      <Parallax speed={7}>
        <h1 className="homeTitle">Hey, I'm Ecem.</h1>
      </Parallax>
      <Parallax speed={7}>
        <p className="homeText">(pronounced eh-jem)</p>
      </Parallax>
      <Parallax speed={5}>
        <p className="homeText">I'm a frontend developer.</p>
      </Parallax>
      <Parallax speed={3}>
        <p className="homeText">
          Here's the part where I should put something witty - but I got
          nothing.
        </p>
      </Parallax>
      <Parallax speed={1}>
        <p className="tech">
          REACT // NEXT.JS // HTML // CSS // JAVASCRIPT // NODE.JS
        </p>
      </Parallax>
      <div className="homeBtnLayout">
        <button
          className="homeBtn"
          onClick={(e) => {
            window.location = `mailto:ecem.n.ozturk@gmail.com`;
            e.preventDefault();
          }}
        >
          Email
        </button>
        <button
          className={isDarkModeActive ? "darkToggleBtn" : "toggleBtn"}
          onClick={() => switchModes()}
        >
          {isDarkModeActive ? "It's too dark" : "Turn off the lights"}
        </button>
      </div>
    </div>
  );
};

export default LeftSide;
