import { useState, useEffect } from "react";
import "./App.scss";
import CartoonPortrait from "./assets/images/anime2.png";
import Parallax from "react-rellax";
import Project from "./components/Project";

function App() {
  const [scroll, setScroll] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <>
      <div className="app">
        <div className="leftSide">
          <Parallax speed={7}>
            <h1 className="homeTitle">Hey, I'm Ecem.</h1>
          </Parallax>
          <Parallax speed={5}>
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
            <p className={scroll ? "techActive" : "tech"}>
              REACT // NEXT.JS // HTML // CSS // JAVASCRIPT // NODE.JS
            </p>
          </Parallax>
          <div className="homeBttnLayout">
            <button className="homeBttn">Email</button>
            <button className="homeBttn">CV</button>
          </div>
        </div>
        <div className="rightSide">
          <Parallax speed={-3}>
            <img src={CartoonPortrait} alt="illustration" className="mainImg" />
          </Parallax>
        </div>
      </div>
      <div className="portfolioSection">
        <h1>Projects</h1>
        <Project />
        <Project />
        <Project />
      </div>
      <div className="footer">
        <p>Copyright © 2021 | Made with ♡ by Ecem</p>
      </div>
    </>
  );
}

export default App;
