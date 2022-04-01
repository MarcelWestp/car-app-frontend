import React, { useState } from "react";
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

import oldtimer from "./../../res/img/cartypes/oldtimer.jpeg";
import luxury from "./../../res/img/cartypes/luxury.jpeg";
import sport from "./../../res/img/cartypes/sport.jpeg";
import suv from "./../../res/img/cartypes/suv.jpeg";

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

const HostACar = () => {
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

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const [fuel, setFuel] = useState("");
  const [seats, setSeats] = useState("");
  const [doors, setDoors] = useState("");
  const [hp, setHp] = useState("");
  const [transmission, setTransmission] = useState("");
  const [pricePerDay, setPricePerDay] = useState("");
  const [distancePerDay, setDistancePerDay] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");

  const handleChangeHandler = (
    event: SelectChangeEvent | React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(event.target.value as string);
  };

  const [features,setFeatures] = useState<string[]>([]);
  const [guidelines,setGuidelines] = useState<string[]>([]);

  const multihandler = (value: string[],setter:React.Dispatch<React.SetStateAction<string[]>>) =>{
    setter(value);
  }

  return (
    <Box style={{ margin: "20px 20%", maxWidth: 800 }}>
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
        <h2>Car:</h2>
        <p></p>
        <p>Make:</p>
        <TextField
          id="make"
          label="Make"
          variant="standard"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeHandler(event, setMake)
          }
        />
        <p>Model:</p>
        <TextField
          id="model"
          label="Model"
          variant="standard"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeHandler(event, setModel)
          }
        />
        <p>Type:</p>
        <Select
          labelId="type"
          id="type"
          value={type}
          onChange={(event: SelectChangeEvent) =>
            handleChangeHandler(event, setType)
          }
        >
          <MenuItem value={"Classic"}>Classic</MenuItem>
          <MenuItem value={"Luxury"}>Luxury</MenuItem>
          <MenuItem value={"Sport"}>Sport</MenuItem>
          <MenuItem value={"SUV"}>SUV</MenuItem>
          <MenuItem value={"Cabrio"}>Cabrio</MenuItem>
          <MenuItem value={"Van"}>Van</MenuItem>
          <MenuItem value={"Cars"}>Cars</MenuItem>
        </Select>
        <p>Year:</p>
        <TextField
          id="year"
          type="number"
          label="Year"
          variant="standard"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeHandler(event, setYear)
          }
        />
        <p>Fuel:</p>
        <Select
          labelId="fuel"
          id="fuel"
          value={fuel}
          onChange={(event: SelectChangeEvent) =>
            handleChangeHandler(event, setFuel)
          }
        >
          <MenuItem value={"Petrol"}>Petrol</MenuItem>
          <MenuItem value={"Diesel"}>Diesel</MenuItem>
          <MenuItem value={"Hybrid"}>Hybrid</MenuItem>
          <MenuItem value={"Electric"}>Electric</MenuItem>
          <MenuItem value={"Gas"}>Gas</MenuItem>
        </Select>
        <p>Seats:</p>
        <TextField
          id="seats"
          type="number"
          label="Seats"
          variant="standard"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeHandler(event, setSeats)
          }
        />
        <p>Doors:</p>
        <TextField
          id="doors"
          type="number"
          label="Doors"
          variant="standard"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeHandler(event, setDoors)
          }
        />
        <p>Hp:</p>
        <TextField
          id="hp"
          type="number"
          label="Hp"
          variant="standard"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeHandler(event, setHp)
          }
        />
        <p>Transmission:</p>
        <Select
          labelId="transmission"
          id="transmission"
          value={transmission}
          onChange={(event: SelectChangeEvent) =>
            handleChangeHandler(event, setTransmission)
          }
        >
          <MenuItem value={"Shift"}>Shift</MenuItem>
          <MenuItem value={"Automatic"}>Automatic</MenuItem>
        </Select>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <p>Fetures:</p>
        </Grid>
        <Grid item xs={8} style={{ marginTop: 15 }}>
          <Autocomplete
            multiple
            id="tags-filled"
            onChange={(event:any,value:string[]) => multihandler(value,setFeatures)}
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
              <TextField
              {...params}
              variant="standard"
              placeholder="Features"
              />
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
        <Grid item xs={8} style={{ marginTop: 15 }}>
          <Autocomplete
            multiple
            onChange={(event:any,value:string[]) => multihandler(value,setGuidelines)}
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
              <TextField
                {...params}
                variant="standard"
                placeholder="Guideline"
              />
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
        <h2>Pricing:</h2>
        <p></p>
        <p>Price per day in $:</p>
        <TextField
          id="priceperday"
          type="number"
          label="price per day in dollors"
          variant="standard"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeHandler(event, setPricePerDay)
          }
        />
        <p>Distance per day in miles:</p>
        <TextField
          id="zip"
          type="number"
          label="distance per day in miles"
          variant="standard"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeHandler(event, setDistancePerDay)
          }
        />
        <h2>Car location:</h2>
        <p></p>
        <p>Street:</p>
        <TextField
          id="street"
          label="Street"
          variant="standard"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeHandler(event, setStreet)
          }
        />
        <p>Nr:</p>
        <TextField
          id="nr"
          label="Number"
          variant="standard"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeHandler(event, setNumber)
          }
        />
        <p>City:</p>
        <TextField
          id="city"
          label="City"
          variant="standard"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeHandler(event, setCity)
          }
        />
        <p>Zip:</p>
        <TextField
          id="zip"
          type="number"
          label="Zip"
          variant="standard"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeHandler(event, setZip)
          }
        />
        <p></p>
        <Button style={{ marginTop: 20, height: 40 }} variant="contained">
          <h2>Continue</h2>
        </Button>
      </Box>
    </Box>
  );
};

export default HostACar;
