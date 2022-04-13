import { Tag, Icon, Card } from "@blueprintjs/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByTag } from "../../app/actions-creators";
import "../styles/sidebar-styles/tags-area.scss";

interface TagsAreaProps {
	text: String;
}

const TagsArea: React.FC<TagsAreaProps> = (props: TagsAreaProps) => {
	const dispatch = useDispatch();
	const [openTags, setOpenTags] = useState(false);
	const [existingTags, setExistingTags] = useState([
		"Open",
		"Closed",
		"Escalated",
	]);

	const handleClick = () => {
		setOpenTags(!openTags);
	};

	const handleClickOnTag = (tagID: string) => {
		dispatch(filterByTag(tagID));
	};

	const handleRemove = (removedTag: String) => {
		setExistingTags(existingTags.filter((tag) => tag !== removedTag));
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
					{existingTags.map((tag) => (
						<Tag
							large={true}
							className="tag"
							data-id={tag}
							onClick={(e) => handleClickOnTag(tag)}
						>
							<Icon
								icon="small-cross"
								onClick={(e) => handleRemove(tag)}
							></Icon>
							<label className="tag-text">{tag}</label>
						</Tag>
					))}
				</div>
			)}
		</div>
	);
};

export default TagsArea;
