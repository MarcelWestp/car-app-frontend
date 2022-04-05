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
            <Box sx={{ float: 'right', }}>
                <Box sx={{
                    display: 'grid',
                    gap: 3,
                    gridTemplateColumns: 'repeat(2, 1fr)',
                }}>
                    <Typography component="h2" variant="h2">
                        $ {car.pricePerDay} / Day
                    </Typography>
                    <Typography component="h2" variant="h2">
                        $ {estimatedPrice} est. total
                    </Typography>
                </Box>
                <Box sx={{
                    marginTop: 3,
                    marginBottom: 3
                }}>
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
                                    <Box sx={{ mx: 2 }}></Box>
                                    <TextField {...endProps} />
                                </React.Fragment>
                            )}
                        />
                    </LocalizationProvider>
                </Box>
                <hr style={{ borderTop: "1px solid grey" }}></hr>
                <Box sx={{
                    marginTop: 3, 
                    marginBottom: 3
                }}>
                    <Typography component="h5" variant="h5">
                        <b>Pick up & return Location</b>
                    </Typography>
                    <Typography component="p" variant="body2">
                        {car.address.zip} {car.address.city}, {car.address.street} {car.address.number}
                    </Typography>
                </Box>
                <Link to="/checkout" style={{ textDecoration: 'none' }} >
                    <Button
                        type="button"
                        variant="contained"
                        sx={{
                            marginLeft: "20%",
                            mb: 3,
                            width: "60%",
                            height: 40
                        }}>
                        Continue
                    </Button>
                </Link>
                <hr style={{ borderTop: "1px solid grey" }}></hr>
                <Box sx={{ marginTop: 3 }}>
                    <Typography component="p" variant="body2">
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