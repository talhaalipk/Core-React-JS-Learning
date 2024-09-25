import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
// import countryData from "../countryData";

export default function CardsContainer({ serchCountry, filterCountry }) {
	// countryData State
	const [countryData, setCountryData] = useState([]);

	// Fetech Country data from Api
	useEffect(() => {
		fetch(`https://restcountries.com/v3.1/all`)
			.then((res) => res.json())
			.then((res) => {
				setCountryData(res);
			});
	}, []);

	//Filtered Country
	const fileredCountryData = countryData.filter((country) => {
		console.log(country.name.common
			.toLocaleLowerCase()
			.includes(serchCountry.toLocaleLowerCase()))
		console.log(country.region
			.toLocaleLowerCase()
			.includes(filterCountry.toLocaleLowerCase()))
		return (
			country.name.common
				.toLocaleLowerCase()
				.includes(serchCountry.toLocaleLowerCase()) &&
			country.region
				.toLocaleLowerCase()
				.includes(filterCountry.toLocaleLowerCase())
		);
	});

	// console.log(countryData)
	// console.log(fileredCountryData)

	const countriesCard = fileredCountryData.map((country, index) => {
		return (
			<SingleCard
				key={index}
				imgUrl={country.flags.svg}
				imgAltTag={country.flags.alt}
				countryName={country.name.common}
				population={country.population}
				region={country.region}
				capital={country.capital == undefined ? "" : country.capital[0]}
			/>
		);
	});

	// console.log(countriesCard)

	return (
		<>
			<div className="countries-container">{countriesCard}</div>
		</>
	);
}
