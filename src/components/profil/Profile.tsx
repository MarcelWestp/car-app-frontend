import { useState } from 'react';
import Box from '@mui/material/Box'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ProfileDetail from './profiledetail/ProfileDetail';
import ProfileTrips from './profiletrips/ProfileTrips';
import ProfileHostCars from './profilehostcars/ProfileHostCars';
import ProfileChangePassword from './profilechangepassword/ProfileChangePassword';
import ProfileDelete from './profiledelete/ProfileDelete';
import User from './../../models/User';
import Contents from '../../models/ProfileContents';

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {RootState} from "../../state/reducers";
import {useSelector} from "react-redux";

const Profile = () => {

  const [content, setContent] = useState(Contents.PROFILE);
  const user = useSelector((state: RootState) => state.user);

  return (
    <div className="profile">
      <Box sx={{
        display: 'flex',
        minHeight: '847px'
      }}>

        <Box sx={{
          width: '100%',
          maxWidth: 200,
          minHeight: 800,
          maxHeight: 800,
          bgcolor: 'background.paper',
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
                <ListItemButton onClick={() => setContent(Contents.PASSWORD)}>
                  <ListItemIcon>
                    <VpnKeyIcon />
                  </ListItemIcon>
                  <ListItemText primary="Change password" />
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

        <Box sx={{ display: 'flex', minWidth: '30%', maxWidth: '80%', margin: '20px auto'}}>
          {content === Contents.PROFILE && <ProfileDetail user={user} />}
          {content === Contents.TRIPS && <ProfileTrips user={user} />}
          {content === Contents.HOST && <ProfileHostCars user={user} />}
          {content === Contents.PASSWORD && <ProfileChangePassword user={user} />}
          {content === Contents.DELETE && <ProfileDelete user={user} />}
        </Box>
      </Box>
    </div>
  );
}


export default Profile

