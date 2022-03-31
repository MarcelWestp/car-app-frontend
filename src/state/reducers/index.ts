import { combineReducers } from "redux";
import CarsReducer from "./carsReducer";
import CarByIdReducer from "./carByIdReducer";

export const reducers = combineReducers({
    cars: CarsReducer,
    carById:CarByIdReducer
})

export type RootState = ReturnType<typeof reducers>