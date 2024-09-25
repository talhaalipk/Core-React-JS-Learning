import { useState } from "react";
import "./App.css";
import CardsContainer from "./Components/CardsContainer";
import Header from "./Components/Header";
import SectionFilterAndSerach from "./Components/SectionFilterAndSerach";

export default function App() {
  const [serchCountry, setserchCountry] = useState("");
  
  // console.log("App called");
  return (
    <>
      <Header />
      <main>
        <SectionFilterAndSerach setserchCountryfunc={setserchCountry} />
        <CardsContainer serchCountry={serchCountry} />
      </main>
    </>
  );
}
