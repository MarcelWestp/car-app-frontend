import * as React from 'react'
import Car from "../../../models/Car";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DateRangePicker, { DateRange } from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const Booking = ({ car }: { car: Car }) => {

    const [value, setValue] = React.useState<DateRange<Date>>([null, null]);

    return (
        <div>
            <Box sx={{}}>
                <Box sx={{
                    display: 'grid',
                    gap: 3,
                    gridTemplateColumns: 'repeat(2, 1fr)',
                }}>
                    <h3>$ {car.pricePerDay} / Day</h3>
                    <h3>$ {car.pricePerDay} est. total</h3>
                </Box>
                <Box sx={{ marginTop: 3 }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateRangePicker
                            startText="From"
                            endText="Until"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(startProps, endProps) => (
                                <React.Fragment>
                                    <TextField {...startProps} />
                                    <Box sx={{ mx: 2 }}>to</Box>
                                    <TextField {...endProps} />
                                </React.Fragment>
                            )}
                        />
                    </LocalizationProvider>
                </Box>
                <Box sx={{ marginTop: 2 }}>
                    <h4>Pick up & return Location</h4>
                    <p>{car.address.zip} {car.address.city}, {car.address.street} {car.address.number}</p>
                </Box>
                <Button
                    type="button"
                    variant="contained"
                    sx={{ mt: 3, mb: 2, width: 350 }}>
                    Continue
                </Button>
                <Box sx={{ marginTop: 2 }}>
                    <p>Distance included per day: {car.distancePerDay} miles</p>
                    <span style={{ fontSize: 10, color: 'grey' }}>$2 / mi fee for additional miles driven</span>
                </Box>
            </Box>
        </div>
    )
}

export default Booking