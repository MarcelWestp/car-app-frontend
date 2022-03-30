import { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Filtermodal from './filtermodal/filtermodal'

import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

const Filtersbar = () => {

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
            <Box sx={{ minWidth: 150, maxWidth: 150, marginTop: 2 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"><LocalGasStationIcon/> Fuel</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={fuel}
                        label="Fuel"
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
            <Box sx={{ minWidth: 150, maxWidth: 150, marginTop: 2 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"><AirportShuttleIcon/> Cartype</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={cartype}
                        label="Cartype"
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
            <Box sx={{ minWidth: 150, maxWidth: 150, marginTop: 2 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"><EventSeatIcon/> Seats</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={seats}
                        label="Seats"
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
            <Box sx={{ minWidth: 150, maxWidth: 150, marginTop: 2 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"><MiscellaneousServicesIcon/> Transmission</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={transmission}
                        label="Transmission"
                        onChange={handleTransmissionChange}
                    >
                        <MenuItem value={"None"}>None</MenuItem>
                        <MenuItem value={"Automatic"}>Automatic</MenuItem>
                        <MenuItem value={"Shift"}>Shift</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Button variant="outlined" size="medium" startIcon={<FilterAltIcon />} onClick={handleOpen} sx={{ marginTop: 2 }}>
                <Filtermodal open={open} handleOpen={handleOpen} />
            </Button>
            <Button variant="outlined" size="medium" startIcon={<FilterAltOffIcon />} onClick={handleClear} sx={{ marginTop: 2 }}>Clear</Button>
        </div>
    )
}

export default Filtersbar