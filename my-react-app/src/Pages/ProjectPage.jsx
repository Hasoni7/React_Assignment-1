import { useState } from "react";
import "../styles/ProjectPage.css";
import BtnShowProject from "../Components/BtnShowProject.jsx";
import PopupProject from "../Components/PopupProject.jsx";
import Projects from "../Components/Projects.jsx";
import SearchBar from "../Components/SearchBar.jsx";
import screenshot1 from "../assets/screenshot1.png";
import screenshot2 from "../assets/screenshot2.png";

function ProjectPage() {
  const [showProjects, setShowProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const handleToggle = () => {
    setShowProjects((prev) => !prev);
  };

  const projectData = [
    {
      name: "Guess Number Game",
      screenshot: screenshot1,
      github: "https://github.com/Hasoni7/JS_Assignment-4.git",
      tech: "HTML, Javascript",
      description: `The Guess the Number game is a console-based
      game where players guess a number between 1 and 10. The 
      game gives feedback on whether the guess is too high, too 
      low, or correct.`,
    },
    {
      name: "ATM Program",
      screenshot: screenshot2,
      github: "https://github.com/Hasoni7/JS_Assignment-5.git",
      tech: "HTML, Javascript",
      description: `The ATM program simulates an ATM interface 
      where users can check their balance, 
      make deposits and withdrawals, and get their account holder
      name. It allows multiple transactions 
      and ensures that inputs are valid, handling errors like 
      insufficient funds and invalid amounts.
        
      I learned how to structure JavaScript code using objects 
      and functions, and how to manage user input 
      and validation. The key challenge was implementing error
      handling and ensuring the program runs smoothly through multiple transactions.`,
    },
  ];

  const filteredProjects = projectData.filter((project) => {
    const term = searchTerm.toLowerCase();
    return (
      project.name.toLowerCase().includes(term) ||
      project.tech.toLowerCase().includes(term)
    );
  });

  return (
    <div className="project-page">
      <BtnShowProject isVisible={showProjects} onClick={handleToggle} />
      <h1>Projects</h1>

      {showProjects && (
        <>
          <SearchBar searchTerm={searchTerm} onChange={setSearchTerm} />

          {filteredProjects.map((project, index) => (
            <div key={index} onClick={() => setSelectedProject(project)}>
              <Projects
                name={project.name}
                screenshot={project.screenshot}
                github={project.github}
                tech={project.tech}
                description={project.description.slice(0, 80) + "..."}
              />
            </div>
          ))}
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
