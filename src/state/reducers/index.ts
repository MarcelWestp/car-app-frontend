import { combineReducers } from "redux";
import UserReducer from './UserReducer'
import CarReducer from './CarReducer'

export const reducers = combineReducers({
    car: CarReducer,
    user: UserReducer,
})

export type RootState = ReturnType<typeof reducers>