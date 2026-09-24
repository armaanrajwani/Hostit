import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Reservation() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "2",
    tablePreference: "Any table",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/payment");
  };

  return (
    <main className="reservation-page">
      <div className="reservation-container">
        <p className="eyebrow">HOSTIT RESERVATION</p>

        <h1>Reserve your table.</h1>

        <p className="reservation-intro">
          Choose your date, time, and party size.
        </p>

        <form
          className="reservation-form"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="date">Date</label>

            <input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">Time</label>

            <input
              id="time"
              name="time"
              type="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="guests">
              Number of guests
            </label>

            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
            >
              <option value="1">1 guest</option>
              <option value="2">2 guests</option>
              <option value="3">3 guests</option>
              <option value="4">4 guests</option>
              <option value="5">5 guests</option>
              <option value="6">6 guests</option>
              <option value="7">7 guests</option>
              <option value="8">8 guests</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="tablePreference">
              Table preference
            </label>

            <select
              id="tablePreference"
              name="tablePreference"
              value={formData.tablePreference}
              onChange={handleChange}
            >
              <option value="Any table">Any table</option>
              <option value="Window">Window</option>
              <option value="Indoor">Indoor</option>
              <option value="Outdoor">Outdoor</option>
              <option value="Private">Private</option>
            </select>
          </div>

          <div className="reservation-summary">
            <div>
              <span>Reservation</span>
              <strong>Restaurant table</strong>
            </div>

            <div>
              <span>Guests</span>
              <strong>{formData.guests}</strong>
            </div>

            <div>
              <span>Service fee</span>
              <strong>$2.99</strong>
            </div>
          </div>

          <button
            className="reservation-button"
            type="submit"
          >
            Continue to Payment
          </button>
        </form>
      </div>
    </main>
  );
}

export default Reservation;