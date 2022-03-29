import { useState } from 'react'
import User from './../../../models/User'
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';

function Profiledelete({ user }: { user: User }) {

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
        <p>Are you sure you want to delete this profile?</p>
        <p>Confrim with yout password to delete this profile.</p>
        <Box
          sx={{
            display: "grid",
            gap: 1,
            gridTemplateColumns: "repeat(2, 1fr)",
            marginTop: 2,
          }}
        >
          <p>Username:</p>
          <TextField
            required
            fullWidth
            disabled
            name="username"
            type=""
            id="username"
            value={user.username}
          />
          <p>Password:</p>
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
}

export default Profiledelete