import ActiveInfo from "./actives-components/ActiveInfo";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useEffect } from "react";
import { fetchActives } from "../app/actions-creators";
import ActiveInformation from "../ActiveInformation";

const ActiveList = () => {
	const selectedActives = useAppSelector(
		({ actives: { actives, inputFilter, tagsFilter } }) => {
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
