import React from 'react'
import Searchbar from './searchbar/searchbar'
import Filtersbar from './filtersbar/filtersbar'
import Gallery from './gallery/gallery'

const Searchpage = () => {
  return (
    <div>
      <Searchbar />
      <Filtersbar />
      <Gallery />
    </div>
  )
}

export default Searchpage