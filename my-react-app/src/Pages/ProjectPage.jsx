import { useState } from "react";
import "../styles/ProjectPage.css";
import BtnShowProject from "../Components/BtnShowProject.jsx";
import PopupProject from "../Components/PopupProject.jsx";
import Projects from "../Components/Projects.jsx";
import screenshot1 from "../assets/screenshot1.png";
import screenshot2 from "../assets/screenshot2.png";

function ProjectPage() {
  const [showProjects, setShowProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const handleToggle = () => {
    setShowProjects((prev) => !prev);
  };

  return (
    <div className="project-page">
      <BtnShowProject isVisible={showProjects} onClick={handleToggle} />
      <h1>Projects</h1>

      {showProjects && (
        <>
          <div
            onClick={() =>
              setSelectedProject({
                name: "Guess Number Game",
                screenshot: screenshot1,
                github: "https://github.com/Hasoni7/JS_Assignment-4.git",
                tech: "HTML, Javascript",
                description: `This project simulates an ATM interface where users can check their balance, 
                  make deposits, withdraw funds, and more. It validates inputs, ensures users can’t withdraw 
                  more than they have, and handles errors like a pro. I learned how to use loops, conditionals, 
                  and objects to build real-life functionality.`,
              })
            }
          >
            <Projects
              name="Guess Number Game"
              screenshot={screenshot1}
              github="https://github.com/Hasoni7/JS_Assignment-4.git"
              tech="HTML, Javascript"
              description="The Guess the Number game is a console-based game..."
            />
          </div>

          <div
            onClick={() =>
              setSelectedProject({
                name: "ATM Program",
                screenshot: screenshot2,
                github: "https://github.com/Hasoni7/JS_Assignment-5.git",
                tech: "HTML, Javascript",
                description: `The ATM program simulates an ATM interface where users can check their balance, 
                  make deposits and withdrawals, and get their account holder name. It allows multiple transactions 
                  and ensures that inputs are valid, handling errors like insufficient funds and invalid amounts.
                  
                  I learned how to structure JavaScript code using objects and functions, and how to manage user input 
                  and validation. The key challenge was implementing error handling and ensuring the program runs 
                  smoothly through multiple transactions.`,
              })
            }
          >
            <Projects
              name="ATM Program"
              screenshot={screenshot2}
              github="https://github.com/Hasoni7/JS_Assignment-5.git"
              tech="HTML, Javascript"
              description="The ATM program simulates an ATM interface where users..."
            />
          </div>
        </>
      )}

      {selectedProject && (
        <PopupProject
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default ProjectPage;
