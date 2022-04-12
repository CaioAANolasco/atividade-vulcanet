import Sidebar from "./Sidebar";
import OrganizeBar from "./OrganizeBar";
import FieldsNames from "./FieldsNames";
import ActiveList from "./ActiveList";
import "./styles/app.scss";

function App() {
	return (
		<div className="app-display">
			<Sidebar />
			<div className="actives-display">
				<OrganizeBar />
				<FieldsNames />
				<ActiveList />
			</div>
		</div>
	);
}

export default App;
