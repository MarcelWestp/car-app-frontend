import React from 'react'
import User from './../../../models/User'
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";

function Profiledelete({ user }: { user: User }) {
  return (
    <Box sx={{ display: 'flex'}}>
      <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ marginTop: 2, }}>
              <p>Are you sure you want to delete this profile?</p>
              <p>Confrim with yout password to delete this profile.</p>
          </Box>
      <Box
        sx={{
          display: "grid",
          gap: 1,
          gridTemplateColumns: "repeat(2, 1fr)",
          marginTop: 2,
        }}
      >
        <p>Password:</p>
        <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
      </Box>
    </Box>
  )
}

export default Profiledelete