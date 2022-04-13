import { Icon, Card } from "@blueprintjs/core";
import { useState } from "react";
import { removeFilterByTag } from "../../app/actions-creators";
import { useAppDispatch } from "../../app/hooks";
import "../styles/sidebar-styles/tags-area.scss";
import FilterTag from "./FilterTag";

interface TagsAreaProps {
	text: String;
	containingTags?: string[];
}

const TagsArea: React.FC<TagsAreaProps> = (props: TagsAreaProps) => {
	const [openTags, setOpenTags] = useState(false);
	const [existingTags, setExistingTags] = useState(props.containingTags);
	const dispatch = useAppDispatch();

	const handleClick = () => {
		setOpenTags(!openTags);
	};

	const handleRemove = (removedTag: string) => {
		setExistingTags(existingTags?.filter((tag) => tag !== removedTag));
		dispatch(removeFilterByTag(removedTag));
	};

	return (
		<div className="menu-button-container">
			<Card
				className="menu-button"
				elevation={4}
				onClick={handleClick}
				interactive={true}
			>
				<label>{props.text}</label>
				<Icon className="menu-icon" icon="chevron-right"></Icon>
			</Card>
			{openTags && (
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
