import { Link } from "react-router-dom";

export default function SingleCard({
  keyNo,
  imgUrl,
  imgAltTag,
  countryName,
  population,
  region,
  capital,
}) {
  return (
    <>
      <Link key={keyNo} className="country-card" to={`/country/${countryName}`}>
        <img src={imgUrl} alt={imgAltTag} />
        <div className="card-text">
          <h3 className="card-title">{countryName}</h3>

          <p>
            <b>Population: </b>
            {population}
          </p>
          <p>
            <b>Region: </b>
            {region}
          </p>
          <p>
            <b>Capital: </b>
            {capital}
          </p>
        </div>
      </Link>
    </>
  );
}
