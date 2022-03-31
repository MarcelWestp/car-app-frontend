import Box from "@mui/material/Box";
import Carcard from "./carcard/carcard";
import { Link } from "react-router-dom";
import Car from "./../../../models/Car";

function Gallery({cars}:{cars:Car[]}) {
  return (
    <div style={{ display: "flex" }}>
      <Box
        sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}
      >
        {cars.map((car,index) => (
          <Link to={`/car/${car.id}`} target="_blank" key={index}>
            <Carcard key={car.id} car={car} />
          </Link>
        ))}
      </Box>
    </div>
  );
}

export default Gallery;
