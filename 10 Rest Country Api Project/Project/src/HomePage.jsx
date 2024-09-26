import { useState } from "react";
import "./App.css";
import CardsContainer from "./Components/CardsContainer";
import SectionFilterAndSerach from "./Components/SectionFilterAndSerach";

export default function HomePage() {
  const [serchCountry, setserchCountry] = useState("");
  const [filterCountry, setFilterCountry] = useState("");
  console.log("HomePage");
  // console.log("App called");
  return (
    <>
      <main>
        <SectionFilterAndSerach
          setserchCountryfunc={setserchCountry}
          setFilterCountry={setFilterCountry}
        />
        <CardsContainer
          serchCountry={serchCountry}
          filterCountry={filterCountry}
        />
      </main>
    </>
  );
}
