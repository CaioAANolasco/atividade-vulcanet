import TagsArea from "./TagsArea";
import "./styles/menu-bar.scss";

const MenuFlags = () => {
	return (
		<div className="menu-container">
			<TagsArea text="Status" />
			<TagsArea text="Time" />
			<TagsArea text="Assignee" />
			<TagsArea text="Watcher" />
			<TagsArea text="Counterparty" />
			<TagsArea text="Severity" />
			<TagsArea text="Source" />
			<TagsArea text="Trader" />
		</div>
	);
};

export default MenuFlags;
