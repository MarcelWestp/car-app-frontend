import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Images from "../../models/CarouselImages"
import ImageButton from '../imagebases/ImageButton';
import { Link } from "react-router-dom";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));

function Carousel({ images, doubleImg, handleChange }: { images: Images[], doubleImg: boolean, handleChange: any }) {

    const [imgNumber, setImgNumber] = React.useState(0);
    const [imgNumber2, setImgNumber2] = React.useState(1);

    const backwardsAction = () => {
        imgNumber - 1 < 0 ? setImgNumber(images.length - 1) : setImgNumber(imgNumber - 1);
        imgNumber2 - 1 < 0 ? setImgNumber2(images.length - 1) : setImgNumber2(imgNumber2 - 1);
    }

    const forwardsAction = () => {
        imgNumber + 1 > images.length - 1 ? setImgNumber(0) : setImgNumber(imgNumber + 1);
        imgNumber2 + 1 > images.length - 1 ? setImgNumber2(0) : setImgNumber2(imgNumber2 + 1);
    }

    return (
        <div style={{ display: 'flex', margin: '40px 0' }}>
            <Button variant="text" onClick={backwardsAction}>
                <ArrowBackIosIcon />
            </Button>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
                <Link to={images[imgNumber].url} onClick={() => handleChange(images[imgNumber].title)}>
                    <ImageButton
                        focusRipple
                        key={images[imgNumber].title}
                    >
                        <ImageSrc style={{ backgroundImage: `url(${images[imgNumber].src})` }} />
                        <ImageBackdrop className="MuiImageBackdrop-root" />
                        <Image>
                            <Typography
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                sx={{
                                    position: 'relative',
                                    p: 4,
                                    pt: 2,
                                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                }}
                            >
                                {images[imgNumber].title}
                                <ImageMarked className="MuiImageMarked-root" />
                            </Typography>
                        </Image>
                    </ImageButton>
                </Link>

                {doubleImg &&
                    <Link to={images[imgNumber2].url} onClick={() => handleChange(images[imgNumber2].title)} style={{ marginLeft: '20px' }}>
                        <ImageButton
                            focusRipple
                            key={images[imgNumber2].title}
                            sx={{ marginLeft: 1 }}
                        >
                            <ImageSrc style={{ backgroundImage: `url(${images[imgNumber2].src})` }} />
                            <ImageBackdrop className="MuiImageBackdrop-root" />
                            <Image>
                                <Typography
                                    component="span"
                                    variant="subtitle1"
                                    color="inherit"
                                    sx={{
                                        position: 'relative',
                                        p: 4,
                                        pt: 2,
                                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                    }}
                                >
                                    {images[imgNumber2].title}
                                    <ImageMarked className="MuiImageMarked-root" />
                                </Typography>
                            </Image>
                        </ImageButton>
                    </Link>}
                <Button variant="text" onClick={forwardsAction}>
                    <ArrowForwardIosIcon />
                </Button>
            </Box>
        </div>
    )
}

export default Carousel