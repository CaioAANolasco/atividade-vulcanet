import { InputGroup } from "@blueprintjs/core";
import { ChangeEvent } from "react";
import { useAppDispatch } from "../../app/hooks";
import "../styles/sidebar-styles/filter-properties.scss";
import { changeSidebarFilters } from "../../app/actions-creators";

const FilterProperties = () => {
	const dispatch = useAppDispatch();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(changeSidebarFilters(e.target.value));
	};

	return (
		<div>
			<InputGroup
				large={true}
				leftIcon="filter"
				placeholder="Find Properties..."
				className="filter-container"
				onChange={(e) => handleChange(e)}
			/>
		</div>
	);
};

export default FilterProperties;
