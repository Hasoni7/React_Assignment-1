function BtnShowProject({ isVisible, onClick }) {
  return (
    <button onClick={onClick} className="preview-button">
      {isVisible ? "Hide Projects" : "Show Projects"}
    </button>
  );
}

export default BtnShowProject;
