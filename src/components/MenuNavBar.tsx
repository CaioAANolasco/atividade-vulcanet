import { Navbar, Button, Alignment } from "@blueprintjs/core";
import { ICON } from "@blueprintjs/core/lib/esm/common/classes";
import "./styles/menu-navbar.scss";

const MenuNavBar = () => {
	return (
		<Navbar className="navbar">
			<Navbar.Group align={Alignment.LEFT}>
				<Navbar.Heading>Radar</Navbar.Heading>
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
