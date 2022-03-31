import Car from "../../models/Car";

const initialState: Car[] = [];

type Payload = {
  type: string;
  payload: Car[];
};

const reducer = (state = initialState, action: Payload) => {
  switch (action.type) {
    case "getAllCars":
      console.log("IM REDUCER");
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;
