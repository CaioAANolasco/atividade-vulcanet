import ActiveInfo, { ActiveInfoProps } from "./actives-components/ActiveInfo";

const ActiveList = () => {
	const jsonData: ActiveInfoProps[] = require("../ACTIVEINFO.json");

	return (
		<div>
			{jsonData.map((active) => {
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
