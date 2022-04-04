import { createTheme, styled } from '@mui/material/styles';
import Theme from './models/Theme'

const AppTheme = createTheme({
    palette: {
        primary: {
            main: '#02A676',
        },
        secondary: {
            main: '#00A991'
        },
        grey: {
            600: "#757575"
        }
    },
    typography: {
        htmlFontSize: 16,
        fontSize: 12,
        h1: { 
            fontSize: 20
        },
        h2: { 
            fontSize: 36,
            fontWeight: 700
        },
        h3: { 
            fontSize: 20,
            fontWeight: 600
        },
        h4: { 
            fontSize: 20
        },
        h5: { 
            fontSize: 20
        },
        h6: { 
            fontSize: 14,
            fontWeight: 600
        },
        body1: {
            fontSize: 16
        },
        body2: {
            fontSize: 18
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