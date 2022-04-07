import "react-alice-carousel/lib/alice-carousel.css";
import "./cartypes.css";
import Carousel from "../../carousel/CarouselWithButton"

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

const CarTypes = ({handleCarTypeChange}:{handleCarTypeChange:any}) => {
  return (
    <div id="cartypes">
      <Typography component="h3" variant="h3">
        Your Dreamcar?!..
      </Typography>
      <Carousel images={images} doubleImg={true} handleChange={handleCarTypeChange} />
    </div>
  );
};

export default CarTypes;
