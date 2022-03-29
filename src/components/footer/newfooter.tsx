import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

function Newfooter() {
    return (
        <AppBar position="static" color="primary" sx={{ top: 'auto', bottom: 0 }}>
            <Toolbar>
                <Box sx={{ display: 'flex' }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                    >
                        <h1>
                            <span>C</span>ar<span>D</span>ealer
                        </h1>
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ marginRight: 2 }}>
                    <Link to={"#"}>
                        <h4 style={{ color: 'white' }}>
                            Terms
                        </h4>
                    </Link>
                </Box>
                <Box>
                    <Link to={"#"}>
                        <h4 style={{ color: 'white' }}>
                            About us
                        </h4>
                    </Link>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Box>
                    <h3>&copy; {new Date().toLocaleString().substring(6, 10)}</h3>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Newfooter