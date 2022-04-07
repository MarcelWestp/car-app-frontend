import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TripDetails from "./tripdetails/TripDetails"
import PaymentForm from "./paymentform/PaymentForm"
import CheckoutDetails from "./checkoutdetails/CheckoutDetails"
import { Link } from 'react-router-dom'
import { RootState } from "../../state/reducers";
import { useSelector } from "react-redux";

const steps = ['Trip details', 'Payment details', 'Review your order'];

const Checkout = () => {

  const user = useSelector((state: RootState) => state.user);
  const trip = useSelector((state: RootState) => state.trip);

  const [cardName, setCardName] = React.useState<string>('');
  const [cardNumber, setCardNumber] = React.useState<string>('');
  const [expiryDate, setExpiryDate] = React.useState<string>('');
  const [cvv, setCvv] = React.useState<string>('');

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <TripDetails trip={trip} height='532px' />;
      case 1:
        return <PaymentForm
          setCardName={setCardName}
          setCardNumber={setCardNumber}
          setExpiryDate={setExpiryDate}
          setCvv={setCvv}
          cardName={cardName}
          cardNumber={cardNumber}
          expiryDate={expiryDate}
          cvv={cvv}
        />;
      case 2:
        return <CheckoutDetails trip={trip} payment={{ cardName: cardName, cardNumber: cardNumber, expiryDate: expiryDate, cvv: cvv }} />;
      default:
        throw new Error('Unknown step');
    }
  }

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if (activeStep === 1) {
      if (cardName !== "" && cardNumber !== "" && expiryDate !== "" && cvv !== "") {
        setActiveStep(activeStep + 1);
      }
    } else if(activeStep === 2) {
      
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4, minHeight: '768px' }}>
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
            <Box>
              <Typography variant="h5" gutterBottom>
                Have fun with your booked car
              </Typography>
              <Typography variant="subtitle1">
                Your trip has been booked. You can find information about your trips on your profile.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: 10 }}
              >
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }} >
                  Back to home
                </Link>
              </Button>
            </Box>
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
  )
}

export default Checkout