import React, {useState} from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import {styled} from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import {useSelector} from "react-redux";
import {RootState} from "./../../state/reducers/index";
import Typography from "@mui/material/Typography";

const responsive = {
    0: {items: 1},
    1600: {items: 2},
};

const Input = styled("input")({
    display: "none",
});

const HostACar = () => {
    const featuresArray = [
        "4x4",
        "Backup Camera",
        "Bluetooth",
        "Child seat",
        "GPS",
        "Keyless entry",
        "Heatet seats",
        "Leather seats",
        "USB charger",
    ];
    const guidelinesArray = ["no smoking", "no pets"];

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [make, setMake] = useState("Nizza");
    const [model, setModel] = useState("Salat");
    const [type, setType] = useState("Van");
    const [year, setYear] = useState("1986");
    const [fuelType, setFuel] = useState("Petrol");
    const [seats, setSeats] = useState("2");
    const [doors, setDoors] = useState("3");
    const [hp, setHp] = useState("126");
    const [transmission, setTransmission] = useState("Automatic");
    const [pricePerDay, setPricePerDay] = useState("12");
    const [distancePerDay, setDistancePerDay] = useState("144");
    const [street, setStreet] = useState("dorfstraße 11");
    const [number, setNumber] = useState("12");
    const [city, setCity] = useState("wob");
    const [zip, setZip] = useState("1586");
    const [description, setDescription] = useState("WAS EIN GEILES CAR!");


    const handleChangeHandler = (
        event: SelectChangeEvent | React.ChangeEvent<HTMLInputElement>,
        setter: React.Dispatch<React.SetStateAction<string>>
    ) => {
        event.preventDefault();
        setter(event.target.value as string);
    };

    const [features, setFeatures] = useState<string[]>([]);
    const [guidelines, setGuidelines] = useState<string[]>([]);

    const multihandler = (
        value: string[],
        setter: React.Dispatch<React.SetStateAction<string[]>>
    ) => {
        setter(value);
    };

    const user = useSelector((state: RootState) => state.user);

    const handleSubmit = async () => {
        if (
            make !== "" ||
            model !== "" ||
            type !== "" ||
            year !== "" ||
            fuelType !== "" ||
            seats !== "" ||
            doors !== "" ||
            hp !== "" ||
            transmission !== "" ||
            pricePerDay !== "" ||
            distancePerDay !== "" ||
            street !== "" ||
            number !== "" ||
            city !== "" ||
            zip !== ""
        ) {
            let addCar: any = {
                hostUserId: user.id,
                make,
                model,
                type,
                year: Number(year),
                details: {
                    fuelType,
                    seats: Number(seats),
                    doors: Number(doors),
                    hp: Number(hp),
                    transmission,
                },
                features,
                description,
                guidelines,
                ratings: [],
                pricePerDay: Number(pricePerDay),
                distancePerDay: Number(distancePerDay),
                bookings: [],
                address: {
                    street,
                    number,
                    city,
                    zip: Number(zip),
                },
            };
            const responseCar = await postCar(addCar);
            imageUploader(responseCar.id);
        }
    };

    async function postCar<Car>(carToPost: Car): Promise<Car | undefined> {
        console.log(carToPost);
        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/car`, {
                method: "POST",
                body: JSON.stringify(carToPost),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            });
            return await response.json();
        } catch (e) {
            console.log(e)
        }
    }

    const [input, setInput] = React.useState<any>();
    const [images, setImages] = React.useState<any>([]);
    const [userInfo, setuserInfo] = useState<any>("");

    const inputHandler = (e: any) => {
        e.preventDefault();
            console.log(images.length + "hallo inputhandler");
            let fileWihtIterator = {
                prop: e.target.files[0],
                [Symbol.iterator]() {
                    let values = Object.values(this);
                    let index = 0;
                    return {
                        next() {
                            if (index < values.length) {
                                let val = values[index];
                                index++;
                                return {value: val, done: false};
                            } else return {done: true};
                        }
                    }
                }
            }
            setImages((prev: any) => [...prev, fileWihtIterator]);
            setuserInfo({
                ...userInfo,
                file: e.target.files[0],
                filepreview: URL.createObjectURL(e.target.files[0]),
            });
    };

    const imageUploader = async (id: number) => {

        images.forEach((img: any) => {
            const formdata = new FormData();
            formdata.append("file", img.prop, img.prop.name);
            formdata.append("referenceId", `${id}`);
            formdata.append("type", "CAR");
            postImage(formdata);
            console.log(formdata);
        })
    };

    async function postImage(formdata: FormData): Promise<any | undefined> {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Basic Og==");
            const response = await fetch(
                `${process.env.REACT_APP_BASE_URL}/file/image`,
                {
                    method: "POST",
                    headers: myHeaders,
                    body: formdata,
                    redirect: "follow",
                }
            );
            if (response.status === 200) {
                console.log("UPLOAD COMPLETE")
            }
        } catch (e) {
            console.log(e)
        }
    }

    const displayImage = () => {

        console.log(images.length + "länge")
        return images.length > 0 ? images.map((img: any) => {
            console.log(img)
            let imageInfo = {
                ...userInfo,
                file: img.prop,
                filepreview: URL.createObjectURL(img.prop),
            }
            return (
                <img
                    className="previewimg"
                    src={imageInfo.filepreview}
                    alt="UploadImage"
                />
            )
        }) : [<img
            className="previewimg"
            src="https://via.placeholder.com/150"
            alt="UploadImage"
        />]
    }

    return (
        <Box style={{margin: "20px 20%", maxWidth: 800}}>
            <Typography component="h2" variant="h2">
                List your car
            </Typography>
            <Box style={{margin: "10px 0px 20px 0"}}>
                {<AliceCarousel
                    mouseTracking
                    items={displayImage()}
                    responsive={responsive}
                    disableButtonsControls={true}
                    infinite={true}
                    disableDotsControls={true}
                />}
                {/*{userInfo !== "" ? (*/}
                {/*  <img*/}
                {/*    className="previewimg"*/}
                {/*    src={userInfo.filepreview}*/}
                {/*    alt="UploadImage"*/}
                {/*  />*/}
                {/*) : (*/}
                {/*  <img*/}
                {/*    className="previewimg"*/}
                {/*    src="https://via.placeholder.com/150"*/}
                {/*    alt="UploadImage"*/}
                {/*  />*/}
                {/*)}*/}
                <label htmlFor="icon-button-file">
                    <Input
                        id="icon-button-file"
                        type="file"
                        value={input}
                        onChange={(e) => inputHandler(e)}
                    />
                    <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                    >
                        <Typography component="p" variant="body2">
                            Add image:
                        </Typography>
                        <PhotoCamera/>
                    </IconButton>
                </label>
            </Box>
            <Box
                sx={{
                    display: "grid",
                    gap: 3,
                    gridTemplateColumns: "repeat(2, 1fr)",
                    marginTop: 2,
                    marginBottom: 2,
                }}
            >
                <Typography component="h2" variant="h2">
                    Car:
                </Typography>
                <p></p>
                <Typography component="p" variant="body2">
                    Make:
                </Typography>
                <TextField
                    id="make"
                    label="Make"
                    variant="standard"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleChangeHandler(event, setMake)
                    }
                />
                <Typography component="p" variant="body2">
                    Model:
                </Typography>
                <TextField
                    id="model"
                    label="Model"
                    variant="standard"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleChangeHandler(event, setModel)
                    }
                />
                <Typography component="p" variant="body2">
                    Type:
                </Typography>
                <Select
                    labelId="type"
                    id="type"
                    value={type}
                    onChange={(event: SelectChangeEvent) =>
                        handleChangeHandler(event, setType)
                    }
                >
                    <MenuItem value={"Classic"}>Classic</MenuItem>
                    <MenuItem value={"Luxury"}>Luxury</MenuItem>
                    <MenuItem value={"Sport"}>Sport</MenuItem>
                    <MenuItem value={"SUV"}>SUV</MenuItem>
                    <MenuItem value={"Cabrio"}>Cabrio</MenuItem>
                    <MenuItem value={"Van"}>Van</MenuItem>
                    <MenuItem value={"Cars"}>Cars</MenuItem>
                </Select>
                <Typography component="p" variant="body2">
                    Year:
                </Typography>
                <TextField
                    id="year"
                    type="number"
                    label="Year"
                    variant="standard"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleChangeHandler(event, setYear)
                    }
                />
                <Typography component="p" variant="body2">
                    Fuel:
                </Typography>
                <Select
                    labelId="fuel"
                    id="fuel"
                    value={fuelType}
                    onChange={(event: SelectChangeEvent) =>
                        handleChangeHandler(event, setFuel)
                    }
                >
                    <MenuItem value={"Petrol"}>Petrol</MenuItem>
                    <MenuItem value={"Diesel"}>Diesel</MenuItem>
                    <MenuItem value={"Hybrid"}>Hybrid</MenuItem>
                    <MenuItem value={"Electric"}>Electric</MenuItem>
                    <MenuItem value={"Gas"}>Gas</MenuItem>
                </Select>
                <Typography component="p" variant="body2">
                    Seats:
                </Typography>
                <TextField
                    id="seats"
                    type="number"
                    label="Seats"
                    variant="standard"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleChangeHandler(event, setSeats)
                    }
                />
                <Typography component="p" variant="body2">
                    Doors:
                </Typography>
                <TextField
                    id="doors"
                    type="number"
                    label="Doors"
                    variant="standard"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleChangeHandler(event, setDoors)
                    }
                />
                <Typography component="p" variant="body2">
                    Hp:
                </Typography>
                <TextField
                    id="hp"
                    type="number"
                    label="Hp"
                    variant="standard"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleChangeHandler(event, setHp)
                    }
                />
                <Typography component="p" variant="body2">
                    Transmission:
                </Typography>
                <Select
                    labelId="transmission"
                    id="transmission"
                    value={transmission}
                    onChange={(event: SelectChangeEvent) =>
                        handleChangeHandler(event, setTransmission)
                    }
                >
                    <MenuItem value={"Shift"}>Shift</MenuItem>
                    <MenuItem value={"Automatic"}>Automatic</MenuItem>
                </Select>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Typography component="p" variant="body2">
                        Features:
                    </Typography>
                </Grid>
                <Grid item xs={8} style={{marginTop: 15}}>
                    <Autocomplete
                        multiple
                        id="tags-filled"
                        onChange={(event: any, value: string[]) =>
                            multihandler(value, setFeatures)
                        }
                        options={featuresArray.map((feature) => feature)}
                        freeSolo
                        renderTags={(value: readonly string[], getTagProps) =>
                            value.map((option: string, index: number) => (
                                <Chip
                                    variant="outlined"
                                    label={option}
                                    {...getTagProps({index})}
                                />
                            ))
                        }
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                placeholder="Features"
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Typography component="p" variant="body2">
                        Description:
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Button onClick={handleClickOpen}>Edit Description</Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Description</DialogTitle>
                        <DialogContent>
                            <TextareaAutosize
                                minRows={4}
                                placeholder="Your description..."
                                style={{width: 200}}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={handleClose}>Okay</Button>
                        </DialogActions>
                    </Dialog>
                </Grid>
                <Grid item xs={4}>
                    <Typography component="p" variant="body2">
                        Guidelines:
                    </Typography>
                </Grid>
                <Grid item xs={8} style={{marginTop: 15}}>
                    <Autocomplete
                        multiple
                        onChange={(event: any, value: string[]) =>
                            multihandler(value, setGuidelines)
                        }
                        id="tags-filled"
                        options={guidelinesArray.map((guideline) => guideline)}
                        freeSolo
                        renderTags={(value: readonly string[], getTagProps) =>
                            value.map((option: string, index: number) => (
                                <Chip
                                    variant="outlined"
                                    label={option}
                                    {...getTagProps({index})}
                                />
                            ))
                        }
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                placeholder="Guideline"
                            />
                        )}
                    />
                </Grid>
            </Grid>
            <Box
                sx={{
                    display: "grid",
                    gap: 3,
                    gridTemplateColumns: "repeat(2, 1fr)",
                    marginTop: 2,
                    marginBottom: 2,
                }}
            >
                <Typography component="h2" variant="h2">
                    Pricing:
                </Typography>
                <p></p>
                <Typography component="p" variant="body2">
                    Price per day in $:
                </Typography>
                <TextField
                    id="priceperday"
                    type="number"
                    label="price per day in dollors"
                    variant="standard"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleChangeHandler(event, setPricePerDay)
                    }
                />
                <Typography component="p" variant="body2">
                    Distance per day in miles:
                </Typography>
                <TextField
                    id="zip"
                    type="number"
                    label="distance per day in miles"
                    variant="standard"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleChangeHandler(event, setDistancePerDay)
                    }
                />
                <Typography component="h2" variant="h2">
                    Car location:
                </Typography>
                <p></p>
                <Typography component="p" variant="body2">
                    Street:
                </Typography>
                <TextField
                    id="street"
                    label="Street"
                    variant="standard"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleChangeHandler(event, setStreet)
                    }
                />
                <Typography component="p" variant="body2">
                    Nr:
                </Typography>
                <TextField
                    id="nr"
                    label="Number"
                    variant="standard"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleChangeHandler(event, setNumber)
                    }
                />
                <Typography component="p" variant="body2">
                    City:
                </Typography>
                <TextField
                    id="city"
                    label="City"
                    variant="standard"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleChangeHandler(event, setCity)
                    }
                />
                <Typography component="p" variant="body2">
                    Zip:
                </Typography>
                <TextField
                    id="zip"
                    type="number"
                    label="Zip"
                    variant="standard"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleChangeHandler(event, setZip)
                    }
                />
                <p></p>
                <Button style={{marginTop: 20, height: 40}} variant="contained" onClick={handleSubmit}>
                    <Typography component="h2" variant="h2">
                        Continue
                    </Typography>
                </Button>
            </Box>
        </Box>
    );
};

export default HostACar;
