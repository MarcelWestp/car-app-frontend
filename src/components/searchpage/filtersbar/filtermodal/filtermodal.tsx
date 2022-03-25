import { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

/*
    Filter
        Fuel
        Cartype
        Seats
        Transmission
        ------------
        Doors
        Makes
        (Model)
        (Features)
*/

const Filtermodal = ({ open, handleOpen }: { open: boolean, handleOpen: Function }) => {

    const [doors, setDoors] = useState('');
    const [make, setMake] = useState('');

    const handleDoorsChange = (event: SelectChangeEvent) => {
        setDoors(event.target.value as string);
    };
    const handleMakeChange = (event: SelectChangeEvent) => {
        setMake(event.target.value as string);
    };
    const handleClear = () => {
        setDoors('');
        setMake('');
    }


    return (
        <div>
            <div className="name">
                Filter
            </div>
            <Modal
                open={open}
                onClose={() => handleOpen()}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Filter
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Doors</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={doors}
                                    label="Doors"
                                    onChange={handleDoorsChange}
                                >
                                    <MenuItem value={0}>None</MenuItem>
                                    <MenuItem value={10}>2</MenuItem>
                                    <MenuItem value={20}>4</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ minWidth: 120, marginTop: 2 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Make</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={make}
                                    label="Make"
                                    onChange={handleMakeChange}
                                >
                                    <MenuItem value={0}>None</MenuItem>
                                    <MenuItem value={10}>Volkswagen</MenuItem>
                                    <MenuItem value={20}>Ford</MenuItem>
                                    <MenuItem value={30}>Bentley</MenuItem>
                                    <MenuItem value={50}>BMW</MenuItem>
                                    <MenuItem value={60}>Seat</MenuItem>
                                    <MenuItem value={70}>Audi</MenuItem>
                                    <MenuItem value={80}>Ferrari</MenuItem>
                                    <MenuItem value={90}>Tesla</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Button variant="outlined" size="medium" onClick={handleClear} sx={{ marginTop: 3 }}>Clear</Button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default Filtermodal