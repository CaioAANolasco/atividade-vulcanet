import { Classes, Button } from "@blueprintjs/core";
import TagsArea from "./TagsArea";
import "./styles/menu-bar.scss";

const MenuBar = () => {
	return (
		<div className="menu-container">
			<TagsArea text="Status" />
			<TagsArea text="Time" />
			<TagsArea text="Assignee" />
			<TagsArea text="Watcher" />
			<TagsArea text="Counterparty" />
			<TagsArea text="Severitys" />
		</div>
	);
};

export default MenuBar;
