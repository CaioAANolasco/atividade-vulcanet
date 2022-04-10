import MenuBar from "./MenuBar";
import FilterProperties from "./FilterProperties";
import FlagNavBar from "./FlagNavBar";
import "./styles/sidebar.scss";

const Sidebar = () => {
	return (
		<div className="sidebar-container">
			<FlagNavBar />
			<FilterProperties />
			<MenuBar />
		</div>
	);
};

export default Sidebar;
