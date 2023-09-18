import img1 from "../../assets/wedding_img1.jpg";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home-container">
      <div className="text-container">
        <div className="home-text">STEFAN & CAMELIA</div>
        <div className="home-date">20-06-2024</div>
      </div>
      <img src={img1} alt="Imagine de fundal" className="home-image" />
    </div>
  );
};
