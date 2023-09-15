import { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        Website
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Acasa</NavLink>
        </li>
        <li>
          <NavLink to="/about">Noi doi</NavLink>
        </li>
        <li>
          <NavLink to="/event">Eveniment</NavLink>
        </li>
        <li>
          <NavLink to="/location">Unde si cand ?</NavLink>
        </li>
        <li>
          <NavLink to="/confirmation">Confirmare</NavLink>
        </li>
      </ul>
    </nav>
  );
};
