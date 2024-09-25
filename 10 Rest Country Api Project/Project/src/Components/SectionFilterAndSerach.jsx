import FilterRegion from "./FilterRegion";
import Search from "./Search";

export default function SectionFilterAndSerach({ setserchCountryfunc }) {
  return (
    <>
      <div className="search-filter-container">
        <Search setserchCountryfunc={setserchCountryfunc} />
        <FilterRegion />
      </div>
    </>
  );
}
