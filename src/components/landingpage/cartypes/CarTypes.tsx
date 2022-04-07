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
    title: 'Classic',
    url: '/search'
  },
  {
    src: luxury,
    title: 'Luxury',
    url: '/search'
  },
  {
    src: sport,
    title: 'Sport',
    url: '/search'
  },
  {
    src: suv,
    title: 'SUV',
    url: '/search'
  }
]

const CarTypes = ({ handleCarTypeChange }: { handleCarTypeChange: any }) => {
  return (
    <div id="cartypes">
      <Box sx={{ display: 'flex', width: '59%' }} >
        <Typography component="h3" variant="h3" >
          Your dream <span style={{ color: `${theme.palette.primary.main}` }} >car</span>?!..
        </Typography>
        <Carousel images={images} doubleImg={true} handleChange={handleCarTypeChange} />
      </Box>
    </div>
  );
};

export default CarTypes;
