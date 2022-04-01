const initialState: number = 0;

type Payload = {
  type: string;
  payload: number;
};

const reducer = (state = initialState, action: Payload) => {
  switch (action.type) {
    case "delteUserById":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;