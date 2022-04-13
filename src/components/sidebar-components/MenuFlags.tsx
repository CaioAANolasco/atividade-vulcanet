import { useAppSelector } from "../../app/hooks";
import TagsArea from "./TagsArea";

const allFilters = [
	{ filterName: "Status", tags: ["Open", "Closed", "Escalated"] },
	{ filterName: "Time", tags: [] },
	{ filterName: "Assignee", tags: [] },
	{ filterName: "Watcher", tags: [] },
	{ filterName: "Counterparty", tags: [] },
	{ filterName: "Severity", tags: [] },
	{ filterName: "Source", tags: [] },
	{ filterName: "Trader", tags: [] },
];

const MenuFlags = () => {
	const sidebarFiltersSelected = useAppSelector(
		({ sidebarFilters: { filterInput } }) => {
			return allFilters.filter((sidebarFilter) => {
				return sidebarFilter.filterName
					.toLowerCase()
					.includes(filterInput);
			});
		}
	);

	return (
		<div>
			{sidebarFiltersSelected.map((filter) => (
				<TagsArea text={filter.filterName} />
			))}
		</div>
	);
};

export default MenuFlags;
