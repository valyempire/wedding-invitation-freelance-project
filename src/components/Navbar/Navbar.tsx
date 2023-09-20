import { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      <Link to="/" className="title">
        Invitatie la nunta
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/" exact onClick={closeMenu}>
            Acasa
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" exact onClick={closeMenu}>
            Noi doi
          </NavLink>
        </li>
        <li>
          <NavLink to="/event" exact onClick={closeMenu}>
            Eveniment
          </NavLink>
        </li>

        <li>
          <NavLink to="/confirmation" exact onClick={closeMenu}>
            Confirmare
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
