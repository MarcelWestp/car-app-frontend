import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';


interface Car {
    make: string;
    model: string;
    year: number;
    rating: number;
    pricePerDay: number;
    images: string[];
}


const Carcard = ( {car} : {car: Car}) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={car.images[0]}
          alt={`${car.make} ${car.model}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
          {`${car.make} ${car.model} ${car.year}`}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          {`${car.rating}`}<StarIcon />
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {`this car cost ${car.pricePerDay}$ per Day`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Carcard