const initialState: number = 0;

type Payload = {
  type: string;
  payload: number;
};

const reducer = (state = initialState, action: Payload) => {
  switch (action.type) {
    case "delteCarById":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;