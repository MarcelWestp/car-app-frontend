import Car from "../../models/Car";
import User from "../../models/User";
import Booking from "./booking/booking";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Avatar from "@mui/material/Avatar";

import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import SensorDoorIcon from '@mui/icons-material/SensorDoor';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import StarIcon from '@mui/icons-material/Star';

const CarDetails = ({ car, user }: { car: Car, user: User }) => {
  const handleDragStart = (e: any) => e.preventDefault();

  let ratingSumCar: number = car.ratings.length === 0 ? 0 : (car.ratings.map(rating => rating.rating).reduce((prev, curr) => prev + curr, 0) / car.ratings.length);
  let ratingSumUser: number = user.ratings.length === 0 ? 0 : (user.ratings.map(rating => rating.rating).reduce((prev, curr) => prev + curr, 0) / user.ratings.length);

  const getImages = () =>
    car.images.map((img) => (
      <img
        src={`data:${img.contentType};base64,${img.content.data}`}
        alt={car.model}
        onDragStart={handleDragStart}
        role="presentation"
        style={{ width: "90%" }}
      />
    ));


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
        <h2>{car.make} {car.model} {car.year}</h2>
      </div>
      <div className="box">
        <Box sx={{
          display: 'grid',
          gap: 3,
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}>
          <Box>
            <Box sx={{}}>
              <p>{ratingSumCar.toFixed(1)} <StarIcon /></p>
            </Box>
            <Box sx={{
              display: 'grid',
              gap: 3,
              gridTemplateColumns: 'repeat(2, 1fr)'
            }}>
              <p><KeyboardDoubleArrowRightIcon /> {car.details.hp} hp</p>
              <p><LocalGasStationIcon /> {car.details.fuelType}</p>
              <p><SensorDoorIcon /> {car.details.doors} doors</p>
              <p><EventSeatIcon /> {car.details.seats} seats</p>
              <p><MiscellaneousServicesIcon /> {car.details.transmission}</p>
            </Box>
            <Box sx={{}}>
              <h3>Hosted by</h3>
              <Box sx={{
                display: 'grid',
                gap: 3,
                gridTemplateColumns: 'repeat(2, 1fr)'
              }}>
                <Avatar
                  alt={user.userName}
                  src={user.image.content.data}
                  sx={{ width: 64, height: 64 }}
                />
                <Box>
                <p>{user.userName}</p>
                <p>{ratingSumUser.toFixed(1)} <StarIcon /></p>
                </Box>
              </Box>
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
              {car.guidelines.map((guidelines) => <p>- {guidelines}</p>)}
            </Box>
            <Box sx={{}}>
              <h3>Ratings and reviews</h3>
              <h4>{ratingSumCar.toFixed(1)} <StarIcon /></h4>
              <h5>({car.ratings.length} Ratings)</h5>
              {car.ratings.map((rating) =>
                <Box sx={{}}>
                  <Rating name="read-only" value={rating.rating} readOnly />
                  <h6>{rating.author}  <span style={{ fontStyle: "italic", color: "grey" }}>{rating.date}</span></h6>
                  <p>{rating.text}</p>
                </Box>)}
            </Box>
          </Box>
          <Box>
            <Booking car={car} />
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default CarDetails;
