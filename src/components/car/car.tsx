import React from "react";
import { useParams } from "react-router-dom";
import Car from "../../models/Car";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import SensorDoorIcon from '@mui/icons-material/SensorDoor';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import StarIcon from '@mui/icons-material/Star';

const CarDetails = ({ car }: { car: Car }) => {
  const handleDragStart = (e: any) => e.preventDefault();

  const getImages = () =>
    car.images.map((img) => (
      <img
        src={img}
        alt={car.model}
        onDragStart={handleDragStart}
        role="presentation"
        style={{ width: "90%" }}
      />
    ));

  let ratingSum: number = car.ratings.map(rating => rating.rating).reduce((prev, curr) => prev + curr, 0) / car.ratings.length;

  return (
    <div style={{ marginLeft: "10%", width: '80%' }}>
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
      <div className="box">
        <Box sx={{
          display: 'grid',
          gap: 3,
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}>
          <Box>
            <Box sx={{}}>
              <p>{ratingSum.toFixed(1)} <StarIcon /></p>
            </Box>
            <Box sx={{
              display: 'grid',
              gap: 3,
              gridTemplateColumns: 'repeat(2, 1fr)'
            }}>
              <p><KeyboardDoubleArrowRightIcon /> {car.details.hp} hp</p>
              <p><LocalGasStationIcon /> {car.details.fueltype}</p>
              <p><SensorDoorIcon /> {car.details.doors} doors</p>
              <p><EventSeatIcon /> {car.details.seats} seats</p>
              <p><MiscellaneousServicesIcon /> {car.details.transmission}</p>
            </Box>
            <Box sx={{}}>
              <h3>Hosted by</h3>
              <p>{car.hostUserId}</p>
            </Box>
            <Box sx={{}}>
              <h3>Description</h3>
              <p>{car.description}</p>
            </Box>
            <Box sx={{}}>
              <h3>Features</h3>
              <Box sx={{
                display: 'grid',
                gap: 3,
                gridTemplateColumns: 'repeat(2, 1fr)'
              }}>
                {car.features.map((feature) => <p>{feature}</p>)}
              </Box>
            </Box>
            <Box sx={{}}>
              <h3>Guidelines</h3>
              {car.guidelines.map((guidelines) => <p>{guidelines}</p>)}
            </Box>
            <Box sx={{}}>
              <h3>Ratings and reviews</h3>
              <h4>{ratingSum.toFixed(1)} <StarIcon /></h4>
              <h5>({car.ratings.length} Ratings)</h5>
              {car.ratings.map((rating) => 
              <Box sx={{}}>
                <Rating name="read-only" value={rating.rating} readOnly />
                <h6>{rating.author}  <span style={{fontStyle: "italic", color: "grey"}}>{rating.date}</span></h6>
                <p>{rating.content}</p>
              </Box>)}
            </Box>
          </Box>
          <Box>
            Booking
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default CarDetails;
