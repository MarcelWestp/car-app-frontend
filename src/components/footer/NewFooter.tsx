import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import theme from "./../../AppTheme"

const NewFooter = () => (
    <AppBar position="static" color="transparent" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
            <Box sx={{ display: 'flex' }}>
                <Typography
                    variant="h2"
                    noWrap
                    component="h2"
                    sx={{ fontWeight: '400' }}
                >
                     Car<span style={{ color: `${theme.palette.primary.main}` }}>To</span>Go
                </Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ marginRight: 2 }}>
                <Typography component={Link} variant="h4" to={"#"} style={{ textDecoration: 'none', fontWeight: 400, fontSize: '12px', color: "#898989" }} >
                    Terms
                </Typography>
            </Box>
            <Box>
                <Typography component={Link} variant="h4" to={"#"} style={{ textDecoration: 'none', fontWeight: 400, fontSize: '12px', color: "#898989" }} >
                    About us
                </Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
                <Typography component="p" variant="body2" sx={{ fontSize: '14px' }} >
                    &copy;{new Date().toLocaleString().substring(6, 10)} CarToGo
                </Typography>
            </Box>
        </Toolbar>
    </AppBar>
);

export default NewFooter