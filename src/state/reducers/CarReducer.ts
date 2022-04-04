import Car from "../../models/Car";

const initialState: Car[] = [];

type Payload = {
  type: string;
  payload: Car[];
};

const reducer = (state = initialState, action: Payload) => {
  switch (action.type) {
    case "getAllCarsByHostId":
      return [...action.payload];
    case "delteCarById":
      return action.payload;
   
    default:
      return state;
  }
};

export default reducer;
