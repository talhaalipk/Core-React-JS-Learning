import FilterRegion from "./FilterRegion";
import Search from "./Search";

export default function SectionFilterAndSerach() {
	return (
		<>
			<div className="search-filter-container">
				<Search />
				<FilterRegion />
			</div>
		</>
	);
}
