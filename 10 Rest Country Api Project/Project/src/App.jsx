import "./App.css";
import CardsContainer from "./Components/CardsContainer";
import Header from "./Components/Header";
import SectionFilterAndSerach from "./Components/SectionFilterAndSerach";

export default function App() {
	return (
		<>
			<Header />
			<main>
				<SectionFilterAndSerach />
                <CardsContainer/>
			</main>
		</>
	);
}
