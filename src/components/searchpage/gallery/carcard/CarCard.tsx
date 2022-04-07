import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Car from "./../../../../models/Car";
import Placeholder from './../../res/img/placeholder.jpeg'

const CarCard = ({ car }: { car: Car }) => {

  let ratingSum: number = car.ratings.length === 0 ? 0 : (car.ratings.map(rating => rating.rating).reduce((prev, curr) => prev + curr, 0) / car.ratings.length);

  let image: any = car.images.length === 0 ? Placeholder : `data:${car.images[0].contentType};base64,${car.images[0].content.data}` 

  return (
    <Card sx={{ maxWidth: '300px', minWidth: '300px', margin: 2, maxHeight: '250px', minHeight: '250px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={image}  
          alt={`${car.make} ${car.model}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h2" component="div">
            {`${car.make} ${car.model} ${car.year}`}
          </Typography>
          <Typography gutterBottom variant="h3" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
            {ratingSum.toFixed(1)}<StarIcon color="primary" /> <span style={{ fontWeight: 400, color: "#898989" }}>({car.ratings.length} trips)</span>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', justifyContent: 'flex-end', fontSize: '14px' }}>
            {`$${car.pricePerDay} / day`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CarCard