import TripDetails from "../tripdetails/TripDetails";
import Trip from "./../../../models/Trip";
import Payment from "./../../../models/Payment";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box"

const CheckoutDetails = ({
  trip,
  payment,
}: {
  trip: Trip;
  payment: Payment;
}) => {

  const theCardXXX = () => {
    let result = '';
    for (let i = 0; i < payment.cardNumber.length - 4; i++) {
      result = result.concat("X");
      if ((i + 1) % 4 === 0 && i !== 0) {
        result = result.concat("-");
      }
    }
    return result;
  }


  return (
    <Box >
      <TripDetails trip={trip} height='40vh' />
      <hr style={{
        border: 0,
        height: 0,
        borderTop: '1px solid rgba(0, 0, 0, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
        margin: '20px 0px'
      }}></hr>
      <Typography variant="h4" gutterBottom>
        Payment details:
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography component="p" variant="body2">
            Card holder:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography component="p" variant="body2">
            {payment.cardName}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography component="p" variant="body2">
            Card number:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography component="p" variant="body2">
            {theCardXXX() + payment.cardNumber.substring(
              payment.cardNumber.length - 4,
              payment.cardNumber.length
            )}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography component="p" variant="body2">
            Expiry date:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography component="p" variant="body2">
            {payment.expiryDate}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CheckoutDetails;
