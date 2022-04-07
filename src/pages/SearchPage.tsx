import Search from "../components/searchpage/searchpage";

const SearchPage = ({
  handleLocationChange,
  location,
  handleTypeChange,
  type,
}: {
  handleLocationChange: any;
  location: string;
  handleTypeChange: any;
  type: string;
}) => {
  return (
    <div>
      <Search handleLocationChange={handleLocationChange} location={location} handleTypeChange={handleTypeChange} type={type}/>
    </div>
  );
};

export default SearchPage;
