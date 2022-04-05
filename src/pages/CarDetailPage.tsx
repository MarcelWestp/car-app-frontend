import React from "react";
import CarDetails from "../components/car/CarDetails";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useParams } from "react-router-dom";
import { actionCreators } from "../state/index";
import { RootState } from "../state/reducers/index";
import User from "./../models/User";
import Car from "./../models/Car";

const Cardetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { getCarById, getUserById } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const initHost: User = {
    id: 0,
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    dateOfBirth: "",
    image: {
      id: 0,
      contentType: "",
      content: {
        type: 0,
        data: "",
      },
    },
    cars: [],
    bookings: [],
    address: {
      street: "",
      number: "",
      city: "",
      zip: 0,
    },
    ratings: [],
  };

  const initCar: Car  = {
    id: 0,
    hostUserId: 0,
    make: '',
    model: '',
    type: '',
    year: 0,
    images: [],
    details: {
        fuelType: '',
        seats: 0,
        doors: 0,
        hp: 0,
        transmission: ''
    },
    features: [],
    description: '',
    guidelines: [],
    ratings: [],
    pricePerDay: 0,
    distancePerDay: 0,
    bookings: [],
    address: {
        street: '',
        number: '',
        city: '',
        zip: 0
    }
  };

  const [host, setHost] = React.useState(initHost);
  const [car, setCar] = React.useState(initCar);

  async function fetchHost<User>(hostId: number): Promise<User> {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/user/${hostId}`);
    return await response.json();
  }

  async function fetchCar<Car>(): Promise<Car> {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/car/${id}`);
    return await response.json();
  }

  React.useEffect(() => {
    async function fetchData() {
      const carResponse:Car = await fetchCar();
      const userResponse: User = await fetchHost(carResponse.hostUserId);
      setHost(userResponse);
      setCar(carResponse);
    }
    fetchData();
  }, []);

  return (
    <div>
      <CarDetails car={car} user={host} />
    </div>
  );
};

export default Cardetail;
