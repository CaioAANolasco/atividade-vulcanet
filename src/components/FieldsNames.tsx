import { Card, Icon } from "@blueprintjs/core";
import { useDispatch } from "react-redux";
import { changeSortOrder, sortActives } from "../app/actions-creators";
import "./styles/fields-name-styles/field-names.scss";
import { SortingFields, SortTypes } from "../SortingFields";
import { useState } from "react";
import FieldNameButton from "./fields-names-components/FieldNameButton";
import { useAppSelector } from "../app/hooks";

const FieldsNames = () => {
	const [selectedSortField, setSelectedSortField] = useState("severity");
	const dispatch = useDispatch();

	const { sortOrder } = useAppSelector((state) => state.actives);

	const handleClick = (sortField: SortTypes) => {
		if (sortField === selectedSortField) {
			if (sortOrder === 0) {
				dispatch(changeSortOrder(1));
			} else if (sortOrder === 1) {
				dispatch(changeSortOrder(-1));
			} else {
				dispatch(changeSortOrder(0));
				setSelectedSortField("");
			}
		} else {
			setSelectedSortField(sortField);
			dispatch(sortActives(sortField));
			dispatch(changeSortOrder(1));
		}
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
				{selectedSortField === SortingFields.SEVERITY && (
					<Icon
						icon={sortOrder === 1 ? "caret-up" : "caret-down"}
						intent="primary"
					/>
				)}
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
