import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import User from "./../../../models/User";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Typography from "@mui/material/Typography";

const EditModal = ({ user }: { user: User }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [dob, setDob] = React.useState<string | null>(user.dateOfBirth);
  const [firstName, setFirstName] = React.useState<string>(user.firstName);
  const [lastName, setLastName] = React.useState<string>(user.lastName);
  const [street, setStreet] = React.useState<string>(user.address.street);
  const [nr, setNr] = React.useState<string>(user.address.number);
  const [city, setCity] = React.useState<string>(user.address.city);
  const [zip, setZip] = React.useState<string>(String(user.address.zip));
 
  const handleChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    event.preventDefault();
    setter(event.target.value as string);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Edit Profile
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Profile:</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: "grid",
              gap: 1,
              gridTemplateColumns: "repeat(2, 1fr)",
              marginTop: 2,
            }}
          >
            <Typography component="p" variant="body2">
              Firstname:
            </Typography>
            <TextField
              required
              id="outlined-required"
              label="Firstname:"
              defaultValue={firstName}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleChangeHandler(event, setFirstName)
              }
            />
            <Typography component="p" variant="body2">
              Lastname:
            </Typography>
            <TextField
              required
              id="outlined-required"
              label="Lastname:"
              defaultValue={lastName}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleChangeHandler(event, setLastName)
              }
            />
            <Typography component="p" variant="body2">
              Birthdate:
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Birthdate"
                value={dob}
                onChange={(newValue) => {
                  setDob(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <Typography component="p" variant="body2">
              Adress:
            </Typography>
            <p></p>
            <Typography component="p" variant="body2">
              Steet:
            </Typography>
            <TextField
              required
              id="outlined-required"
              label="Street:"
              defaultValue={street}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleChangeHandler(event, setStreet)
              }
            />
            <Typography component="p" variant="body2">
              Nr:
            </Typography>
            <TextField
              required
              id="outlined-required"
              label="Number:"
              defaultValue={nr}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleChangeHandler(event, setNr)
              }
            />
            <Typography component="p" variant="body2">
              City:
            </Typography>
            <TextField
              required
              id="outlined-required"
              label="City:"
              defaultValue={city}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleChangeHandler(event, setCity)
              }
            />
            <Typography component="p" variant="body2">
              Zip:
            </Typography>
            <TextField
              required
              type="number"
              id="outlined-required"
              label="Zip:"
              defaultValue={zip}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleChangeHandler(event, setZip)
              }
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Edit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditModal;