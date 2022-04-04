import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

const NewFooter = () => (
    <AppBar position="static" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
            <Box sx={{ display: 'flex' }}>
                <Typography
                    variant="h1"
                    noWrap
                    component="h1"
                >
                    CarDealer
                </Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ marginRight: 2 }}>
                <Typography component="h4" variant="h4">
                    <Link to={"#"}>
                        Terms
                    </Link>
                </Typography>
            </Box>
            <Box>
                <Typography component="h4" variant="h4">
                    <Link to={"#"}>
                        About us
                    </Link>
                </Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
                <Typography component="p" variant="body2">
                    &copy; {new Date().toLocaleString().substring(6, 10)} Cardealer
                </Typography>

            </Box>
        </Toolbar>
    </AppBar>
);

export default NewFooter