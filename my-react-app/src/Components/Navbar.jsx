import { Link, useLocation } from "react-router-dom";
import { FaHome, FaInfoCircle, FaProjectDiagram } from "react-icons/fa";
import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-logo">MyPortfolio</div>
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
          onClick={() => setIsOpen(false)}
        >
          <FaHome /> Home
        </Link>
        <Link
          to="/About"
          className={location.pathname === "/About" ? "active" : ""}
          onClick={() => setIsOpen(false)}
        >
          <FaInfoCircle /> About
        </Link>
        <Link
          to="/ProjectPage"
          className={location.pathname === "/ProjectPage" ? "active" : ""}
          onClick={() => setIsOpen(false)}
        >
          <FaProjectDiagram /> Projects
        </Link>
      </div>
      <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
