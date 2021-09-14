import React from "react";
import Parallax from "react-rellax";
import Portrait from "../../assets/images/portrait.jpeg";
import "./rightside.scss";

const RightSide = () => {
  return (
    <div className="rightSide">
      <Parallax speed={-3}>
        <img src={Portrait} alt="illustration" className="mainImg" />
      </Parallax>
    </div>
  );
};

export default RightSide;
