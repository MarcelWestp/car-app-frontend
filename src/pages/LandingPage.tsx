import Hero from '../components/landingpage/hero/Hero'
import Destinations from '../components/landingpage/destinations/Destinations'
import CarTypes from '../components/landingpage/cartypes/CarTypes'

const landingPage = ({handleLocationChange}:{ handleLocationChange:any}) => {
  return (
    <div>
        <Hero handleLocationChange={handleLocationChange} />
        <Destinations />
        <CarTypes />
    </div>
  )
}

export default landingPage