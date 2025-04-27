import "../projects.css";

function Projects({ name, screenshot, github, tech, description }) {
  return (
    <div className="projects">
      <img
        src={screenshot}
        alt={`${name} Screenshot`}
        className="project-image"
      />
      <h2 className="project-title">{name}</h2>
      <p className="tech-used">Tech used: {tech}</p>
      <p className="project-description">{description}</p>
      <a href={github} className="github-link">
        GitHub Repository
      </a>
    </div>
  );
}

export default Projects;
