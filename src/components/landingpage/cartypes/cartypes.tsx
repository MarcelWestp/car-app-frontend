import "react-alice-carousel/lib/alice-carousel.css";
import "./cartypes.css";
import Carousel from "../../carousel/carouselwithbutton"

import oldtimer from "./../../../res/img/cartypes/oldtimer.jpeg";
import luxury from "./../../../res/img/cartypes/luxury.jpeg";
import sport from "./../../../res/img/cartypes/sport.jpeg";
import suv from "./../../../res/img/cartypes/suv.jpeg";

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

const responsive = {
  0: { items: 1 },
  1600: { items: 2 },
};

const Cartypes = () => {
  return (
    <div id="cartypes">
      <h3>Your Dreamcar?!..</h3>
      <Carousel images={images} doubleImg={false} />
    </div>
  );
};

export default Cartypes;
