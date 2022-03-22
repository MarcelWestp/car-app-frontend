import React from 'react'
import Searchbar from "./searchbar/searchbar"
import "./hero.css"

const Hero = () => {
  return (
    <div id="hero">
        <Searchbar/>
        <div className="title">
          <h1>Search for a new Adventure?</h1>
          <h2>Find the right car here!...</h2>
        </div>
    </div>
  )
}

export default Hero;