import MenuFlags from "./MenuFlags";
import FilterProperties from "./FilterProperties";
import FlagNavBar from "./FlagNavBar";
import MenuNavBar from "./MenuNavBar";
import "./styles/sidebar.scss";

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
