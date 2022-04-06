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
    case "deleteCarById":
      return action.payload;
    case "postCar":
      return action.payload;
    case "getCarById":
      return action.payload;
    case "getAllCarsByCity":
      return [...action.payload];
      case "getAllCars":
        return [...action.payload];
    default:
      return state;
  }
};

export default reducer;
