import { InputGroup, Navbar, NavbarGroup } from "@blueprintjs/core";
import "./styles/organize-styles/organize-bar.scss";

const OrganizeBar = () => {
	return (
		<Navbar className="organize-bar">
			<NavbarGroup>
				<InputGroup
					leftIcon="search"
					round={true}
					placeholder="Search for assets"
					className="organize-bar-search"
				></InputGroup>
			</NavbarGroup>
		</Navbar>
	);
};

export default OrganizeBar;
