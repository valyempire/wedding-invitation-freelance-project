import "./About.css";
import img from "../../assets/wedding.webp";

export const About = () => {
  return (
    <div className="about-container">
      <img src={img} alt="Despre noi" />
      <h2>Despre noi</h2>
      <div className="quotes">
        <div className="quote">
          <p>
            Dintre toate lucrurile pe care le-aș putea spune despre mine, cel
            mai fidel mă descrie următorul: Sunt acasă.
          </p>
          <p>-Camelia</p>
        </div>
        <div className="quote">
          <p>
            Poate ar fi mai multe de spus, însă ce contează cu adevărat este că
            sunt fericit, iubesc și privesc cu entuziasm spre viitor.
          </p>
          <p>-Stefan</p>
        </div>
      </div>
    </div>
  );
};
