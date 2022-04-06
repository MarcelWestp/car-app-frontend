import Typography from "@mui/material/Typography";
import NewSearchbar from "../../searchbar/SearchBarNew";
import Button from '@mui/material/Button';
import MovingIcon from '@mui/icons-material/Moving';
import theme from './../../../AppTheme'
import "./hero.css";

const Hero = ({handleLocationChange}:{ handleLocationChange:any}) => {
  return (
    <div id="hero">
      <video src="/video/herovid.mp4" autoPlay loop muted />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <NewSearchbar handleLocationChange={handleLocationChange} />
      </div>
      <div className="title">
        <Typography component="h2" variant="h2">
        Car<span style={{ color: `${theme.palette.secondary.light}` }}>To</span>Go
        </Typography>
        <Typography component="h1" variant="h1">
          The future of mobility
        </Typography>
        <Typography component="h4" variant="h4">
          find the right car now! ...
        </Typography>
        <Button variant="contained" color="primary" style={{marginTop: 10}} endIcon={<MovingIcon />}>
        I´m flexible
      </Button>
      </div>
    </div>
  );
};

export default Hero;
