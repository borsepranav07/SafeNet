import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Safe<span>Net</span>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/social-media">Social Media</Link>
        <Link to="/mobile-safety">Mobile Safety</Link>
        <Link to="/scams">Scams</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;