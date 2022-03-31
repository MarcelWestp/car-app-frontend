import { combineReducers } from "redux";
import CarsReducer from "./carsReducer";
import CarByIdReducer from "./carByIdReducer";
import UserByIdReducer from "./userByIdReducer";

export const reducers = combineReducers({
    cars: CarsReducer,
    carById:CarByIdReducer,
    userById: UserByIdReducer
})

export type RootState = ReturnType<typeof reducers>