import User from "../../models/User";

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

type Payload = {
  type: string;
  payload: any;
};



const reducer = (state = initialState, action: Payload) => {
  switch (action.type) {
    case "getUserById":
      return action.payload;
    case "updateUser":
      return action.payload;
    case "getValidateUser":
      return action.payload;
    case "logoutUser":
      return initialState;
    case "postUser":
      return action.payload;
    case "deleteCarById":
      let deleteCar = state.cars.filter(car => car.id !== action.payload)
      return { ...state, cars: deleteCar }
    case "postBooking":
      let trips = [...state.bookings, action.payload];
      return { ...state, bookings: trips };
    case "deleteBookingById":
      let booking = state.bookings.filter(trip => trip.id !== action.payload)
      return { ...state, bookings: booking }
    case "postCar":
      let cars = [...state.cars, action.payload]
      return { ...state, cars: cars }
    default:
      return state;
  }
};

export default reducer;
