import ActiveInfo from "./actives-components/ActiveInfo";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useEffect, useMemo } from "react";
import { fetchActives } from "../app/actions-creators";
import ActiveInformation from "../ActiveInformation";
import { SortingFields, SortTypes } from "../SortingFields";
import { Intent } from "@blueprintjs/core";

const ActiveList = () => {
	const selectedActives = useAppSelector(
		({ actives: { actives, inputFilter, tagsFilter } }) => {
			console.log("filtering");
			return actives.filter((active) => {
				const selectedByName = active.activeInfo
					.toLowerCase()
					.includes(inputFilter);

				let selectedByTag: boolean;
				if (tagsFilter.length === 0) {
					selectedByTag = true;
				} else {
					selectedByTag = tagsFilter.includes(
						active.status.toLowerCase()
					);
				}

				return selectedByName && selectedByTag;
			});
		}
	);

	let { sortBy, sortOrder } = useAppSelector((state) => state.actives);

	useMemo(() => {
		const decreasingSeverity = [Intent.DANGER, Intent.WARNING, Intent.NONE];
		if (sortBy === SortingFields.SEVERITY) {
			selectedActives.sort((a, b) =>
				decreasingSeverity.indexOf(a.severity) >=
				decreasingSeverity.indexOf(b.severity)
					? 1 * sortOrder
					: -1 * sortOrder
			);
		} else {
			selectedActives.sort(
				(a, b) =>
					sortOrder *
					a[sortBy]
						.toLowerCase()
						.localeCompare(b[sortBy].toLowerCase())
			);
		}
	}, [sortBy, selectedActives, sortOrder]);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchActives);
	}, [dispatch]);

	return (
		<div>
			{selectedActives.map((active: ActiveInformation) => {
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
