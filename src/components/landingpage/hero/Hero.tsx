import Typography from '@mui/material/Typography';
import NewSearchbar from '../../searchbar/SearchBarNew'
import "./hero.css"

const Hero = () => {
  return (
    <div id="hero">
      <div style={{ display: 'flex', justifyContent: 'center'}}>
      <NewSearchbar />
      </div>
      <div className="title">
        <Typography component="h1" variant="h1">
          Search for a new Adventure?
        </Typography>
        <Typography component="h2" variant="h2">
          Find the right car here!...
        </Typography>
      </div>
    </div>
  )
}

export default Hero;