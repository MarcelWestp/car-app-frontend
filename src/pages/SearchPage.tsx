import Search from "../components/searchpage/searchpage";

const SearchPage = ({
  handleLocationChange,
  location,
  handleTypeChange,
  type,
  setType,
}: {
  handleLocationChange: any;
  location: string;
  handleTypeChange: any;
  type: string;
  setType: any;
}) => {
  return (
    <div>
      <Search setType={setType} handleLocationChange={handleLocationChange} location={location} handleTypeChange={handleTypeChange} type={type}/>
    </div>
  );
};

export default SearchPage;
