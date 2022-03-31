import Tripdetails from "./../tripdetails/tripdetails";
import Trip from "./../../../models/Trip";
import Payment from "./../../../models/Payment";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Checkoutdetails = ({
  trip,
  payment,
}: {
  trip: Trip;
  payment: Payment;
}) => {
  
  const theCardXXX = () => {
    let result = '';
    for(let i = 0; i < payment.cardNumber.length -4; i++) {
      result = result.concat("X");
      if((i+1) % 4 === 0 && i !== 0){
        result = result.concat("-");
      }
    }
    return result;
  }
  
  
  return (
    <div>
      <Tripdetails trip={trip} />
      <hr style={{ margin: "20px 0px"}}></hr>
      <Typography variant="h4" gutterBottom>
        Payment details:
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <p>
            <b>Card holder: </b>
          </p>
        </Grid>
        <Grid item xs={6}>
          <p>{payment.cardName}</p>
        </Grid>
        <Grid item xs={6}>
          <p>
            <b>Card number: </b>
          </p>
        </Grid>
        <Grid item xs={6}>
          <p>
            {theCardXXX() + payment.cardNumber.substring(
              payment.cardNumber.length - 4,
              payment.cardNumber.length
            )}
          </p>
        </Grid>
        <Grid item xs={6}>
          <p>
            <b>Expiry Date: </b>
          </p>
        </Grid>
        <Grid item xs={6}>
          <p>{payment.expiryDate}</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Checkoutdetails;
