import { useParams, Link } from "react-router-dom";
import restaurants from "../data/restaurants";

function RestaurantDetails() {
  const { id } = useParams();

  const restaurant = restaurants.find(
    (restaurant) => restaurant.id === Number(id)
  );

  if (!restaurant) {
    return (
      <div className="details-page">
        <h1>Restaurant not found</h1>

        <Link to="/">
          Back to restaurants
        </Link>
      </div>
    );
  }

  return (
    <main className="details-page">
      <Link className="back-link" to="/">
        ← Back to restaurants
      </Link>

      <section className="restaurant-details">
        <div className="details-image">
          <span>{restaurant.cuisine}</span>
        </div>

        <div className="details-content">
          <p className="eyebrow">HOSTIT RESTAURANT</p>

          <h1>{restaurant.name}</h1>

          <div className="details-rating">
            ★ {restaurant.rating}
          </div>

          <p className="details-info">
            {restaurant.cuisine} · {restaurant.price}
          </p>

          <p className="details-location">
            📍 {restaurant.location}
          </p>

          <div className="details-discount">
            {restaurant.discount}% OFF
          </div>

          <p className="details-description">
            Enjoy a great dining experience at {restaurant.name}.
            Reserve your table through Hostit and take advantage
            of available dining deals.
          </p>

          <button className="reserve-button">
            Reserve a Table
          </button>
        </div>
      </section>
    </main>
  );
}

export default RestaurantDetails;