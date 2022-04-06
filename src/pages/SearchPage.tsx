import Search from '../components/searchpage/searchpage'

const SearchPage = ({handleLocationChange,location}:{ handleLocationChange:any,location:string}) => {
  return (
    <div>
        <Search handleLocationChange={handleLocationChange} location={location} />
    </div>
  )
}

export default SearchPage