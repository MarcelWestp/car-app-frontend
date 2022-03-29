import React from 'react'
import User from './../../../models/User'
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


function Profilehostcars({user}: {user: User}) {
  return (
    <div>Profilehostcars
<Button  >
  <Link to="/hostacar">
    Host a Car
  </Link>
</Button>
    </div>
  )
}

export default Profilehostcars