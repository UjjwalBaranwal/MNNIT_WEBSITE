import React from "react";
import "./CarItem.css";

function CarItem({ item }) {
  return (
    <div className="car-item">
      <img src={item.image} alt={item.name} className="car-item-image" />
      <div className="car-item-details">
        <h3>{item.name}</h3>
      </div>
    </div>
  );
}

export default CarItem;
