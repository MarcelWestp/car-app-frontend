import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Car from "./../../../../models/Car";


const Carcard = ( {car} : {car: Car}) => {

   let ratingSum: number = car.ratings.length === 0 ? 0 : (car.ratings.map(rating => rating.rating).reduce((prev, curr) => prev + curr, 0)  / car.ratings.length);

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`data:${car.images[0].contentType};base64,${car.images[0].content.data}`}
          alt={`${car.make} ${car.model}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
          {`${car.make} ${car.model} ${car.year}`}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          {ratingSum.toFixed(1)}<StarIcon />
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {`this car cost $${car.pricePerDay} per Day`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Carcard