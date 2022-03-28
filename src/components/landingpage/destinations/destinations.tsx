
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./destinations.css";
import Carousel from "./../../carousel/carousel"

import berlin from "./../../../res/img/destination/berlin.jpeg";
import hamburg from "./../../../res/img/destination/hamburg.jpeg";
import hannover from "./../../../res/img/destination/hannover.jpeg";
import dresden from "./../../../res/img/destination/dresden.jpeg";
import frankfurt from "./../../../res/img/destination/frankfurt.jpeg";
import köln from "./../../../res/img/destination/köln.jpeg";

const handleDragStart = (e: any) => e.preventDefault();

const items1 = [
  <div>
    <img
      src={berlin}
      alt="berlin"
      onDragStart={handleDragStart}
      role="presentation"
    />
    <h2>Berlin</h2>
  </div>,
  <div>
    <img
      src={hamburg}
      alt="hamburg"
      onDragStart={handleDragStart}
      role="presentation"
    />
    <h2>Hamburg</h2>
  </div>,
  <div>
    <img
      src={hannover}
      alt="hanover"
      onDragStart={handleDragStart}
      role="presentation"
    />
    <h2>Hanover</h2>
  </div>,
  <div>
    <img
      src={dresden}
      alt="dresden"
      onDragStart={handleDragStart}
      role="presentation"
    />
    <h2>Dresden</h2>
  </div>,
  <div>
    <img
      src={köln}
      alt="cologne"
      onDragStart={handleDragStart}
      role="presentation"
    />
    <h2>Cologne</h2>
  </div>,
];

const images = [
  {
    url: berlin,
    title: 'Berlin'
  },
  {
    url: hamburg,
    title: 'Hamburg'
  },
  {
    url: hannover,
    title: 'Hanover'
  },
  {
    url: dresden,
    title: 'Dresden'
  },
  {
    url: köln,
    title: 'Cologne'
  },
  {
    url: frankfurt,
    title: 'Frankfurt'
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
      <h3>Your next Destination:</h3>
      <Carousel images={images} doubleImg={true} />

      {/* <AliceCarousel
        mouseTracking
        items={items1}
        responsive={responsive}
        disableButtonsControls={true}
        infinite={true}
      /> */}
    </div>
  );
};

export default Destinations;
