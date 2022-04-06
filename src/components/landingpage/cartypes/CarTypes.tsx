import "react-alice-carousel/lib/alice-carousel.css";
import "./cartypes.css";
import Carousel from "../../carousel/CarouselWithButton"
import Box from '@mui/material/Box'
import theme from './../../../AppTheme'

import oldtimer from "./../../../res/img/cartypes/oldtimer.jpeg";
import luxury from "./../../../res/img/cartypes/luxury.jpeg";
import sport from "./../../../res/img/cartypes/sport.jpeg";
import suv from "./../../../res/img/cartypes/suv.jpeg";
import Typography from "@mui/material/Typography";

const images = [
  {
    src: oldtimer,
    title: 'Classic Car',
    url: '/search'
  },
  {
    src: luxury,
    title: 'Luxury Car',
    url: '/search'
  },
  {
    src: sport,
    title: 'Sportcar',
    url: '/search'
  },
  {
    src: suv,
    title: 'SUV',
    url: '/search'
  }
]

const CarTypes = () => {
  return (
    <div id="cartypes">
      <Box sx={{ display: 'flex', width: '59%' }} >
      <Typography component="h3" variant="h3" >
      Your dream <span style={{ color: `${theme.palette.primary.main}` }} >car</span>?!..
      </Typography>
      </Box>
      <Carousel images={images} doubleImg={true} />
    </div>
  );
};

export default CarTypes;
