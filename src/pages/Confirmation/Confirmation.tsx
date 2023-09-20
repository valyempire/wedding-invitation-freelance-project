import { useState } from "react";
import "./Confirmation.css"; // Importă fișierul de stilizare CSS

export const Confirmation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    numPersons: "1",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://submit-form.com/your-form-id", {
        method: "POST",
        body: new URLSearchParams(formData),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (response.ok) {
        window.location.href = "https://yourdomain.co/thanks.html";
      } else {
        console.error("Eroare la trimiterea formularului");
      }
    } catch (error) {
      console.error("Eroare la trimiterea formularului", error);
    }
  };

  return (
    <div className="containerConfirmation">
      <form className="confirmation-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nume"
          required
        />

        <label htmlFor="numPersons">Număr de persoane:</label>
        <select
          id="numPersons"
          name="numPersons"
          value={formData.numPersons}
          onChange={handleSelectChange}
          required
        >
          <option value="1">1 persoană</option>
          <option value="2">2 persoane</option>
          <option value="3">3 persoane</option>
          <option value="3">4 persoane</option>
          <option value="3">5 persoane</option>
          <option value="3">6 persoane</option>
          <option value="3">7 persoane</option>
          <option value="3">8 persoane</option>
          <option value="3">9 persoane</option>
        </select>
        <input
          type="hidden"
          name="_next"
          value="https://yourdomain.co/thanks.html"
        />
        <button type="submit">Trimite</button>
      </form>
    </div>
  );
};
