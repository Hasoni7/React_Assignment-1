import "../styles/PopupProject.css";

function PopupProject({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <h2>{project.name}</h2>
        <img
          src={project.screenshot}
          alt={project.name}
          style={{ width: "100%", borderRadius: "8px" }}
        />
        <p>
          <strong>Tech Used:</strong> {project.tech}
        </p>
        <p>{project.description}</p>
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          View Repo
        </a>
      </div>
    </div>
  );
}

export default PopupProject;
