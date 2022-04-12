import ActiveInfo from "./actives-components/ActiveInfo";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useEffect } from "react";
import { fetchActives } from "../app/actions-creators";

const ActiveList = () => {
	const actives = useAppSelector((state) => state.actives);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchActives);
	});

	return (
		<div>
			{actives.map((active) => {
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
