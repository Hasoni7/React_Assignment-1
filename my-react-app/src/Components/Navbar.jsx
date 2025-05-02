import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul style={{ display: "flex", gap: "1rem" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/ProjectPage">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
