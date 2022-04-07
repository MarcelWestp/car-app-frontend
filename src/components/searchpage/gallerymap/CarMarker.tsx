import React from "react";
import { Marker, InfoWindow } from "@react-google-maps/api";
import CarCard from "./CarCard";
import { Link } from "react-router-dom";

const CarMarker = ({ele}:{ele:any}) => {
  const [select, setSelected] = React.useState(false);
  return (
    <Marker position={ele.cord} onClick={() => setSelected(!select)}>
      {select && (
        <InfoWindow position={ele.cord}>
<Link
                      to={`/car/${ele.car.id}`}
                      style={{ textDecoration: "none" }}
                    >

          <div>
            <CarCard car={ele.car} />
          </div>
                    </Link>
        </InfoWindow>
      )}
    </Marker>
  );
};

export default CarMarker;
