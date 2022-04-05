import { useState } from 'react'
import User from './../../../models/User'
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProfileDelete = ({ user }: { user: User }) => {

  const [password, setPassword] = useState<string>("");

  const handleChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value as string);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ marginTop: 2, }}>
        <Typography component="p" variant="body2">
          Are you sure you want to delete this profile?
        </Typography>
        <Typography component="p" variant="body2">
          Confrim with your password to delete this profile.
        </Typography>
        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: "repeat(2, 1fr)",
            marginTop: 2,
          }}
        >
          <Typography component="p" variant="body2">
            Username:
          </Typography>
          <TextField
            required
            fullWidth
            disabled
            name="username"
            type=""
            id="username"
            value={user.userName}
          />
          <Typography component="p" variant="body2">
            Password:
          </Typography>
          <TextField
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChangeHandler(event)}
          />
          <Box sx={{ gridColumn: 2 }}>
            <Button
              variant="contained"
              disabled={password !== user.password}
            >
              Confirm
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
};

export default ProfileDelete