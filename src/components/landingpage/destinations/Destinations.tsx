
import "react-alice-carousel/lib/alice-carousel.css";
import "./destinations.css";
import Carousel from "../../carousel/CarouselWithButton"

import berlin from "./../../../res/img/destination/berlin.jpeg";
import hamburg from "./../../../res/img/destination/hamburg.jpeg";
import hannover from "./../../../res/img/destination/hannover.jpeg";
import dresden from "./../../../res/img/destination/dresden.jpeg";
import frankfurt from "./../../../res/img/destination/frankfurt.jpeg";
import köln from "./../../../res/img/destination/köln.jpeg";
import Typography from "@mui/material/Typography";

const images = [
  {
    src: berlin,
    title: 'Berlin',
    url: '/search'
  },
  {
    src: hamburg,
    title: 'Hamburg',
    url: '/search'
  },
  {
    src: hannover,
    title: 'Hanover',
    url: '/search'
  },
  {
    src: dresden,
    title: 'Dresden',
    url: '/search'
  },
  {
    src: köln,
    title: 'Cologne',
    url: '/search'
  },
  {
    src: frankfurt,
    title: 'Frankfurt',
    url: '/search'
  }
]

const responsive = {
  0: { items: 1 },
  1224: { items: 2 },
  1600: { items: 4 },
};

const Destinations = () => {
  return (
    <div id="destinations">
      <Typography component="h3" variant="h3">
        <h3>Your next Destination:</h3>
      </Typography>
      <Carousel images={images} doubleImg={true} />
    </div>
  );
};

export default Destinations;
