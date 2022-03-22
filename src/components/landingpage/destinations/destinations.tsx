import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./destinations.css";

import berlin from "./../../../res/img/destination/berlin.jpeg";
import hamburg from "./../../../res/img/destination/hamburg.jpeg";
import hannover from "./../../../res/img/destination/hannover.jpeg";
import dresden from "./../../../res/img/destination/dresden.jpeg";
import frankfurt from "./../../../res/img/destination/frankfurt.jpeg";
import köln from "./../../../res/img/destination/köln.jpeg";

const handleDragStart = (e: any) => e.preventDefault();

const items = [
  <img
    src={berlin}
    alt="berlin"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src={hamburg}
    alt="hamburg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src={hannover}
    alt="hanover"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src={dresden}
    alt="dresden"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src={frankfurt}
    alt="frankfurt"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src={köln}
    alt="cologne"
    onDragStart={handleDragStart}
    role="presentation"
  />,
];
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

const responsive = {
  0: { items: 1 },
  1224: { items: 2 },
  1600: { items: 4 },
};

const Destinations = () => {
  return (
    <div id="destinations">
      <h3>Your next Destination:</h3>
      <AliceCarousel
        mouseTracking
        items={items1}
        responsive={responsive}
        disableButtonsControls={true}
        infinite={true}
      />
    </div>
  );
};

export default Destinations;
