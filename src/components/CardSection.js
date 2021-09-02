import React from "react";
import Card from "./Card";
import "./CardSection.css";

function CardSection() {
  return (
    <div className="cards">
      <h1>Check out this EPIC DESTINATIONS!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Card
              label="Adventure"
              src="\images\img-9.jpg"
              text="Explore the hidden waterfall inside the Amazon Jungle"
              path="/services"
            />
            <Card
              src="images/img-2.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <Card
              src="images/img-3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <Card
              src="images/img-4.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <Card
              src="images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardSection;
