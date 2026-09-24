import { Link } from "react-router-dom";

function RestaurantCard({ restaurant }) {
  return (
    <div className="restaurant-card">
      <div className="restaurant-image">
        <span>{restaurant.cuisine}</span>
      </div>

      <div className="restaurant-content">
        <div className="restaurant-top">
          <h3>{restaurant.name}</h3>

          <span className="rating">
            ★ {restaurant.rating}
          </span>
        </div>

        <p>
          {restaurant.cuisine} · {restaurant.price}
        </p>

        <p className="location">
          📍 {restaurant.location}
        </p>

        <div className="restaurant-bottom">
          <span className="discount">
            {restaurant.discount}% OFF
          </span>

          <Link
            className="reserve-link"
            to={`/restaurant/${restaurant.id}`}
          >
            Reserve
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;