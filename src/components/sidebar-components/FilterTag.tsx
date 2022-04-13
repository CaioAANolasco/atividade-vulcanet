import { Tag, Icon } from "@blueprintjs/core";
import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import "../styles/sidebar-styles/tags-area.scss";
import { addFilterByTag, removeFilterByTag } from "../../app/actions-creators";

interface FilterTagProps {
	tagID: string;
	handleRemove: (arg: string) => void;
}

const FilterTag: React.FC<FilterTagProps> = (props) => {
	const [selected, setSelected] = useState(false);
	const dispatch = useAppDispatch();

	const handleClickOnTag = (tagID: string) => {
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
			} `}
			data-id={props.tagID}
			onClick={(e) => handleClickOnTag(props.tagID)}
		>
			<Icon
				icon="small-cross"
				onClick={(e) => props.handleRemove(props.tagID)}
			></Icon>
			<label className="tag-text">{props.tagID}</label>
		</Tag>
	);
};

export default FilterTag;