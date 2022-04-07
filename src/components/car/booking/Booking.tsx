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
import { RootState } from "./../../../state/reducers";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./../../../state/index";
import Trip from './../../../models/Trip'

const Booking = ({ car }: { car: Car }) => {

    const dispatch = useDispatch();
    const { setTripDetails } = bindActionCreators(
      actionCreators,
      dispatch
    );

    const user = useSelector((state: RootState) => state.user);

    const [value, setValue] = React.useState<DateRange<Date>>([new Date(), new Date()]);

    // @ts-ignore: Object is possibly 'undefined'.
    let estimatedPrice: number = (Math.abs(value[1]?.getTime() - value[0]?.getTime()) / (1000 * 60 * 60 * 24) + 1) * car.pricePerDay

    const handleCheckout = () => {
        let trip: Trip = {
            car: car,
            from: value[0],
            until: value[1]
        }
        setTripDetails(trip)
    }

    return (
        <div>
            <Box sx={{ float: 'right', }}>
                <Box sx={{
                    display: 'grid',
                    gap: 3,
                    gridTemplateColumns: 'repeat(2, 1fr)',
                }}>
                    <Typography component="h2" variant="h2">
                        $ {car.pricePerDay}
                        <span style={{ fontWeight: 300, fontSize: 15 }}> / Day</span>
                    </Typography>
                    <Typography component="h2" variant="h2">
                        $ {estimatedPrice}
                        <span style={{ fontWeight: 300, fontSize: 15 }}> est. total</span>
                    </Typography>
                </Box>
                <Box sx={{
                    marginTop: 3,
                    marginBottom: 3,
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
                <hr style={{
                    border: 0,
                    height: 0,
                    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                }} ></hr>
                <Box sx={{
                    marginTop: 3,
                    marginBottom: 3
                }}>
                    <Typography component="h3" variant="h3" mb={1}>
                        <b>Pick up & return Location</b>
                    </Typography>
                    <Typography component="p" variant="body2">
                        {car.address.zip} {car.address.city}, {car.address.street} {car.address.number}
                    </Typography>
                </Box>
                <Button
                    type="button"
                    variant="contained"
                    sx={{
                        marginLeft: "20%",
                        mb: 3,
                        width: "60%",
                        height: 40
                    }}
                    onClick={handleCheckout}
                    disabled={user.id === 0 && value[0] !== null && value[1] !== null}
                >
                    <Link to="/checkout" style={{ textDecoration: 'none', color: user.id === 0 ? 'black' : 'white' }} >
                        Continue
                    </Link>
                </Button>
                <hr style={{
                    border: 0,
                    height: 0,
                    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                }} ></hr>
                <Box sx={{ marginTop: 3 }}>
                    <Typography component="p" sx={{ fontSize: 15 }} variant="body2">
                        Distance included per day: {car.distancePerDay} miles
                    </Typography>
                    <Typography component="p" variant="caption" color={theme.palette.grey[600]}>
                        $2 / mi fee for additional miles driven
                    </Typography>
                </Box>
            </Box>
        </div >
    )
}

export default Booking