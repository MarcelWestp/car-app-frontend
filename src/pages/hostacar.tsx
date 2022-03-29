import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import oldtimer from "./../res/img/cartypes/oldtimer.jpeg";
import luxury from "./../res/img/cartypes/luxury.jpeg";
import sport from "./../res/img/cartypes/sport.jpeg";
import suv from "./../res/img/cartypes/suv.jpeg";

const handleDragStart = (e: any) => e.preventDefault();

const items = [
  <div>
    <img
      src={oldtimer}
      alt="classic-car"
      onDragStart={handleDragStart}
      role="presentation"
    />
    <h2>Classic car</h2>
  </div>,
  <div>
    <img
      src={luxury}
      alt="luxury-car"
      onDragStart={handleDragStart}
      role="presentation"
    />
    <h2>Luxury</h2>
  </div>,
  <div>
    <img
      src={sport}
      alt="sport-car"
      onDragStart={handleDragStart}
      role="presentation"
    />
    <h2>Sport</h2>
  </div>,
  <div>
    <img
      src={suv}
      alt="suv-car"
      onDragStart={handleDragStart}
      role="presentation"
    />
    <h2>Suv</h2>
  </div>,
];

const responsive = {
  0: { items: 1 },
  1600: { items: 2 },
};

const Input = styled("input")({
  display: "none",
});

const Hostacar = () => {
  const [make, setMake] = React.useState("");
  const handleChangeMake = (event: SelectChangeEvent) => {
    setMake(event.target.value as string);
  };

  const featuresArray = [
    "4x4",
    "Backup Camera",
    "Bluetooth",
    "Child seat",
    "GPS",
    "Keyless entry",
    "Heatet seats",
    "Leather seats",
    "USB charger",
  ];
  const guidelinesArray = ["no smoking", "no pets"];

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box style={{ margin: "20px 20%" }}>
      <h2>List your car</h2>
      <Box style={{ margin: "10px 0px 20px 0" }}>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          disableButtonsControls={true}
          infinite={true}
          disableDotsControls={true}
        />
        <label htmlFor="icon-button-file">
          <Input accept="image/*" id="icon-button-file" type="file" />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <p>Bild hinzufügen: </p>
            <PhotoCamera />
          </IconButton>
        </label>
      </Box>
      <Box
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: "repeat(2, 1fr)",
          marginTop: 2,
          marginBottom: 2,
        }}
      >
        <h2 >Car:</h2><p></p>
        <p>Make:</p>
        <TextField id="make" label="Make" variant="standard" />
        <p>Model:</p>
        <TextField id="model" label="Model" variant="standard" />
        <p>Type:</p>
        <Select
          labelId="type"
          id="type"
          value={make}
          onChange={handleChangeMake}
        >
          <MenuItem value={10}>Classic</MenuItem>
          <MenuItem value={20}>Luxury</MenuItem>
          <MenuItem value={30}>Sport</MenuItem>
          <MenuItem value={40}>SUV</MenuItem>
        </Select>
        <p>Year:</p>
        <TextField id="year" type="number" label="year" variant="standard" />
        <p>Fuel:</p>
        <TextField id="fuel" label="Fuel" variant="standard" />
        <p>Seats:</p>
        <TextField id="seats" type="number" label="seats" variant="standard" />
        <p>Seats:</p>
        <TextField id="seats" type="number" label="seats" variant="standard" />
        <h2 >Pricing:</h2><p></p>
        <p>Price per day in $:</p>
        <TextField id="zip" type="number" label="price per day in dollors" variant="standard" />
        <p>Distance per day in miles:</p>
        <TextField id="zip" type="number" label="distance per day in miles" variant="standard" />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <p>Fetures:</p>
        </Grid>
        <Grid item xs={8}>
          <Autocomplete
            multiple
            id="tags-filled"
            options={featuresArray.map((feature) => feature)}
            freeSolo
            renderTags={(value: readonly string[], getTagProps) =>
              value.map((option: string, index: number) => (
                <Chip
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField {...params} variant="filled" placeholder="Features" />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <p>Description:</p>
        </Grid>
        <Grid item xs={6}>
          <Button onClick={handleClickOpen}>Edit Description</Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Description</DialogTitle>
            <DialogContent>
              <TextareaAutosize
                minRows={4}
                placeholder="Your description..."
                style={{ width: 200 }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Okay</Button>
            </DialogActions>
          </Dialog>
        </Grid>
        <Grid item xs={4}>
          <p>Guidlines:</p>
        </Grid>
        <Grid item xs={8}>
          <Autocomplete
            multiple
            id="tags-filled"
            options={guidelinesArray.map((guideline) => guideline)}
            freeSolo
            renderTags={(value: readonly string[], getTagProps) =>
              value.map((option: string, index: number) => (
                <Chip
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField {...params} variant="filled" placeholder="Guideline" />
            )}
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: "repeat(2, 1fr)",
          marginTop: 2,
          marginBottom: 2,
        }}
      >
        <h2>Car location:</h2><p></p>
        <p>Street:</p>
        <TextField id="street" label="Street" variant="standard" />
        <p>Nr:</p>
        <TextField id="nr" label="Number" variant="standard" />
        <p>City:</p>
        <TextField id="city" label="City" variant="standard" />
        <p>Zip:</p>
        <TextField id="zip" type="number" label="Zip" variant="standard" />
      </Box>
    </Box>
  );
};

export default Hostacar;
