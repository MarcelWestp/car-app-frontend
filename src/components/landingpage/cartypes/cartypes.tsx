import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./cartypes.css";
import Carousel from "./../../carousel/carousel"

import oldtimer from "./../../../res/img/cartypes/oldtimer.jpeg";
import luxury from "./../../../res/img/cartypes/luxury.jpeg";
import sport from "./../../../res/img/cartypes/sport.jpeg";
import suv from "./../../../res/img/cartypes/suv.jpeg";

const handleDragStart = (e: any) => e.preventDefault();

const items = [
  <div>
    <img
      src={oldtimer}
      alt="classic-car"
      onDragStart={handleDragStart}
      role="presentation"
    />
    <h2>Classic car</h2>
  </div>,
  <div>
    <img
      src={luxury}
      alt="luxury-car"
      onDragStart={handleDragStart}
      role="presentation"
    />
    <h2>Luxury</h2>
  </div>,
  <div>
    <img
      src={sport}
      alt="sport-car"
      onDragStart={handleDragStart}
      role="presentation"
    />
    <h2>Sport</h2>
  </div>,
  <div>
    <img
      src={suv}
      alt="suv-car"
      onDragStart={handleDragStart}
      role="presentation"
    />
    <h2>Suv</h2>
  </div>,
];

const images = [
  { 
    url: oldtimer,
    title: 'Classic Car'
  },
  { 
    url: luxury,
    title: 'Luxury Car'
  },
  { 
    url: sport,
    title: 'Sportcar'
  },
  { 
    url: suv,
    title: 'SUV'
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
      <Carousel images={images} />

      {/* <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        disableButtonsControls={true}
        infinite={true}
      /> */}
    </div>
  );
};

export default Cartypes;
