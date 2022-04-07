import { combineReducers } from "redux";
import UserReducer from './UserReducer'
import CarReducer from './CarReducer'
import TripReducer from './TripReducer'

export const reducers = combineReducers({
    car: CarReducer,
    user: UserReducer,
    trip: TripReducer,
})

export type RootState = ReturnType<typeof reducers>