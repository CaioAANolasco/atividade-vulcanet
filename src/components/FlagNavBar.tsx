import { Card, Button, Label } from "@blueprintjs/core";
import "./styles/flags-navbar.scss";

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

			<h4 className="flags-navbar-text">OPEN FLAGS</h4>
		</Card>
	);
};

export default FlagNavBar;
