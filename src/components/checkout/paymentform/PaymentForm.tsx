import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const PaymentForm = ({
  setCardName,
  setCardNumber,
  setExpiryDate,
  setCvv,
  cardName,
  cardNumber,
  expiryDate,
  cvv
}: {
  setCardName: Function;
  setCardNumber: Function;
  setExpiryDate: Function;
  setCvv: Function;
  cardName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}) => {
  

  return (
    <Box sx={{ minHeight: '532px' }} >
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
            value={cardName}
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
            value={cardNumber}
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
            value={expiryDate}
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
            value={cvv}
            onChange={(event:React.ChangeEvent<HTMLInputElement>) => setCvv(event.target.value as string)}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaymentForm;
