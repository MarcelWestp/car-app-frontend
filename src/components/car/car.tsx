import React from "react";
import { useParams } from "react-router-dom";
import Car from "../../models/Car";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const CarDetails = ({ car }: { car: Car }) => {
  const handleDragStart = (e: any) => e.preventDefault();

  const getImages = () =>
    car.images.map((img) => (
        <img
          src={img}
          alt={car.model}
          onDragStart={handleDragStart}
          role="presentation"
          style={{  width: "90%"}}
        />
    ));

  return (
    <div style={{  marginLeft: "10%", width: '80%' }}>
      <AliceCarousel
        mouseTracking
        items={getImages()}
        disableButtonsControls={true}
        disableDotsControls={true}
        infinite={true}
      />
      <div>
        <h2>{car.model}</h2>
      </div>
    </div>
  );
};

export default CarDetails;
