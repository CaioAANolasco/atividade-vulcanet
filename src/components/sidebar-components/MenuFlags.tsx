import { useAppSelector } from "../../app/hooks";
import TagsArea from "./TagsArea";

// Sidebar component to display possible subjects for filtering tags

const allFilters = [
	{ filterName: "Status", tags: ["Open", "Closed", "Escalated"] }, // Currently, only status flag has tag options
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
		} // Receive filter from redux state, and apply input over possible options
	);

	return (
		<div>
			{sidebarFiltersSelected.map((filter) => (
				<TagsArea
					text={filter.filterName}
					containingTags={filter.tags}
				/>
			))}
		</div>
	);
};

export default MenuFlags;
