import { combineReducers } from "redux";
import CarsReducer from "./carsReducer";
import CarByIdReducer from "./carByIdReducer";
import UserByIdReducer from "./userByIdReducer";
import UserValidateReducer from './userValidateReducer';

export const reducers = combineReducers({
    cars: CarsReducer,
    carById:CarByIdReducer,
    userById: UserByIdReducer,
    userValidate: UserValidateReducer,
})

export type RootState = ReturnType<typeof reducers>