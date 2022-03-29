import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 350,
    width: 500,
    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
            backgroundColor: theme.palette.common.black,
        },
    },
}));

export default ImageButton