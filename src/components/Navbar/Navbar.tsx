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
          <NavLink to="/" exact>
            Acasa
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" exact>
            Noi doi
          </NavLink>
        </li>
        <li>
          <NavLink to="/event" exact>
            Eveniment
          </NavLink>
        </li>
        <li>
          <NavLink to="/location" exact>
            Unde si cand ?
          </NavLink>
        </li>
        <li>
          <NavLink to="/confirmation" exact>
            Confirmare
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
