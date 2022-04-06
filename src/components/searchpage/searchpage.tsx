import React, { useState } from "react";
import Searchbar from "../searchbar/SearchBarNew";
import FiltersBar from "./filtersbar/FiltersBar";
import Gallery from "./gallery/Gallery";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";
import { RootState } from "./../../state/reducers/index";
import { SelectChangeEvent } from "@mui/material/Select";

const Searchpage = ({handleLocationChange,location}:{ handleLocationChange:any,location:string}) => {
  const dispatch = useDispatch();
  const { getAllCars,getAllCarsByCity } = bindActionCreators(actionCreators, dispatch);
  const cars = useSelector((state: RootState) => state.car);

  React.useEffect(() => {
    if(location === ""){
      getAllCars()
    }else{
      getAllCarsByCity(location)
    }
  }, [location]);

  const [map, setMap] = useState<boolean>(false);
  const handleMap = () => setMap(!map)


  const [fuel, setFuel] = useState("");
  const [cartype, setCartype] = useState("");
  const [seats, setSeats] = useState("");
  const [transmission, setTransmission] = useState("");
  const [doors, setDoors] = useState("");
  const [make, setMake] = useState("");

  const handleFuelChange = (event: SelectChangeEvent) => {
    setFuel(event.target.value as string);
  };
  const handleCartypeChange = (event: SelectChangeEvent) => {
    setCartype(event.target.value as string);
  };
  const handleSeatsChange = (event: SelectChangeEvent) => {
    setSeats(event.target.value as string);
  };
  const handleTransmissionChange = (event: SelectChangeEvent) => {
    setTransmission(event.target.value as string);
  };
  const handleDoorsChange = (event: SelectChangeEvent) => {
    setDoors(event.target.value as string);
  };
  const handleMakeChange = (event: SelectChangeEvent) => {
    setMake(event.target.value as string);
  };
  const handleClear = () => {
    setFuel("");
    setCartype("");
    setSeats("");
    setTransmission("");
    setDoors('');
    setMake('');
  };

  const handleModalClear = () => {
    setDoors('');
    setMake('');
}

  const filteredCars = () => {
    return cars
      .filter(
        (car) => fuel === "" || fuel === "None" || car.details.fuelType === fuel
      )
      .filter(
        (car) => cartype === "" || cartype === "None" || car.type === cartype
      )
      .filter(
        (car) => seats === "" || Number(seats) === 0 || car.details.seats === Number(seats)
      )
      .filter(
        (car) => transmission === "" || transmission === "None" || car.details.transmission === transmission
      )
      .filter(
        (car) => doors === "" || Number(doors) === 0 || car.details.doors === Number(doors)
      )
      .filter(
        (car) => make === "" || make === "None" || car.make === make
      );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px 0",
        minHeight: "83vh",
      }}
    >
      <Searchbar handleLocationChange={handleLocationChange} />
      <FiltersBar
        fuel={fuel}
        handleFuelChange={handleFuelChange}
        cartype={cartype}
        handleCartypeChange={handleCartypeChange}
        seats={seats}
        handleSeatsChange={handleSeatsChange}
        transmission={transmission}
        handleTransmissionChange={handleTransmissionChange}
        handleClear={handleClear}
        doors={doors}
        handleDoorsChange={handleDoorsChange}
        make={make}
        handleMakeChange={handleMakeChange}
        handleModalClear={handleModalClear}
        map={map}
        handleMap={handleMap}
      />
      <Gallery cars={filteredCars()} />
    </div>
  );
};

export default Searchpage;
