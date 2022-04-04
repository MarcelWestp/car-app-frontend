import Car from "../../models/Car";
import User from "../../models/User";
import Booking from "./booking/Booking";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

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
        <Typography component="h2" variant="h2">
          {car.make} {car.model} {car.year}
        </Typography>
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
              <Typography component="p" variant="body2">
                <KeyboardDoubleArrowRightIcon /> {car.details.hp} hp
              </Typography>
              <Typography component="p" variant="body2">
                <LocalGasStationIcon /> {car.details.fuelType}
              </Typography>
              <Typography component="p" variant="body2">
                <SensorDoorIcon /> {car.details.doors} doors
              </Typography>
              <Typography component="p" variant="body2">
                <EventSeatIcon /> {car.details.seats} seats
              </Typography>
              <Typography component="p" variant="body2">
                <MiscellaneousServicesIcon /> {car.details.transmission}
              </Typography>

            </Box>
            <Box sx={{}}>
              <Typography component="h3" variant="h3">
                Hosted by
              </Typography>
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
                  <Typography component="p" variant="body2">
                    {user.userName}
                  </Typography>
                  <Typography component="p" variant="body2">
                    {ratingSumUser.toFixed(1)} <StarIcon />
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{}}>
              <Typography component="h3" variant="h3">
                Description
              </Typography>
              <Typography component="p" variant="body2">
                {car.description}
              </Typography>
            </Box>
            <Box sx={{}}>
              <Typography component="h3" variant="h3">
                Features
              </Typography>
              <Box sx={{
                display: 'grid',
                gap: 3,
                gridTemplateColumns: 'repeat(2, 1fr)'
              }}>
                {car.features.map((feature) => <Typography component="p" variant="body2">
                  {feature}
                </Typography>)}
              </Box>
            </Box>
            <Box sx={{}}>
              <Typography component="h3" variant="h3">
                Guidelines
              </Typography>
              {car.guidelines.map((guidelines) => <Typography component="p" variant="body2">
                - {guidelines}
              </Typography>)}
            </Box>
            <Box sx={{}}>
              <Typography component="h3" variant="h3">
                Ratings and reviews
              </Typography>
              <Typography component="h4" variant="h4">
                {ratingSumCar.toFixed(1)} <StarIcon />
              </Typography>
              <Typography component="h5" variant="h5">
                ({car.ratings.length} Ratings)
              </Typography>
              {car.ratings.map((rating) =>
                <Box sx={{}}>
                  <Rating name="read-only" value={rating.rating} readOnly />
                  <Typography component="h6" variant="h6">
                    {rating.author}  <span style={{ fontStyle: "italic", color: "grey" }}>{rating.date}</span>
                  </Typography>
                  <Typography component="p" variant="body2">
                    {rating.text}
                  </Typography>
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
