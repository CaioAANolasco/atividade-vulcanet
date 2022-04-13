import { Card, Icon, Button } from "@blueprintjs/core";
import { useDispatch } from "react-redux";
import { sortActives } from "../app/actions-creators";
import "./styles/fields-name-styles/field-names.scss";
import { SortingFields, SortTypes } from "../SortingFields";
import { useState } from "react";
import FieldNameButton from "./fields-names-components/FieldNameButton";

const FieldsNames = () => {
	const [selectedSortField, setSelectedSortField] = useState("severity");
	const dispatch = useDispatch();

	const handleClick = (sortField: SortTypes) => {
		setSelectedSortField(sortField);
		dispatch(sortActives(sortField));
	};

	return (
		<Card className="field-name-container">
			<FieldNameButton
				field="activeInfo"
				handleClick={handleClick}
				intent={
					selectedSortField === SortingFields.ACTIVE_INFO
						? "primary"
						: "none"
				}
			/>
			<div
				className="severity-field"
				onClick={() => handleClick(SortingFields.SEVERITY)}
			>
				<Icon
					icon="error"
					intent={
						selectedSortField === SortingFields.SEVERITY
							? "primary"
							: "none"
					}
				/>
				<Icon
					icon="caret-down"
					intent={
						selectedSortField === SortingFields.SEVERITY
							? "primary"
							: "none"
					}
				/>
			</div>
			<FieldNameButton
				field="status"
				handleClick={handleClick}
				intent={
					selectedSortField === SortingFields.STATUS
						? "primary"
						: "none"
				}
			/>
			<FieldNameButton
				field="trader"
				handleClick={handleClick}
				intent={
					selectedSortField === SortingFields.TRADER
						? "primary"
						: "none"
				}
			/>
			<FieldNameButton
				field="counterparty"
				handleClick={handleClick}
				intent={
					selectedSortField === SortingFields.COUNTERPARTY
						? "primary"
						: "none"
				}
			/>
			<FieldNameButton
				field="book"
				handleClick={handleClick}
				intent={
					selectedSortField === SortingFields.BOOK
						? "primary"
						: "none"
				}
			/>
			<FieldNameButton
				field="source"
				handleClick={handleClick}
				intent={
					selectedSortField === SortingFields.SOURCE
						? "primary"
						: "none"
				}
			/>
		</Card>
	);
};

export default FieldsNames;
