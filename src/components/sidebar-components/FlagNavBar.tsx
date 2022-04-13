import { Card, Button } from "@blueprintjs/core";
import "../styles/sidebar-styles/flags-navbar.scss";

const FlagNavBar = () => {
	return (
		<Card className="flags-navbar-container">
			<Button
				small={true}
				text="Sets"
				icon="chevron-left"
				minimal={true}
				alignText="left"
				className="flags-navbar-button"
			></Button>

			<h3 className="flags-navbar-text">OPEN FLAGS</h3>
		</Card>
	);
};

export default FlagNavBar;
