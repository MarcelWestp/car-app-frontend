import * as React from 'react'
import Car from "../../../models/Car";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import DateRangePicker, { DateRange } from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Link } from "react-router-dom";
import theme from './../../../AppTheme'

const Booking = ({ car }: { car: Car }) => {

    const [value, setValue] = React.useState<DateRange<Date>>([new Date(), new Date()]);

    // @ts-ignore: Object is possibly 'undefined'.
    let estimatedPrice: number = (Math.abs(value[1]?.getTime() - value[0]?.getTime()) / (1000 * 60 * 60 * 24) + 1) * car.pricePerDay

    return (
        <div>
            <Box sx={{}}>
                <Box sx={{
                    display: 'grid',
                    gap: 3,
                    gridTemplateColumns: 'repeat(2, 1fr)',
                }}>
                    <Typography component="h3" variant="h3">
                        $ {car.pricePerDay} / Day
                    </Typography>
                    <Typography component="h3" variant="h3">
                        $ {estimatedPrice} est. total
                    </Typography>
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
                    <Typography component="h4" variant="h4">
                        <b>Pick up & return Location</b>
                    </Typography>
                    <Typography component="p" variant="body2">
                        {car.address.zip} {car.address.city}, {car.address.street} {car.address.number}
                    </Typography>
                </Box>
                <Link to="/checkout">
                    <Button
                        type="button"
                        variant="contained"
                        sx={{ mt: 3, mb: 2, width: 350 }}>
                        Continue
                    </Button>
                </Link>
                <Box sx={{ marginTop: 2 }}>
                    <Typography component="h3" variant="h3">
                        Distance included per day: {car.distancePerDay} miles
                    </Typography>
                    <Typography component="p" variant="caption" color={theme.palette.grey[600]}>
                        $2 / mi fee for additional miles driven
                    </Typography>
                </Box>
            </Box>
        </div>
    )
}

export default Booking