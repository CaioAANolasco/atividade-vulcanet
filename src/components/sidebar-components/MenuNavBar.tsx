import { Navbar, Button, Alignment, Icon } from "@blueprintjs/core";
import "../styles/sidebar-styles/menu-navbar.scss";

const MenuNavBar = () => {
	return (
		<Navbar className="navbar bp4-elevation-4">
			<Navbar.Group align={Alignment.LEFT}>
				<Icon
					icon="rocket-slant"
					className="navbar-icon"
					size={32}
				></Icon>
				<Navbar.Heading className="navbar-heading">
					RADAR
				</Navbar.Heading>
			</Navbar.Group>

			<Navbar.Group className="navbar-buttons" align={Alignment.RIGHT}>
				<Button className="bp4-minimal" icon="user" />
				<Button className="bp4-minimal" icon="notifications" />
				<Button className="bp4-minimal" icon="help" />
			</Navbar.Group>
		</Navbar>
	);
};

export default MenuNavBar;
