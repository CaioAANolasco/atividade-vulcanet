import { useAppSelector } from "../../app/hooks";
import TagsArea from "./TagsArea";

const allFilters = [
	"Status",
	"Time",
	"Assigness",
	"Watcher",
	"Counterparty",
	"Severity",
	"Source",
	"Trader",
];

const MenuFlags = () => {
	const sidebarFiltersSelected = useAppSelector(
		({ sidebarFilters: { filterInput } }) => {
			return allFilters.filter((sidebarFilter) => {
				return sidebarFilter.toLowerCase().includes(filterInput);
			});
		}
	);

	return (
		<div>
			{sidebarFiltersSelected.map((filter) => (
				<TagsArea text={filter} />
			))}
		</div>
	);
};

export default MenuFlags;
