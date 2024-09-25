export default function Search({ setserchCountryfunc }) {
  return (
    <>
      <div className="search-container">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          onChange={(e) => {
            // console.log(e.target.value)
            setserchCountryfunc(e.target.value.toLowerCase());
          }}
          type="text"
          placeholder="Search for a country..."
        />
      </div>
    </>
  );
}
