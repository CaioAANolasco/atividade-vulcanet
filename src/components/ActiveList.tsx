import ActiveInfo from "./actives-components/ActiveInfo";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useEffect } from "react";
import { fetchActives } from "../app/actions-creators";
import ActiveInformation from "../ActiveInformation";

const ActiveList = () => {
	const selectedActives = useAppSelector(
		({ actives: { actives, inputFilter } }) => {
			return actives.filter((active) => {
				return active.activeInfo.toLowerCase().includes(inputFilter);
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
