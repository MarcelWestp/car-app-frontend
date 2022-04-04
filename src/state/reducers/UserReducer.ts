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
  payload: User;
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
    default:
      return state;
  }
};

export default reducer;
