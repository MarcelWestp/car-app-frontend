import Trip from "../../models/Trip";
import Car from "../../models/Car";

const initialCar:Car ={
    id: 0,
    hostUserId: 0,
    make: "",
    model: "",
    type: "",
    year: 0,
    images: [],
    details: {
        fuelType: "",
        seats: 0,
        doors: 0,
        hp: 0,
        transmission: ""
    },
    features: [],
    description: "",
    guidelines: [],
    ratings: [],
    pricePerDay: 0,
    distancePerDay: 0,
    bookings: [],
    address: {
        street: "",
        number: "",
        city: "",
        zip: 0
    },
}

const initialState: Trip ={
    car: initialCar,
    from: new Date(),
    until: new Date(),
}

type Payload = {
    type: string;
    payload: Trip;
  };

  const reducer = (state = initialState, action: Payload) => {
    switch (action.type) {
      case "setTripDetails":
        return action.payload;
      case "clearTrip":
        return initialState;
      default:
        return state;
    }
  };
  
  export default reducer;
  