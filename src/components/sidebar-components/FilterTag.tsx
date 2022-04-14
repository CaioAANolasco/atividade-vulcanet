import { Tag, Icon } from "@blueprintjs/core";
import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import "../styles/sidebar-styles/tags-area.scss";
import { addFilterByTag, removeFilterByTag } from "../../app/actions-creators";

// Tag component to display avaible tags from a selected filter;

interface FilterTagProps {
	tagID: string;
	handleRemove: (arg: string) => void;
}

const FilterTag: React.FC<FilterTagProps> = (props) => {
	const [selected, setSelected] = useState(false);
	const dispatch = useAppDispatch();

	const handleClickOnTag = (tagID: string) => {
		// If unselected tag is clicked, add the tag filter to state; If tag is selected, remove it.
		selected
			? dispatch(removeFilterByTag(tagID))
			: dispatch(addFilterByTag(tagID));
		setSelected(!selected);
	};

	return (
		<Tag
			large={true}
			className={` tag ${
				selected ? "tag-selected" : "tag-not-selected"
			} `} // Change tag display depending on selected state
			data-id={props.tagID}
			onClick={(e) => handleClickOnTag(props.tagID)}
		>
			<Icon
				icon="small-cross"
				onClick={(e) => props.handleRemove(props.tagID)}
				// Display cross icon to deleted tag if desired.
			></Icon>
			<label className="tag-text">{props.tagID}</label>
		</Tag>
	);
};

export default FilterTag;
