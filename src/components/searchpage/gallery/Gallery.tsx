import Box from "@mui/material/Box";
import CarCard from "./carcard/CarCard";
import { Link } from "react-router-dom";
import Car from "./../../../models/Car";

const Gallery = ({cars}:{cars:Car[]}) => (
    <div style={{display: "flex"}}>
        <Box
            sx={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)"}}
        >
            {cars.map((car, index) => (
                <Link to={`/car/${car.id}`} target="_blank" key={index}>
                    <CarCard key={car.id} car={car}/>
                </Link>
            ))}
        </Box>
    </div>
);

export default Gallery;