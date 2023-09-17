import img1 from "../../assets/wedding_img1.jpg";

export const Home = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
      }}
    >
      <img
        src={img1}
        alt="Imagine de fundal"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "red",
          fontSize: "77px",
          zIndex: 1,
        }}
      >
        Stefan & Camelia
      </div>
    </div>
  );
};
