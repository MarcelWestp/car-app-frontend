import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Trip from "./../../models/Trip"
import TripDetails from "./tripdetails/TripDetails"
import PaymentForm from "./paymentform/PaymentForm"
import CheckoutDetails from "./checkoutdetails/CheckoutDetails"

const steps = ['Trip details', 'Payment details', 'Review your order'];


const theme = createTheme();

const Checkout = ({trip}: {trip:Trip}) => {

    const [cardName,setCardName] = React.useState<string>('');
    const [cardNumber,setCardNumber] = React.useState<string>('');
    const [expiryDate,setExpiryDate] = React.useState<string>('');
    const [cvv,setCvv] = React.useState<string>('');
    
    const getStepContent = (step: number) => {
      switch (step) {
        case 0:
          return <TripDetails trip={trip} />;
        case 1:
          return <PaymentForm
          setCardName={setCardName}
          setCardNumber={setCardNumber}
          setExpiryDate={setExpiryDate}
          setCvv={setCvv} />;
        case 2:
          return <CheckoutDetails trip={trip} payment={{cardName: cardName, cardNumber: cardNumber, expiryDate: expiryDate, cvv: cvv}}/>;
        default:
          throw new Error('Unknown step');
      }
    }

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep(activeStep - 1);
      };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Book trip' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  )
}

export default Checkout