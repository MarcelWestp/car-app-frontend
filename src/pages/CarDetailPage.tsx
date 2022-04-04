import React from "react";
import CarDetails from "../components/car/CarDetails";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useParams } from "react-router-dom";
import { actionCreators } from "../state/index";
import { RootState } from "../state/reducers/index";
import User from "./../models/User";

const Cardetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { getCarById, getUserById } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const carById = useSelector((state: RootState) => state.carById);

  const initialState: User = {
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

  const [carHost, setCarHost] = React.useState(initialState);

  async function fetchHost<User>(hostId: number): Promise<User> {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/user/${hostId}`);
    return await response.json();
  }

  React.useEffect(() => {
    getCarById(Number(id));
  }, []);

  React.useEffect(() => {
    async function fetchData() {
      const response: User = await fetchHost(carById.hostUserId);
      console.log(response);
      setCarHost(response);
    }
    fetchData();
  }, [carById]);


  return (
    <div>
      <CarDetails car={carById} user={carHost} />
    </div>
  );
};

export default Cardetail;
