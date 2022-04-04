import { createTheme, styled } from '@mui/material/styles';
import Theme from './models/Theme'

const AppTheme = createTheme({
    palette: {
        primary: {
            main: '#02A676',
        },
        secondary: {
            main: '#00A991'
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
            fontWeight: 600
        },
        h3: { 
            fontSize: 24,
            fontWeight: 600
        },
        h4: { 
            fontSize: 20
        },
        h5: { 
            fontSize: 20
        },
        body1: {
            fontSize: 16
        },
        body2: {
            fontSize: 20
        }
    },
})

export default AppTheme
