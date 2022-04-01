import PostUser from "../../models/PostUser";

const initialState: PostUser  = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    dateOfBirth: "",
    address: {
        street: '',
        number: '',
        city: '',
        zip: 0
    },
    ratings:[],
};

type Payload = {
  type: string;
  payload: PostUser;
};

const reducer = (state = initialState, action: Payload) => {
  switch (action.type) {
    case "postUser":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;