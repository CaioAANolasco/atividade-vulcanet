import TagsArea from "./TagsArea";

const MenuFlags = () => {
	return (
		<div>
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
