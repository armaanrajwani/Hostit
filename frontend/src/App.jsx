import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import restaurants from "./data/restaurants";
import RestaurantCard from "./components/RestaurantCard";
import RestaurantDetails from "./pages/RestaurantDetails";

function HomePage() {
  const [search, setSearch] = useState("");

  const filteredRestaurants = restaurants.filter((restaurant) =>
    `${restaurant.name} ${restaurant.cuisine} ${restaurant.location}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">RESTAURANT RESERVATIONS</p>

          <h1>
            Find your
            <br />
            next table.
          </h1>

          <p>
            Delicious Meals, Delightful Deals!
          </p>

          <button
            className="hero-button"
            onClick={() =>
              document
                .getElementById("restaurants")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Restaurants
          </button>
        </div>
      </section>

      {/* RESTAURANTS SECTION */}
      <section
        id="restaurants"
        className="restaurants-section"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">DISCOVER</p>
            <h2>Restaurants near you</h2>
          </div>

          <p>
            Find a restaurant that fits your plans.
          </p>
        </div>

        {/* SEARCH */}
        <input
          className="search"
          type="text"
          placeholder="Search restaurants, cuisine or location..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        {/* RESTAURANT CARDS */}
        <div className="restaurant-grid">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))}
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <>
      {/* NAVIGATION */}
      <nav className="navbar">
        <div className="logo">hostit</div>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/#restaurants">Restaurants</a>
          <a href="#">Reservations</a>
          <a href="#">Profile</a>
        </div>
      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/restaurant/:id"
          element={<RestaurantDetails />}
        />
      </Routes>
    </>
  );
}

export default App;