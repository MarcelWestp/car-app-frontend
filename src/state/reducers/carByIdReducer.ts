import Car from "../../models/Car";

const initialState: Car  = {
    id: 0,
    hostUserId: 0,
    make: '',
    model: '',
    type: '',
    year: 0,
    images: [],
    details: {
        fuelType: '',
        seats: 0,
        doors: 0,
        hp: 0,
        transmission: ''
    },
    features: [],
    description: '',
    guidelines: [],
    ratings: [],
    pricePerDay: 0,
    distancePerDay: 0,
    bookings: [],
    address: {
        street: '',
        number: '',
        city: '',
        zip: 0
    }
};



type Payload = {
  type: string;
  payload: Car;
};

const reducer = (state = initialState, action: Payload) => {
  switch (action.type) {
    case "getCarById":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
