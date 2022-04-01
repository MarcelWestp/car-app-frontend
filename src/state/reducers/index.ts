import { combineReducers } from "redux";
import CarsReducer from "./CarsReducer";
import CarsByHostIdReducer from './CarsByHostIdReducer';
import CarsByCityReducer from './CarsByCityReducer';
import CarByIdReducer from "./CarByIdReducer";
import CarDeleteByIdReducer from './CarDeleteByIdReducer';
import CarAddReducer from './CarAddReducer';
import UserByIdReducer from "./UserByIdReducer";
import UserValidateReducer from './UserValidateReducer';
import UserAddReducer from './UserAddReducer';
import UserUpdateReducer from './UserUpdateReducer';
import UserDeleteByIdReducer from './UserDeleteByIdReducer';

export const reducers = combineReducers({
    cars: CarsReducer,
    carsByHostId:CarsByHostIdReducer,
    carsByCity: CarsByCityReducer,
    carById:CarByIdReducer,
    carDeleteById: CarDeleteByIdReducer,
    carAdd: CarAddReducer,
    userById: UserByIdReducer,
    userValidate: UserValidateReducer,
    userAdd: UserAddReducer,
    userUpdate: UserUpdateReducer,
    userDeleteById: UserDeleteByIdReducer,
})

export type RootState = ReturnType<typeof reducers>