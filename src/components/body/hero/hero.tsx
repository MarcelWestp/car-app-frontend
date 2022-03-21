import React from 'react'
import Searchbar from "./searchbar/searchbar"
import "./hero.css"

const Hero = () => {
  return (
    <div id="hero">
        <Searchbar/>
        <div className="title">
          <h2>Search for a new Adventure?</h2>
          <h3>Find the right car here!...</h3>
        </div>
    </div>
  )
}

export default Hero;