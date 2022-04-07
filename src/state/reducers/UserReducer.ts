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
    case "postBooking":
      let trips = [...state.bookings, action.payload];
      return {... state, bookings: trips};
    case "deleteBookingById":
      let booking = state.bookings.filter(e => e.id !== action.payload)
      return {...state, bookings: booking}
    default:
      return state;
  }
};

export default reducer;
