import React from 'react';
import Searchbar from '../searchbar/SearchBarNew'
import FiltersBar from './filtersbar/FiltersBar'
import Gallery from './gallery/Gallery'
import { useSelector,useDispatch } from "react-redux"
import { bindActionCreators } from 'redux'
import { actionCreators } from "../../state/index"
import { RootState } from './../../state/reducers/index'

const Searchpage = () => {
  const dispatch = useDispatch();
  const { getAllCars } = bindActionCreators(actionCreators, dispatch);
  const cars = useSelector((state: RootState) => state.car);

  React.useEffect( () => {
    getAllCars()
  },[]);

  return (
    <div style={{margin:"50px 10%"}}>
      <Searchbar />
      <FiltersBar />
      <Gallery cars={cars} />
    </div>
  )
}

export default Searchpage