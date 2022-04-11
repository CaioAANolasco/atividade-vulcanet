import { Button, InputGroup, Navbar, NavbarGroup } from "@blueprintjs/core";
import "./styles/organize-styles/organize-bar.scss";

const OrganizeBar = () => {
	return (
		<Navbar className="organize-bar">
			<NavbarGroup className="search-group" align="left">
				<InputGroup
					leftIcon="search"
					round={true}
					placeholder="Search for assets"
					className="organize-bar-search"
				></InputGroup>
				<Button
					text="List"
					icon="list"
					minimal={true}
					active={true}
					intent="primary"
				/>
				<Button
					text="Group by trader"
					icon="grid-view"
					minimal={true}
				/>
			</NavbarGroup>
		</Navbar>
	);
};

export default OrganizeBar;
