import { combineReducers } from "redux";
import CarReducer from "./carReducer";

export const reducers = combineReducers({
    cars: CarReducer
})

export type RootState = ReturnType<typeof reducers>