import Car from "../../models/Car";

const initialState: Car[] = [];

type Payload = {
  type: string;
  payload: Car[];
};

const reducer = (state = initialState, action: Payload) => {
  switch (action.type) {
    case "getAllCarsByCity":
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;
