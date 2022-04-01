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

const Editmodal = ({ user }: { user: User }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = React.useState<string | null>(user.dateOfBirth);

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
            <p>Username: </p>
            <TextField
              required
              id="outlined-required"
              label="Username:"
              defaultValue={user.userName}
            />
            <p>Firstname:</p>
            <TextField
              required
              id="outlined-required"
              label="Firstname:"
              defaultValue={user.firstName}
            />
            <p>Lastname:</p>
            <TextField
              required
              id="outlined-required"
              label="Lastname:"
              defaultValue={user.lastName}
            />
            <p>Email:</p>
            <TextField
              required
              id="outlined-required"
              label="Email:"
              defaultValue={user.email}
            />
            <p>Birthdate:</p>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Birthdate"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <p>Adress:</p>
            <p></p>
            <p>Steet:</p>
            <TextField
              required
              id="outlined-required"
              label="Street:"
              defaultValue={user.address.street}
            />
            <p>Nr:</p>
            <TextField
              required
              id="outlined-required"
              label="Street:"
              defaultValue={user.address.number}
            />
            <p>City:</p>
            <TextField
              required
              id="outlined-required"
              label="City:"
              defaultValue={user.address.city}
            />
            <p>Zip:</p>
            <TextField
              required
              type="number"
              id="outlined-required"
              label="Zip:"
              defaultValue={user.address.zip}
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

export default Editmodal;
