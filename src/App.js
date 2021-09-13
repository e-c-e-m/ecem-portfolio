import { useState } from "react";
import "./App.scss";
import Project from "./components/Project";
import Data from "./assets/data/projects.json";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

function App() {
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);

  const switchModes = () => {
    if (isDarkModeActive === true) {
      setIsDarkModeActive(false);
    } else if (isDarkModeActive === false) {
      setIsDarkModeActive(true);
    }
  };

  return (
    <>
      <div className={isDarkModeActive ? "darkApp" : "app"}>
        <LeftSide
          isDarkModeActive={isDarkModeActive}
          switchModes={switchModes}
        />
        <RightSide />
      </div>
      <div
        className={
          isDarkModeActive ? "darkPortfolioSection" : "portfolioSection"
        }
      >
        <h1 className={isDarkModeActive ? "darkTitle" : "title"}>Projects</h1>
        {Data.projects.map((project) => (
          <Project
            name={project.name}
            code={project.code}
            live={project.live}
            technologies={project.technologies}
            desc={project.desc}
            isDarkModeActive={isDarkModeActive}
          />
        ))}
      </div>
      <div className="footer">
        <p>Copyright © 2021 | Made with ♡ by Ecem</p>
      </div>
    </>
  );
}

export default App;
