import { createTheme } from '@mui/material/styles';

const AppTheme = createTheme({
    breakpoints:{
        values:{
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1900
        }
    },
    palette: {
        primary: {
            main: '#02A676',
        },
        secondary: {
            light: '#FFD580',
            main: '#FFCE00'
        },
        grey: {
            600: "#757575"
        }
    },
    typography: {
        htmlFontSize: 16,
        fontSize: 12,
        h1: { 
            fontSize: 26,
            fontWeight: 500
        },
        h2: { 
            fontSize: 18,
            fontWeight: 700
        },
        h3: { 
            fontSize: 14,
            fontWeight: 700
        },
        h4: { 
            fontSize: 20
        },
        h5: { 
            fontSize: 20
        },
        h6: { 
            fontSize: 13,
            fontWeight: 600
        },
        body1: {
            fontSize: 16
        },
        body2: {
            fontSize: 16,
        },
        subtitle1: { 
            fontSize: 12,
        },
        subtitle2: { 
            fontSize: 12,
            fontWeight: 300
        },
        caption: {
            fontSize: 12,
        }
    },
})

export default AppTheme