import { Button, Tag, Icon } from "@blueprintjs/core";
import { useState } from "react";
import "./styles/tags-area.scss";

interface TagsAreaProps {
	text: String;
}

const TagsArea: React.FC<TagsAreaProps> = (props: TagsAreaProps) => {
	const [openTags, setOpenTags] = useState(false);
	const [existingTags, setExistingTags] = useState([
		"Open",
		"Closed",
		"Escalated",
	]);

	const handleClick = () => {
		setOpenTags(!openTags);
	};

	const handleRemove = (removedTag: String) => {
		setExistingTags(existingTags.filter((tag) => tag !== removedTag));
	};

	return (
		<div className="menu-button-container">
			<Button
				text={props.text}
				className="menu-button"
				alignText="left"
				rightIcon="chevron-right"
				fill={true}
				onClick={handleClick}
			/>
			{openTags && (
				<div className="tags-container">
					{existingTags.map((tag) => (
						<Tag className="tag">
							<Icon
								icon="small-cross"
								onClick={(e) => handleRemove(tag)}
							></Icon>
							{tag}
						</Tag>
					))}
				</div>
			)}
		</div>
	);
};

export default TagsArea;
