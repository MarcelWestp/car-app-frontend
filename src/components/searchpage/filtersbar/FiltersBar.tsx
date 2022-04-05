import { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FilterModal from './filtermodal/FilterModal'
import { styled } from "@mui/material/styles";

import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

const MyLocalGasStationIcon = styled(LocalGasStationIcon)({
    "&.MuiSelect-iconOpen": {
      transform: "none"
    }
  });

const MyAirportShuttleIcon = styled(AirportShuttleIcon)({
    "&.MuiSelect-iconOpen": {
      transform: "none"
    }
  });

const MyEventSeatIcon = styled(EventSeatIcon)({
    "&.MuiSelect-iconOpen": {
      transform: "none"
    }
  });

const MyMiscellaneousServicesIcon = styled(MiscellaneousServicesIcon)({
    "&.MuiSelect-iconOpen": {
      transform: "none"
    }
  });


const FiltersBar = () => {

    const [fuel, setFuel] = useState('');
    const [cartype, setCartype] = useState('');
    const [seats, setSeats] = useState('');
    const [transmission, setTransmission] = useState('');
    const [open, setOpen] = useState(false);

    const handleFuelChange = (event: SelectChangeEvent) => {
        setFuel(event.target.value as string);
    };
    const handleCartypeChange = (event: SelectChangeEvent) => {
        setCartype(event.target.value as string);
    };
    const handleSeatsChange = (event: SelectChangeEvent) => {
        setSeats(event.target.value as string);
    };
    const handleTransmissionChange = (event: SelectChangeEvent) => {
        setTransmission(event.target.value as string);
    };
    const handleClear = () => {
        setFuel('');
        setCartype('');
        setSeats('');
        setTransmission('');
    }

    const handleOpen = () => setOpen(!open);

    return (       
        <div className="filtersbar" style={{ display: 'flex' }}>
            <Box sx={{ minWidth: 160, maxWidth: 160, marginTop: 2, display: 'flex' }}>
                <FormControl fullWidth>
                    <InputLabel id="fuel-filter-label" sx={{ display: 'flex' }} >Fuel</InputLabel>
                    <Select
                        labelId="fuel-filter-select-label"
                        id="fuel-filter-select"
                        value={fuel}
                        label="Fuel"
                        IconComponent={MyLocalGasStationIcon}
                        onChange={handleFuelChange}
                    >
                        <MenuItem value={"None"}>None</MenuItem>
                        <MenuItem value={"Gas"}>Gas</MenuItem>
                        <MenuItem value={"Electric"}>Electro</MenuItem>
                        <MenuItem value={"Diesel"}>Diesel</MenuItem>
                        <MenuItem value={"Petrol"}>Petrol</MenuItem>
                        <MenuItem value={"Hybrid"}>Hybrid</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ minWidth: 160, maxWidth: 160, marginTop: 2 }}>
                <FormControl fullWidth>
                    <InputLabel id="cartype-filter-label" sx={{ display: 'flex' }} >Cartype</InputLabel>
                    <Select
                        labelId="cartype-filter-select-label"
                        id="cartype-filter-select"
                        value={cartype}
                        label="Cartype"
                        IconComponent={MyAirportShuttleIcon}
                        onChange={handleCartypeChange}
                    >
                        <MenuItem value={"None"}>None</MenuItem>
                        <MenuItem value={"Luxery"}>Luxery</MenuItem>
                        <MenuItem value={"Classic"}>Classic</MenuItem>
                        <MenuItem value={"Sport"}>Sport</MenuItem>
                        <MenuItem value={"SUV"}>SUV</MenuItem>
                        <MenuItem value={"Cabrio"}>Cabrio</MenuItem>
                        <MenuItem value={"Van"}>Van</MenuItem>
                        <MenuItem value={"Cars"}>Cars</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ minWidth: 160, maxWidth: 160, marginTop: 2 }}>
                <FormControl fullWidth>
                    <InputLabel id="seats-filter-label" sx={{ display: 'flex' }} >Seats</InputLabel>
                    <Select
                        labelId="seats-filter-select-label"
                        id="seats-filter-select"
                        value={seats}
                        label="Seats"
                        IconComponent={MyEventSeatIcon}
                        onChange={handleSeatsChange}
                    >
                        <MenuItem value={0}>None</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ minWidth: 160, maxWidth: 160, marginTop: 2 }}>
                <FormControl fullWidth>
                    <InputLabel id="transmission-filter-label" sx={{ display: 'flex' }} >Transmission</InputLabel>
                    <Select
                        labelId="transmission-filter-select-label"
                        id="transmission-filter-select"
                        value={transmission}
                        label="Transmission"
                        IconComponent={MyMiscellaneousServicesIcon}
                        onChange={handleTransmissionChange}
                    >
                        <MenuItem value={"None"}>None</MenuItem>
                        <MenuItem value={"Automatic"}>Automatic</MenuItem>
                        <MenuItem value={"Shift"}>Shift</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Button variant="outlined" size="medium" startIcon={<FilterAltIcon />} onClick={handleOpen} sx={{ marginTop: 2 }}>
                <FilterModal open={open} handleOpen={handleOpen} />
            </Button>
            <Button variant="outlined" size="medium" startIcon={<FilterAltOffIcon />} onClick={handleClear} sx={{ marginTop: 2 }}>Clear</Button>
        </div>
    )
}

export default FiltersBar