import { useState } from "react";
import "../styles/ProjectPage.css";
import BtnShowProject from "../Components/BtnShowProject.jsx";
import Projects from "../Components/Projects.jsx";
import screenshot1 from "../assets/screenshot1.png";
import screenshot2 from "../assets/screenshot2.png";

function ProjectPage() {
  const [showProjects, setShowProjects] = useState(false);

  const handleToggle = () => {
    setShowProjects((prev) => !prev);
  };

  return (
    <div className="project-page">
      <BtnShowProject isVisible={showProjects} onClick={handleToggle} />
      <h1>Projects</h1>
      {showProjects && (
        <>
          <Projects
            name="Guess Number Game"
            screenshot={screenshot1}
            github="https://github.com/Hasoni7/JS_Assignment-4.git"
            tech="HTML, Javascript"
            description="The Guess the Number game is a console-based game..."
          />
          <Projects
            name="ATM Program"
            screenshot={screenshot2}
            github="https://github.com/Hasoni7/JS_Assignment-5.git"
            tech="HTML, Javascript"
            description="The ATM program simulates an ATM interface..."
          />
        </>
      )}
    </div>
  );
}

export default ProjectPage;
