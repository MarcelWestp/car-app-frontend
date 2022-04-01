import Hero from '../components/landingpage/hero/Hero'
import Destinations from '../components/landingpage/destinations/Destinations'
import CarTypes from '../components/landingpage/cartypes/CarTypes'

const landingPage = () => {
  return (
    <div>
        <Hero />
        <Destinations />
        <CarTypes />
    </div>
  )
}

export default landingPage