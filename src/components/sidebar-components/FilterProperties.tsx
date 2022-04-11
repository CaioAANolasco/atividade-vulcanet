import { InputGroup } from "@blueprintjs/core";
import "../styles/sidebar-styles/filter-properties.scss";

const FilterProperties = () => {
	return (
		<div>
			<InputGroup
				large={true}
				leftIcon="filter"
				placeholder="Find Properties..."
				className="filter-container"
			/>
		</div>
	);
};

export default FilterProperties;
