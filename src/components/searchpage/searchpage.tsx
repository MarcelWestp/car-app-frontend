import React from 'react'
import Searchbar from './../landingpage/hero/searchbar/searchbarNew'
import Filtersbar from './filtersbar/filtersbar'
import Gallery from './gallery/gallery'


const Searchpage = () => {
  return (
    <div style={{margin:"50px 10%"}}>
      <Searchbar />
      <Filtersbar />
      <Gallery />
    </div>
  )
}

export default Searchpage