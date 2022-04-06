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

const TripDetails = ({ trip, height }: { trip: Trip, height: string}) => {

  // @ts-ignore: Object is possibly 'undefined'.
  const estimatedPrice: number = (Math.abs(trip.until.getTime() - trip.from.getTime()) / (1000 * 60 * 60 * 24) + 1) * trip.car.pricePerDay;

  // @ts-ignore: Object is possibly 'undefined'.
  const estimatedMiles: number = (Math.abs(trip.until.getTime() - trip.from.getTime()) / (1000 * 60 * 60 * 24) + 1) * trip.car.distancePerDay;

  return (
      <Box sx={{ minHeight: {height} }} >
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
              <Typography component="p" variant="body2">
                {trip.car.make} {trip.car.model} {trip.car.year}
              </Typography>
              <Typography component="p" variant="body2">
                {trip.car.address.street} {trip.car.address.number}
              </Typography>
              <Typography component="p" variant="body2">
                {trip.car.address.zip} {trip.car.address.city}
              </Typography>
              <Typography component="p" variant="body2">
                Price per day: $ {trip.car.pricePerDay}
              </Typography>
              <Typography component="p" variant="body2">
                Distance per day:{trip.car.distancePerDay} miles
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Typography component="p" variant="body2">
              From: {trip.from.toUTCString().substring(0, 17)}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography component="p" variant="body2">
              Until: {trip.until.toUTCString().substring(0, 17)}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography component="p" variant="body2">
              Est. miles:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography component="p" variant="body2">
              {estimatedMiles} miles
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography component="p" variant="body2">
              Est. price:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography component="p" variant="body2">
              $ {estimatedPrice}
            </Typography>
          </Grid>
        </Grid>
      </Box>
  );
};

export default TripDetails;
