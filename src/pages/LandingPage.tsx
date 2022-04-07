import Hero from '../components/landingpage/hero/Hero'
import Destinations from '../components/landingpage/destinations/Destinations'
import CarTypes from '../components/landingpage/cartypes/CarTypes'

const landingPage = ({handleLocationChange,location,handleTypeChange}:{ handleLocationChange:any,location:string,handleTypeChange:any}) => {
  return (
    <div>
        <Hero handleLocationChange={handleLocationChange}  location={location} />
        <Destinations handleLocationChange={handleLocationChange}  />
        <CarTypes handleCarTypeChange={handleTypeChange} />
    </div>
  )
}

export default landingPage