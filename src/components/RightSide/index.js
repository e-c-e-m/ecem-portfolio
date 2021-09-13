import React from "react";
import Parallax from "react-rellax";
import CartoonPortrait from "../../assets/images/anime2.png";
import "./rightside.scss";

const RightSide = () => {
  return (
    <div className="rightSide">
      <Parallax speed={-3}>
        <img src={CartoonPortrait} alt="illustration" className="mainImg" />
      </Parallax>
    </div>
  );
};

export default RightSide;
