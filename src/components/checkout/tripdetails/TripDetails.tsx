import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Trip from "./../../../models/Trip";

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const TripDetails = ({ trip }: { trip: Trip }) => {

  // @ts-ignore: Object is possibly 'undefined'.
  const estimatedPrice: number = (Math.abs(trip.until.getTime() - trip.from.getTime()) / (1000 * 60 * 60 * 24) + 1) * trip.car.pricePerDay;

  // @ts-ignore: Object is possibly 'undefined'.
  const estimatedMiles: number = (Math.abs(trip.until.getTime() - trip.from.getTime()) / (1000 * 60 * 60 * 24) + 1) * trip.car.distancePerDay;

  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Trip details:
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              height: 150,
              width: 200,
            }}
          >
            <ImageSrc
              style={{ backgroundImage: `url(${trip.car.images[0]})` }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{}}>
            <p>
              <b>{trip.car.make} {trip.car.model} {trip.car.year}</b>
            </p>
            <p>
              {trip.car.address.street} {trip.car.address.number}
            </p>
            <p>
              {trip.car.address.zip} {trip.car.address.city}
            </p>
            <p>
              <b>Price per Day:</b> $ {trip.car.pricePerDay}
            </p>
            <p>
              <b>Distance per Day:</b> {trip.car.distancePerDay} miles
            </p>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <p><b>From: </b>{trip.from.toUTCString().substring(0,17)}</p>
        </Grid>
        <Grid item xs={6}>
          <p><b>Until: </b>{trip.until.toUTCString().substring(0,17)}</p>
        </Grid>
        <Grid item xs={4}>
          <p><b>Est. Miles: </b></p>
        </Grid>
        <Grid item xs={8}>
          <h1><b>{estimatedMiles} miles</b></h1>
        </Grid>
        <Grid item xs={4}>
          <p><b>Est. price: </b></p>
        </Grid>
        <Grid item xs={8}>
          <h1><b>$ {estimatedPrice}</b></h1>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default TripDetails;
