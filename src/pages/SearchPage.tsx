import Search from '../components/searchpage/searchpage'

const SearchPage = ({handleLocationChange}:{ handleLocationChange:any}) => {
  return (
    <div>
        <Search handleLocationChange={handleLocationChange} />
    </div>
  )
}

export default SearchPage