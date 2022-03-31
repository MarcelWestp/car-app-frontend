import React from 'react';
import Searchbar from '../searchbar/searchbarNew'
import Filtersbar from './filtersbar/filtersbar'
import Gallery from './gallery/gallery'
import { useSelector,useDispatch } from "react-redux"
import { bindActionCreators } from 'redux'
import { actionCreators } from "../../state/index"
import { RootState } from './../../state/reducers/index'

const Searchpage = () => {
  const dispatch = useDispatch();
  const { getAllCars } = bindActionCreators(actionCreators, dispatch);
  const cars = useSelector((state: RootState) => state.cars);

  React.useEffect( () => {
    getAllCars()
  },[]);

  return (
    <div style={{margin:"50px 10%"}}>
      <Searchbar />
      <Filtersbar />
      <Gallery cars={cars} />
    </div>
  )
}

export default Searchpage