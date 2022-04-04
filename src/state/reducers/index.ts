import { combineReducers } from "redux";
import CarsReducer from "./CarsReducer";
import CarsByHostIdReducer from './CarsByHostIdReducer';
import CarsByCityReducer from './CarsByCityReducer';
import CarByIdReducer from "./CarByIdReducer";
import CarDeleteByIdReducer from './CarDeleteByIdReducer';
import CarAddReducer from './CarAddReducer';
import UserAddReducer from './UserAddReducer';
import UserReducer from './UserReducer'

export const reducers = combineReducers({
    cars: CarsReducer,
    carsByHostId:CarsByHostIdReducer,
    carsByCity: CarsByCityReducer,
    carById:CarByIdReducer,
    carDeleteById: CarDeleteByIdReducer,
    carAdd: CarAddReducer,
    user: UserReducer,
    userAdd: UserAddReducer,
})

export type RootState = ReturnType<typeof reducers>