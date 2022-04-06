import Typography from "@mui/material/Typography";
import NewSearchbar from "../../searchbar/SearchBarNew";
import Button from '@mui/material/Button';
import MovingIcon from '@mui/icons-material/Moving';
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
          CarToGo
        </Typography>
        <Typography component="h1" variant="h1">
          The Future of Mobility
        </Typography>
        <Typography component="h4" variant="h4">
          find the right car now!...
        </Typography>
        <Button variant="contained" style={{marginTop: 10}} endIcon={<MovingIcon />}>
        I´m flexible
      </Button>
      </div>
    </div>
  );
};

export default Hero;
