import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Gallery() {
    return (
        <div>
            <Container sx={{ marginTop: 5}}>
                <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                    <Box sx={{minWidth: 300, maxWidth: 300, marginTop: 2 }}>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Item>1</Item>
                        </Grid>
                    </Box>
                    <Box sx={{minWidth: 300, maxWidth: 300, marginTop: 2 }}>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Item>2</Item>
                        </Grid>
                    </Box>
                    <Box sx={{minWidth: 300, maxWidth: 300, marginTop: 2 }}>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Item>3</Item>
                        </Grid>
                    </Box>
                </Grid>
            </Container>
        </div>
    )
}

export default Gallery