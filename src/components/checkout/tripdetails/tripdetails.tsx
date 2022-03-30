import React from "react"
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Trip from "./../../../models/Trip"

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

function Tripdetails({ trip }: { trip: Trip }) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Trip details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box sx={{
            position: 'relative',
            height: 150,
            width: 200
          }}>
            <ImageSrc style={{ backgroundImage: `url(${trip.car.images[0]})` }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{

          }}>
           <p>{trip.car.make} {trip.car.model} {trip.car.year}</p>
           <p>{trip.car.address.street} {trip.car.address.number}</p>
           <p>{trip.car.address.zip} {trip.car.address.city}</p>

          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Tripdetails