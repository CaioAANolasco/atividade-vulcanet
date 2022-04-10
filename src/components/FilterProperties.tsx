import { Icon, ControlGroup, InputGroup } from "@blueprintjs/core";
import "./styles/filter-properties.scss";

const FilterProperties = () => {
	return (
		<div>
			<InputGroup
				large={true}
				leftIcon="filter"
				placeholder="Find properties"
				className="filter-container"
			/>
		</div>
	);
};

export default FilterProperties;
