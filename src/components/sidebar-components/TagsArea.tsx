import { Icon, Card } from "@blueprintjs/core";
import { useState } from "react";
import { removeFilterByTag } from "../../app/actions-creators";
import { useAppDispatch } from "../../app/hooks";
import "../styles/sidebar-styles/tags-area.scss";
import FilterTag from "./FilterTag";

// Expanding menu button from sidebar for tag filters

interface TagsAreaProps {
	text: String;
	containingTags?: string[];
}

const TagsArea: React.FC<TagsAreaProps> = (props: TagsAreaProps) => {
	const [openTags, setOpenTags] = useState(false); // Is the menu button selected?
	const [existingTags, setExistingTags] = useState(props.containingTags); // Tags included for this criteria
	const dispatch = useAppDispatch();

	const handleClick = () => {
		setOpenTags(!openTags);
	};

	const handleRemove = (removedTag: string) => {
		setExistingTags(existingTags?.filter((tag) => tag !== removedTag));
		dispatch(removeFilterByTag(removedTag)); // If a tag is removed, remove it also from redux state for filters
	};

	return (
		<div className="menu-button-container">
			<Card
				className="menu-button"
				elevation={2}
				onClick={handleClick}
				interactive={true}
			>
				<label>{props.text}</label>
				<Icon className="menu-icon" icon="chevron-right"></Icon>
			</Card>
			{openTags && ( // If button is selected, display tags
				<div className="tags-container">
					{existingTags?.map((tag) => (
						<FilterTag tagID={tag} handleRemove={handleRemove} />
					))}
				</div>
			)}
		</div>
	);
};

export default TagsArea;
