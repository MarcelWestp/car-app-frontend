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
            <Typography component="p" variant="body2">
              Firstname:
            </Typography>
            <TextField
              required
              id="outlined-required"
              label="Firstname:"
              defaultValue={user.firstName}
            />
            <Typography component="p" variant="body2">
              Lastname:
            </Typography>
            <TextField
              required
              id="outlined-required"
              label="Lastname:"
              defaultValue={user.lastName}
            />
            <Typography component="p" variant="body2">
              Birthdate:
            </Typography>
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
              defaultValue={user.address.street}
            />
            <Typography component="p" variant="body2">
              Nr:
            </Typography>
            <TextField
              required
              id="outlined-required"
              label="Street:"
              defaultValue={user.address.number}
            />
            <Typography component="p" variant="body2">
              City:
            </Typography>
            <TextField
              required
              id="outlined-required"
              label="City:"
              defaultValue={user.address.city}
            />
            <Typography component="p" variant="body2">
              Zip:
            </Typography>
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

export default EditModal;
