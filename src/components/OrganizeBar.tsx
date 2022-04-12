import {
	Button,
	InputGroup,
	Navbar,
	NavbarDivider,
	NavbarGroup,
} from "@blueprintjs/core";
import React, { ChangeEvent, useState } from "react";
import "./styles/organize-styles/organize-bar.scss";
import { useAppDispatch } from "../app/hooks";
import { filterByName } from "../app/actions-creators";

const OrganizeBar = () => {
	const dispatch = useAppDispatch();
	const [searchInput, setSearchInput] = useState("");

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value);
		dispatch(filterByName(searchInput));
	};

	return (
		<Navbar className="organize-bar">
			<NavbarGroup className="search-group" align="left">
				<InputGroup
					leftIcon="search"
					round={true}
					placeholder="Search for assets"
					className="search-bar"
					onChange={handleChange}
				></InputGroup>
				<Button
					text="List"
					icon="list"
					minimal={true}
					active={true}
					intent="primary"
					className="organize-button"
				/>
				<Button
					text="Group by trader"
					icon="grid-view"
					minimal={true}
					className="organize-button"
				/>
				<NavbarDivider />
				<Button icon="caret-down" minimal={true}></Button>
			</NavbarGroup>

			<NavbarGroup align="right">
				<Button text="Take action" disabled={true} />
			</NavbarGroup>
		</Navbar>
	);
};

export default OrganizeBar;
