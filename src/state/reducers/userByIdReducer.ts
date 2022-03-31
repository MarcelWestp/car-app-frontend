import User from "../../models/User";

const initialState: User  = {
    id: 0,
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    dob: new Date,
    picture: "",
    cars: [],
    booked: [],
    address: {
        street: '',
        nr: '',
        city: '',
        zip: 0
    }
};



type Payload = {
  type: string;
  payload: User;
};

const reducer = (state = initialState, action: Payload) => {
  switch (action.type) {
    case "getUserById":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;