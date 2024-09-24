
export default function SingleCard({keyNo,imgUrl,imgAltTag,countryName,population,region,capital}) {
	return (
		<>
			<a key={keyNo} className="country-card" href="/country.html?name=South Georgia">
				<img src={imgUrl} alt={imgAltTag} />
				<div className="card-text">
					<h3 className="card-title">{countryName}</h3>
					
					<p>
						<b>Population: </b>{population}
					</p>
					<p>
						<b>Region: </b>{region}
					</p>
					<p>
						<b>Capital: </b>{capital}
					</p>
				</div>
			</a>
		</>
	);
}
