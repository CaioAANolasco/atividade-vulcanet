import MenuBar from "./MenuBar";
import FilterProperties from "./FilterProperties";
import "./styles/sidebar.scss";

const Sidebar = () => {
	return (
		<div className="sidebar-container">
			<FilterProperties />
			<MenuBar />
		</div>
	);
};

export default Sidebar;
