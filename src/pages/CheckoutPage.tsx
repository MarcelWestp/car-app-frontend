import React from 'react';
import Checkout from "../components/checkout/checkout"
import { useSelector,useDispatch } from "react-redux"
import { bindActionCreators } from 'redux'
import { actionCreators } from "../state/index"
import { RootState } from '../state/reducers/index'

const CheckoutPage =() => {

  const dispatch = useDispatch();
  const { getAllCars } = bindActionCreators(actionCreators, dispatch);
  const cars = useSelector((state: RootState) => state.cars);

  React.useEffect( () => {
    getAllCars()
  },[]);

  const trip = {
    car: cars[0],
    from: new Date(),
    until: new Date(),
  }

  return (
    <div>
      <Checkout trip={trip}/>
    </div>
  )
}

export default CheckoutPage