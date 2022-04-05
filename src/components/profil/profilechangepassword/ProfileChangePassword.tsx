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
                    Change your password
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        marginTop: 2,
                        flexDirection: 'column',
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography component="p" variant="body2">
                            Current password:
                        </Typography>
                        <TextField
                            required
                            fullWidth
                            name="current-password"
                            label="Current password"
                            type="password"
                            id="current-password"
                            autoComplete="current-password"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChangeHandler(event, setCurrentPassword)}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography component="p" variant="body2">
                            New password:
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
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography component="p" variant="body2">
                            Confirm password:
                        </Typography>
                        <TextField
                            required
                            fullWidth
                            name="new-password-confirm"
                            label="New password confirm"
                            type="password"
                            id="new-password-confrim"
                            autoComplete="new-password"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChangeHandler(event, setNewPasswordConfrim)}
                        />
                    </Box>
                    <Box sx={{ }}>
                        <Button
                            variant="contained"
                            disabled={newPassword !== newPasswordConfrim}
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