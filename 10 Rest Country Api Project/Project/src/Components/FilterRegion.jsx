export default function FilterRegion({ setFilterCountry }) {
  return (
    <>
      <select
        onChange={(e) => {
          if (e.target.value == "Filter by Region") {
            setFilterCountry("");
          } else {
            setFilterCountry(e.target.value);
          }
        }}
        className="filter-by-region"
      >
        <option hidden="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </>
  );
}
