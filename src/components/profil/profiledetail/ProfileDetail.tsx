import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import User from "./../../../models/User";
import EditModal from "./EditModal";
import Typography from "@mui/material/Typography";
import Placeholder from './../../../res/img/profilePlaceholder.jpeg'

const ProfileDetail = ({ user }: { user: User }) => {
  return (
    <div className="profiledetail">
      <Box sx={{ marginTop: 2, marginLeft: 5 }}>
        <Avatar
          alt="Mustermann"
          src={user.image === null ? Placeholder : `data:${user.image.contentType};base64,${user.image.content.data}`}
          sx={{ width: 128, height: 128 }}
        />
        <Box
          sx={{
            display: "grid",
            gap: 1,
            gridTemplateColumns: "repeat(2, 1fr)",
            marginTop: 2,
          }}
        >
          <Typography component="p" variant="body2">
            Username:
          </Typography>

          <Typography component="p" variant="body2">
            {user.userName}
          </Typography>

          <Typography component="p" variant="body2">
            Firstname:
          </Typography>

          <Typography component="p" variant="body2">
            {user.firstName}
          </Typography>

          <Typography component="p" variant="body2">
            Lastname:
          </Typography>

          <Typography component="p" variant="body2">
            {user.lastName}
          </Typography>

          <Typography component="p" variant="body2">
            Email:
          </Typography>

          <Typography component="p" variant="body2">
            {user.email}
          </Typography>

          <Typography component="p" variant="body2">
            Birthdate:
          </Typography>

          <Typography component="p" variant="body2">
            {user.dateOfBirth.toLocaleString().substring(0, 10)}
          </Typography>

          <Typography component="p" variant="body2">
            Adress:
          </Typography>

          <Typography component="p" variant="body2">
            {user.address.street} {user.address.number}
          </Typography>

          <Typography component="p" variant="body2">
            City:
          </Typography>

          <Typography component="p" variant="body2">
            {user.address.zip} {user.address.city}
          </Typography>

          <Box sx={{ gridColumn: 2 }}>
            <EditModal user={user} />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ProfileDetail;
