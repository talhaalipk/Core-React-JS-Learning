import { useState } from "react";
import "./App.css";
import CardsContainer from "./Components/CardsContainer";
import Header from "./Components/Header";
import SectionFilterAndSerach from "./Components/SectionFilterAndSerach";

export default function App() {
  const [serchCountry, setserchCountry] = useState("");
  const [filterCountry, setFilterCountry] = useState("");
  
  // console.log("App called");
  return (
    <>
      <Header />
      <main>
        <SectionFilterAndSerach setserchCountryfunc={setserchCountry} setFilterCountry={setFilterCountry}/>
        <CardsContainer serchCountry={serchCountry} filterCountry={filterCountry}/>
      </main>
    </>
  );
}
