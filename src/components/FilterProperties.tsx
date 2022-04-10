import { Icon, ControlGroup, InputGroup } from "@blueprintjs/core";
import "./styles/filter-properties.scss";

const FilterProperties = () => {
	return (
		<div>
			<ControlGroup fill={true} className="filter-container">
				<Icon className="filter-icon" icon="filter" />
				<InputGroup
					className="filter-input"
					placeholder="Find properties ..."
				/>
			</ControlGroup>
		</div>
	);
};

export default FilterProperties;
