import React, { useState } from "react";
import Searchbar from "../searchbar/SearchBarNew";
import FiltersBar from "./filtersbar/FiltersBar";
import Gallery from "./gallery/Gallery";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";
import { RootState } from "./../../state/reducers/index";
import { SelectChangeEvent } from "@mui/material/Select";
import { Marker } from "@react-google-maps/api";
import markerimg from "./../../res/img/CarMapMarker.png";
import Car from './../../models/Car'

import GalleryMap from "./gallerymap/GalleryMap";

const googleMapsApiKey = "AIzaSyCyH9tROtDKihy8Pl6fuV4s7VBI0GVL2c8";

const Searchpage = ({
  handleLocationChange,
  location,
  handleTypeChange,
  type,
}: {
  handleLocationChange: any;
  location: any;
  handleTypeChange: any;
  type: string;
}) => {
  const dispatch = useDispatch();
  const { getAllCars, getAllCarsByCity } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const cars = useSelector((state: RootState) => state.car);

  const [carsMap, setCarsMap] = React.useState([]);

  const [fuel, setFuel] = useState("");
  const [seats, setSeats] = useState("");
  const [transmission, setTransmission] = useState("");
  const [doors, setDoors] = useState("");
  const [make, setMake] = useState("");

  React.useEffect(() => {
    if (location === "") {
      getAllCars();
    } else {
      getAllCarsByCity(location);
    }
  }, [location]);

  React.useEffect(() => {
    async function fetchData() {
      let carsForMap: any = await fetchCarsMap();
      console.log(carsForMap);
      setCarsMap(carsForMap);
    }
    fetchData();
  }, [cars,seats,doors,transmission,make,transmission]);

  type Cord = {
    lat: number
    lng: number
  }

  const fetchCarsMap = async () => {
    let cords = [];
    for (const carForMap of filteredCars(cars)) {
      let cord:Cord | void = await getGeocodeAddress(carForMap);
      if(cord !== undefined) {
        cords.push(cord);
      }
    }
    return cords;
  };

  const getGeocodeAddress = async (car: any): Promise<Cord | void > =>  {
    const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${car.address.street} ${car.address.number}, ${car.address.city}&key=${googleMapsApiKey}`;
    return await fetch(geocodingUrl)
      .then((result) => result.json())
      .then((response) => {
        if (response.status === "OK") {
          return response.results[0].geometry.location;
        }
      });
  };

  const [map, setMap] = useState<boolean>(false);
  const handleMap = () => setMap(!map);

  

  const handleFuelChange = (event: SelectChangeEvent) => {
    setFuel(event.target.value as string);
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
    handleTypeChange("");
    setSeats("");
    setTransmission("");
    setDoors("");
    setMake("");
  };

  const handleModalClear = () => {
    setDoors("");
    setMake("");
  };

  const filteredCars = (cars: Car[]) => {
    return cars
      .filter(
        (car) => fuel === "" || fuel === "None" || car.details.fuelType === fuel
      )
      .filter((car) => type === "" || type === "None" || car.type === type)
      .filter(
        (car) =>
          seats === "" ||
          Number(seats) === 0 ||
          car.details.seats === Number(seats)
      )
      .filter(
        (car) =>
          transmission === "" ||
          transmission === "None" ||
          car.details.transmission === transmission
      )
      .filter(
        (car) =>
          doors === "" ||
          Number(doors) === 0 ||
          car.details.doors === Number(doors)
      )
      .filter((car) => make === "" || make === "None" || car.make === make);
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
      <Searchbar
        handleLocationChange={handleLocationChange}
        location={location}
      />
      <FiltersBar
        fuel={fuel}
        handleFuelChange={handleFuelChange}
        cartype={type}
        handleCartypeChange={handleTypeChange}
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
      {map ? (
        <GalleryMap address={location} carsMap={carsMap} />
      ) : (
        <Gallery cars={filteredCars(cars)} />
      )}
    </div>
  );
};

export default Searchpage;
