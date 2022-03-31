import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const Paymentform = ({
  setCardName,
  setCardNumber,
  setExpiryDate,
  setCvv,
}: {
  setCardName: Function;
  setCardNumber: Function;
  setExpiryDate: Function;
  setCvv: Function;
}) => {
  

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            onChange={(event:React.ChangeEvent<HTMLInputElement>) => setCardName(event.target.value as string)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            onChange={(event:React.ChangeEvent<HTMLInputElement>) => setCardNumber(event.target.value as string)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            onChange={(event:React.ChangeEvent<HTMLInputElement>) => setExpiryDate(event.target.value as string)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            onChange={(event:React.ChangeEvent<HTMLInputElement>) => setCvv(event.target.value as string)}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Paymentform;
