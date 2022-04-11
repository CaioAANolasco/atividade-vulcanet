import MenuFlags from "./sidebar-components/MenuFlags";
import FilterProperties from "./sidebar-components/FilterProperties";
import FlagNavBar from "./sidebar-components/FlagNavBar";
import MenuNavBar from "./sidebar-components/MenuNavBar";
import "./styles/sidebar-styles/sidebar.scss";

const Sidebar = () => {
	return (
		<div className="sidebar-container">
			<MenuNavBar />
			<FlagNavBar />
			<FilterProperties />
			<MenuFlags />
		</div>
	);
};

export default Sidebar;
