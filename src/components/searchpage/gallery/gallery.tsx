import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Carcard from "./carcard/carcard";
import { Link } from "react-router-dom";
import Car from "./../../../models/Car"

const cars: Car[] = [
  {
    carid: 1,
    hostUserId: 1,
    make: "Volkswagen",
    model: "ID.Buzz",
    type: "Van",
    year: 2022,
    images: [
      "https://cdn.pixabay.com/photo/2017/04/27/18/37/combi-2266348_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/08/09/19/59/vwbus-2615580_1280.jpg",
    ],
    details: {
      fueltype: "Gas",
      seats: 5,
      doors: 2,
      hp: 110,
      transmission: "automatic",
    },
    features: ["doors", "trunk", "engine", "navi"],
    description: "this car is awesome",
    guidelines: ["dont smoke", "no pets"],
    ratings: [
      {
        rating: 4,
        author: "david",
        date: "24.03.2020",
        content: "what a nice car!",
      },
      {
        rating: 5,
        author: "david",
        date: "24.03.2020",
        content: "what a nice car!",
      },
      {
        rating: 2,
        author: "david",
        date: "24.03.2020",
        content: "what a nice car!",
      },
    ],
    pricePerDay: 54,
    distancePerDay: 150,
    bookings: [{ user: "David", from: "11.01.22", until: "14.01.22" }],
    address: {
      street: "langestraße",
      number: "5",
      city: "Braunschweig",
      zip: 38106,
    },
  },
  {
    carid: 1,
    hostUserId: 1,
    make: "Volkswagen",
    model: "ID.Buzz",
    type: "Van",
    year: 2022,
    images: [
      "https://cdn.pixabay.com/photo/2017/04/27/18/37/combi-2266348_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/08/09/19/59/vwbus-2615580_1280.jpg",
    ],
    details: {
      fueltype: "Gas",
      seats: 5,
      doors: 2,
      hp: 110,
      transmission: "automatic",
    },
    features: ["doors", "trunk", "engine", "navi"],
    description: "this car is awesome",
    guidelines: ["dont smoke", "no pets"],
    ratings: [
      {
        rating: 4,
        author: "david",
        date: "24.03.2020",
        content: "what a nice car!",
      },
      {
        rating: 5,
        author: "david",
        date: "24.03.2020",
        content: "what a nice car!",
      },
      {
        rating: 2,
        author: "david",
        date: "24.03.2020",
        content: "what a nice car!",
      },
    ],
    pricePerDay: 54,
    distancePerDay: 150,
    bookings: [{ user: "David", from: "11.01.22", until: "14.01.22" }],
    address: {
      street: "langestraße",
      number: "5",
      city: "Braunschweig",
      zip: 38106,
    },
  },
  {
    carid: 1,
    hostUserId: 1,
    make: "Volkswagen",
    model: "ID.Buzz",
    type: "Van",
    year: 2022,
    images: [
      "https://cdn.pixabay.com/photo/2017/04/27/18/37/combi-2266348_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/08/09/19/59/vwbus-2615580_1280.jpg",
    ],
    details: {
      fueltype: "Gas",
      seats: 5,
      doors: 2,
      hp: 110,
      transmission: "automatic",
    },
    features: ["doors", "trunk", "engine", "navi"],
    description: "this car is awesome",
    guidelines: ["dont smoke", "no pets"],
    ratings: [
      {
        rating: 4,
        author: "david",
        date: "24.03.2020",
        content: "what a nice car!",
      },
      {
        rating: 5,
        author: "david",
        date: "24.03.2020",
        content: "what a nice car!",
      },
      {
        rating: 2,
        author: "david",
        date: "24.03.2020",
        content: "what a nice car!",
      },
    ],
    pricePerDay: 54,
    distancePerDay: 150,
    bookings: [{ user: "David", from: "11.01.22", until: "14.01.22" }],
    address: {
      street: "langestraße",
      number: "5",
      city: "Braunschweig",
      zip: 38106,
    },
  },
  {
    carid: 1,
    hostUserId: 1,
    make: "Volkswagen",
    model: "ID.Buzz",
    type: "Van",
    year: 2022,
    images: [
      "https://cdn.pixabay.com/photo/2017/04/27/18/37/combi-2266348_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/08/09/19/59/vwbus-2615580_1280.jpg",
    ],
    details: {
      fueltype: "Gas",
      seats: 5,
      doors: 2,
      hp: 110,
      transmission: "automatic",
    },
    features: ["doors", "trunk", "engine", "navi"],
    description: "this car is awesome",
    guidelines: ["dont smoke", "no pets"],
    ratings: [
      {
        rating: 4,
        author: "david",
        date: "24.03.2020",
        content: "what a nice car!",
      },
      {
        rating: 5,
        author: "david",
        date: "24.03.2020",
        content: "what a nice car!",
      },
      {
        rating: 2,
        author: "david",
        date: "24.03.2020",
        content: "what a nice car!",
      },
    ],
    pricePerDay: 54,
    distancePerDay: 150,
    bookings: [{ user: "David", from: "11.01.22", until: "14.01.22" }],
    address: {
      street: "langestraße",
      number: "5",
      city: "Braunschweig",
      zip: 38106,
    },
  },
  {
    carid: 1,
    hostUserId: 1,
    make: "Volkswagen",
    model: "ID.Buzz",
    type: "Van",
    year: 2022,
    images: [
      "https://cdn.pixabay.com/photo/2017/04/27/18/37/combi-2266348_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/08/09/19/59/vwbus-2615580_1280.jpg",
    ],
    details: {
      fueltype: "Gas",
      seats: 5,
      doors: 2,
      hp: 110,
      transmission: "automatic",
    },
    features: ["doors", "trunk", "engine", "navi"],
    description: "this car is awesome",
    guidelines: ["dont smoke", "no pets"],
    ratings: [
      {
        rating: 4,
        author: "david",
        date: "24.03.2020",
        content: "what a nice car!",
      },
      {
        rating: 5,
        author: "david",
        date: "24.03.2020",
        content: "what a nice car!",
      },
      {
        rating: 2,
        author: "david",
        date: "24.03.2020",
        content: "what a nice car!",
      },
    ],
    pricePerDay: 54,
    distancePerDay: 150,
    bookings: [{ user: "David", from: "11.01.22", until: "14.01.22" }],
    address: {
      street: "langestraße",
      number: "5",
      city: "Braunschweig",
      zip: 38106,
    },
  }
];

function Gallery() {
  return (
    <div style={{ display: "flex" }}>
      {/* <Container sx={{ marginTop: 5}}>
                <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                    <Box sx={{minWidth: 300, maxWidth: 300, marginTop: 2 }}>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Item>1</Item>
                        </Grid>
                    </Box>
                    <Box sx={{minWidth: 300, maxWidth: 300, marginTop: 2 }}>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Item>2</Item>
                        </Grid>
                    </Box>
                    <Box sx={{minWidth: 300, maxWidth: 300, marginTop: 2 }}>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Item>3</Item>
                        </Grid>
                    </Box>
                </Grid>
            </Container> */}
      {cars.map((car) => (
        <Link to={`/car/${car.carid}`}  target="_blank" >
        <Carcard key={car.carid} car={car} />
        </Link>
      ))}
    </div>
  );
}

export default Gallery;
