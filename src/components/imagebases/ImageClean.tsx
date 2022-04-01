import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const ImageClean = styled(Box)(({ theme }) => ({
    position: 'relative',
    height: 350,
    width: 500,
    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
    },
}));

export default ImageClean