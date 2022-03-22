import React from 'react'
import Header from './../components/header/header'
import Footer from './../components/footer/footer'
import Hero from './../components/landingpage/hero/hero'
import Destinations from './../components/landingpage/destinations/destinations'
import Cartypes from './../components/landingpage/cartypes/cartypes'

const landingpage = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Destinations />
        <Cartypes />
        <Footer />
    </div>
  )
}

export default landingpage