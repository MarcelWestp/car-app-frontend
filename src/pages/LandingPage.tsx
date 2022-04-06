import Hero from '../components/landingpage/hero/Hero'
import Destinations from '../components/landingpage/destinations/Destinations'
import CarTypes from '../components/landingpage/cartypes/CarTypes'

const landingPage = ({handleLocationChange,location}:{ handleLocationChange:any,location:string}) => {
  return (
    <div>
        <Hero handleLocationChange={handleLocationChange}  location={location} />
        <Destinations />
        <CarTypes />
    </div>
  )
}

export default landingPage