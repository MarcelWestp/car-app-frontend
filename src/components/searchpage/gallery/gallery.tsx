import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Carcard from "./carcard/carcard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const cars = [
  {
    carid: 1,
    make: "Volkswagen",
    model: "ID.Buzz",
    year: 2022,
    rating: 4.4,
    pricePerDay: 54,
    images: [
      "https://cdn.pixabay.com/photo/2017/04/27/18/37/combi-2266348_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/08/09/19/59/vwbus-2615580_1280.jpg",
    ],
  },
  {
    carid: 2,
    make: "Volkswagen",
    model: "ID.Buzz",
    year: 2022,
    rating: 4.4,
    pricePerDay: 54,
    images: [
      "https://cdn.pixabay.com/photo/2017/04/27/18/37/combi-2266348_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/08/09/19/59/vwbus-2615580_1280.jpg",
    ],
  },
  {
    carid: 3,
    make: "Volkswagen",
    model: "ID.Buzz",
    year: 2022,
    rating: 4.4,
    pricePerDay: 54,
    images: [
      "https://cdn.pixabay.com/photo/2017/04/27/18/37/combi-2266348_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/08/09/19/59/vwbus-2615580_1280.jpg",
    ],
  },
  {
    carid: 4,
    make: "Volkswagen",
    model: "ID.Buzz",
    year: 2022,
    rating: 4.4,
    pricePerDay: 54,
    images: [
      "https://cdn.pixabay.com/photo/2017/04/27/18/37/combi-2266348_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/08/09/19/59/vwbus-2615580_1280.jpg",
    ],
  },
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
        <Carcard key={car.carid} car={car} />
      ))}
    </div>
  );
}

export default Gallery;
