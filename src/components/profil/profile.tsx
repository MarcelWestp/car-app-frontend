import { useState } from 'react';
import Box from '@mui/material/Box'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Profiledetail from './profiledetail/profiledetail';
import Profiletrips from './profiletrips/profiletrips';
import Profilehostcars from './profilehostcars/profilehostcars';
import Profilepayment from './profilepayment/profilepayment';
import Profiledelete from './profiledelete/profiledelete';
import User from './../../models/User';
import Contents from './../../models/profilecontents';

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import PaymentIcon from '@mui/icons-material/Payment';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Profile = ({ user }: { user: User }) => {

  const [content, setContent] = useState(Contents.PROFILE);

  return (
    <div className="profile">
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
      }}>

        <Box sx={{
          width: '100%',
          maxWidth: 200,
          minHeight: 800,
          maxHeight: 800,
          bgcolor: 'background.paper',
          gridColumn: 1
        }}>
          <nav aria-label="main profile-list">
            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={() => setContent(Contents.PROFILE)}>
                  <ListItemIcon>
                    <ManageAccountsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => setContent(Contents.TRIPS)}>
                  <ListItemIcon>
                    <CardTravelIcon />
                  </ListItemIcon>
                  <ListItemText primary="Booked trips" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => setContent(Contents.HOST)}>
                  <ListItemIcon>
                    <DirectionsCarIcon />
                  </ListItemIcon>
                  <ListItemText primary="Hosted cars" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
          <Divider />
          <nav aria-label="secondary profile list">
            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={() => setContent(Contents.PAYMENT)}>
                  <ListItemIcon>
                    <PaymentIcon />
                  </ListItemIcon>
                  <ListItemText primary="Paymant options" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => setContent(Contents.DELETE)}>
                  <ListItemIcon>
                    <DeleteForeverIcon />
                  </ListItemIcon>
                  <ListItemText primary="Delete Profile" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>

        <Box sx={{ gridColumn: 2 / 5 }}>
          {content === Contents.PROFILE && <Profiledetail user={user} />}
          {content === Contents.TRIPS && <Profiletrips user={user} />}
          {content === Contents.HOST && <Profilehostcars user={user} />}
          {content === Contents.PAYMENT && <Profilepayment user={user} />}
          {content === Contents.DELETE && <Profiledelete user={user} />}
        </Box>
      </Box>
    </div>
  );
}


export default Profile

