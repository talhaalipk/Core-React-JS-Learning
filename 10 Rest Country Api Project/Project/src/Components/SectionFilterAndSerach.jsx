import FilterRegion from "./FilterRegion";
import Search from "./Search";

export default function SectionFilterAndSerach({ setserchCountryfunc,setFilterCountry }) {
  return (
    <>
      <div className="search-filter-container">
        <Search setserchCountryfunc={setserchCountryfunc} />
        <FilterRegion setFilterCountry={setFilterCountry}/>
      </div>
    </>
  );
}
