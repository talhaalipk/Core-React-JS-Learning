import React from "react";
import SingleCard from "./SingleCard";
import countryData from "../countryData"

export default function CardsContainer() {
	console.log(countryData[1]);
	// console.log(country.region);
	// console.log(country.capital[0]);

    const countriesCard = countryData.map((country,index)=>{
		// console.log(country.flags.png)
		// console.log(index)
        return (<SingleCard key={index} imgUrl={country.flags.svg} imgAltTag={country.flags.alt} countryName={country.name.common} population={country.population} region={country.region} capital={country.capital == undefined ? "" : country.capital[0]}/>)
    })

	return (
		<>
			<div className="countries-container">
				{countriesCard}
			</div>
		</>
	);
}
