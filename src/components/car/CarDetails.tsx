import Car from "../../models/Car";
import User from "../../models/User";
import Booking from "./booking/Booking";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import theme from './../../AppTheme'
import { styled } from '@mui/material/styles';
import CarMap from './CarMap'

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
    car.images.map((img,index) => (
      <img
        src={`data:${img.contentType};base64,${img.content.data}`}
        alt={car.model}
        onDragStart={handleDragStart}
        role="presentation"
        style={{ width: "90%" }}
        key={index}
      />
    ));

  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: theme.palette.primary.main,
    },
    '& .MuiRating-iconHover': {
      color: theme.palette.primary.main,
    },
  });

  return (
    <div style={{ margin: "auto", width: '80%' }}>
      <AliceCarousel
        mouseTracking
        items={getImages()}
        disableButtonsControls={true}
        disableDotsControls={true}
        infinite={true}
      />
      <div style={{ margin: "auto", width: '70%' }}>
        <div>
          <Typography component="h1" variant="h1" mt={8}>
            {car.make} {car.model} {car.year}
          </Typography>
          <Typography component="h2" variant="h2" mt={1}>
            {ratingSumCar.toFixed(1)} <StarIcon color="primary" />
          </Typography>
        </div>
        <div className="box">
          <Box sx={{
            display: 'grid',
            gap: 3,
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}>
            <Box>
              <Box sx={{
                display: 'grid',
                gap: 2,
                gridTemplateColumns: 'repeat(2, 1fr)',
                marginTop: 4,
                marginBottom: 4
              }}>
                <Typography component="p" variant="body2">
                  <KeyboardDoubleArrowRightIcon /> {car.details.hp} HP
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
                <Typography component="h3" variant="h3" mt={6}>
                  DESCRIPTION
                </Typography>
                <Typography component="p" variant="body2" mt={2}>
                  {car.description}
                </Typography>
              </Box>
              <Box sx={{}}>
                <Typography component="h3" variant="h3" mt={6}>
                  FEATURES
                </Typography>
                <Box sx={{
                  display: 'grid',
                  gap: 3,
                  gridTemplateColumns: 'repeat(2, 1fr)'
                }}>
                  {car.features.map((feature, index) => <Typography component="p" variant="body2" mt={2} key={index}>
                    {feature}
                  </Typography>)}
                </Box>
              </Box>
              <Box sx={{}}>
                <Typography component="h3" variant="h3" mt={6}>
                  HOSTED BY
                </Typography>
                <Box sx={{
                  display: 'grid',
                  gap: 2,
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  marginTop: 2,
                  marginBottom: 5
                }}>
                  <Avatar
                    alt={user.userName}
                    src={user.image.content.data}
                    sx={{ width: 128, height: 128 }}
                  />
                  <Box sx={{
                    marginTop: 3,
                  }}>
                    <Typography component="h2" variant="h2">
                      {user.userName}
                    </Typography>
                    <Typography component="p" variant="body2">
                      {ratingSumUser.toFixed(1)} <StarIcon color="primary" />
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{}}>
                <Typography component="h3" variant="h3" mt={6} mb={2}>
                  GUIDELINES
                </Typography>
                {car.guidelines.map((guidelines, index) => <Typography component="p" variant="body2" mt={1} key={index}>
                  &#9675; {guidelines}
                </Typography>)}
              </Box>
              <Box sx={{}}>
                <Typography component="h3" variant="h3" mt={6} mb={3}>
                  LOCATION
                </Typography>
                <CarMap address={car.address}/>
              </Box>
              <Box sx={{ marginBottom: 15 }}>
                <Typography component="h3" variant="h3" mt={6} mb={1}>
                  RATINGS AND REVIEWS
                </Typography>
                <Typography component="h4" variant="h4">
                  {ratingSumCar.toFixed(1)} <StarIcon color="primary" fontSize="large" />
                </Typography>
                <Typography component="p" variant="caption" color={theme.palette.grey[600]} mb={2}>
                  ({car.ratings.length} Ratings)
                </Typography>
                {car.ratings.map((rating, index) =>
                  <Box sx={{marginTop:2}} key={index}>
                    <StyledRating name="read-only" value={rating.rating} readOnly />
                    <Typography component="h6" variant="h6" >
                      {rating.author}  <span style={{ fontStyle: "italic", color: "grey" }}>{rating.date}</span>
                    </Typography>
                    <Typography component="p" variant="body2" mt={1} mb={3}>
                      {rating.text}
                    </Typography>
                    <hr></hr>
                  </Box>)}
              </Box>
            </Box>
            <Box>
              <Booking car={car} />
            </Box>
          </Box>
        </div>
      </div>
    </div >
  );
};

export default CarDetails;
