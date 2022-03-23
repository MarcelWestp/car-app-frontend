import {useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
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
        Doors
        Transmission
        Fuel
        ------------
        Seats
        Cartype
        Makes
        (Model)
        (Features)
*/

const Filtermodal = ({ open, handleOpen }: { open: boolean, handleOpen: Function }) => {
    
    const [make, setMake] = useState('');
    const [cartype, setCartype] = useState('');
    
    const handleMakeChange = (event: SelectChangeEvent) => {
        setMake(event.target.value as string);
      };
    const handleCartypeChange = (event: SelectChangeEvent) => {
        setCartype(event.target.value as string);
      };


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
                                <InputLabel id="demo-simple-select-label">Cartype</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={cartype}
                                    label="Cartype"
                                    onChange={handleCartypeChange}
                                >
                                    <MenuItem value={10}>Luxery</MenuItem>
                                    <MenuItem value={20}>Oldtimer</MenuItem>
                                    <MenuItem value={30}>SUV</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Make</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={make}
                                    label="Make"
                                    onChange={handleMakeChange}
                                >
                                    <MenuItem value={10}>Volkswagen</MenuItem>
                                    <MenuItem value={20}>Ford</MenuItem>
                                    <MenuItem value={30}>Bentley</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default Filtermodal