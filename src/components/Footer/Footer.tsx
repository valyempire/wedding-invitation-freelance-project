import "./Footer.css"; // Importați fișierul CSS pentru stilizare
import img from "../../assets/wedding-logo.png";

export const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src={img} alt="Logo" />
      </div>
      <div className="text">
        <p>Stefan & Camelia</p>
        <p>29 Iulie 2024 – Galați, România</p>
      </div>
    </footer>
  );
};
