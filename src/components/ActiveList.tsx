import ActiveInfo from "./actives-components/ActiveInfo";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useEffect, useMemo } from "react";
import { fetchActives } from "../app/actions-creators";
import ActiveInformation from "../ActiveInformation";
import { SortingFields } from "../SortingFields";
import { Intent } from "@blueprintjs/core";

// List of displayed Actives, applying filters and sorting according to current Redux state

const ActiveList = () => {
	const selectedActives = useAppSelector(
		({ actives: { actives, inputFilter, tagsFilter } }) => {
			// Read current Redux state actives and filters
			return actives.filter((active) => {
				//Filter actives arrays

				const selectedByName = active.activeInfo
					.toLowerCase()
					.includes(inputFilter);
				// Check if active name contains written substring

				let selectedByTag: boolean;
				if (tagsFilter.length === 0) {
					selectedByTag = true; // If there are no selected tags, there is no tag filter
				} else {
					selectedByTag = tagsFilter.includes(
						active.status.toLowerCase()
					); // Check if active status matches any of the selected tags
				}

				return selectedByName && selectedByTag; // If active matches title filter and tag filter, return true for filter inline function;
				// If not, false will be returned
			});
		}
	);

	let { sortBy, sortOrder } = useAppSelector((state) => state.actives); // Read sorting criteria from Redux state

	useMemo(() => {
		// Sorting is done in a useMemo hook to avoid sorting needlessly on every re-render
		const decreasingSeverity = [Intent.DANGER, Intent.WARNING, Intent.NONE]; // Order of severity priority
		if (sortBy === SortingFields.SEVERITY) {
			selectedActives.sort(
				(a, b) =>
					decreasingSeverity.indexOf(a.severity) >=
					decreasingSeverity.indexOf(b.severity)
						? 1 * sortOrder
						: -1 * sortOrder // Sort by index of severiy in by the priority established; if descending, swap the original ordering
			);
		} else {
			selectedActives.sort(
				(a, b) =>
					sortOrder *
					a[sortBy]
						.toLowerCase()
						.localeCompare(b[sortBy].toLowerCase())
				// Sort by string comparsionin of the selected criteria; if descending, swap the original ordering
			);
		}
	}, [sortBy, selectedActives, sortOrder]);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchActives);
	}, [dispatch]); // Call useEffect hook on component mount

	return (
		<div>
			{selectedActives.map((active: ActiveInformation) => {
				// Map filtered actives to render proper components
				return (
					<ActiveInfo
						activeInfo={active.activeInfo}
						severity={active.severity}
						status={active.status}
						trader={active.trader}
						counterparty={active.counterparty}
						book={active.book}
						source={active.source}
					/>
				);
			})}
		</div>
	);
};

export default ActiveList;
