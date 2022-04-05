import User from '../../../models/User'
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProfileChangePassword = ({ user }: { user: User }) => {

    const [currentPassword, setCurrentPassword] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
    const [newPasswordConfrim, setNewPasswordConfrim] = useState<string>("");

    const handleChangeHandler = (
        event: React.ChangeEvent<HTMLInputElement>,
        setter: React.Dispatch<React.SetStateAction<string>>
    ) => {
        setter(event.target.value as string);
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
                        Current Password
                    </Typography>
                    <TextField
                        required
                        fullWidth
                        name="current-password"
                        label="Current Password"
                        type="password"
                        id="current-password"
                        autoComplete="new-password"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChangeHandler(event, setCurrentPassword)}
                    />
                    <Typography component="p" variant="body2">
                        New Password
                    </Typography>
                    <TextField
                        required
                        fullWidth
                        name="new-password"
                        label="New password"
                        type="password"
                        id="new-password"
                        autoComplete="new-password"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChangeHandler(event, setNewPassword)}
                    />
                    <Typography component="p" variant="body2">
                        Confrim password:
                    </Typography>
                    <TextField
                        required
                        fullWidth
                        name="confrim-password"
                        label="Confrim password"
                        type="password"
                        id="confrim-password"
                        autoComplete="new-password"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChangeHandler(event, setNewPasswordConfrim)}
                    />
                    <Box sx={{ gridColumn: 2 }}>
                        <Button
                            variant="contained"
                            disabled={newPassword !== newPasswordConfrim || newPassword === ""}
                        >
                            Confirm
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
};

export default ProfileChangePassword