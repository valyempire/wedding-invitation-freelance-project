import "./Event.css";
import img1 from "../../assets/church.jpeg";
import img2 from "../../assets/glasses.jpeg";

const urlChurch =
  "https://www.google.com/maps/place/Biserica+%E2%80%9EAdormirea+Maicii+Domnului%E2%80%9C+Piscu/@45.493666,27.7202013,17z/data=!3m1!4b1!4m6!3m5!1s0x40b6c11bc1e8c92d:0xf7a05cc4afff3e8!8m2!3d45.493666!4d27.7227762!16s%2Fg%2F11r_m6ltg6?entry=ttu";

export const Event: React.FC = () => {
  return (
    <div className="container">
      <h1>Unde și când?</h1>

      <div className="event-cards">
        <div className="event-card">
          <img src={img1} alt="Cununie Religioasă" className="event-image" />
          <h2>Cununia Religioasă</h2>
          <p>Biserica Înălțarea Domnului</p>
          <p>Galați, Strada Constructorilor</p>
          <p>Galați, România</p>
          <p>Sâmbătă, 29 Iulie 2024, 15:00</p>
          <a href={urlChurch} target="_blank" rel="noopener noreferrer">
            Vezi hartă
          </a>
        </div>

        <div className="event-card">
          <img src={img2} alt="Petrecere" className="event-image" />
          <h2>Petrecerea</h2>
          <p>Restaurant Evenimente Chariot D'or</p>
          <p>Municipiul Galați, Galați</p>
          <p>Galați, România</p>
          <p>Sâmbătă, 29 Iulie 2024, 20:00</p>
          <a href={urlChurch} target="_blank" rel="noopener noreferrer">
            Vezi hartă
          </a>
        </div>
      </div>
    </div>
  );
};
