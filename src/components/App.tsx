import Sidebar from "./Sidebar";
import OrganizeBar from "./OrganizeBar";
import "./styles/app.scss";

function App() {
	return (
		<div className="app-display">
			<Sidebar />
			<OrganizeBar />
		</div>
	);
}

export default App;
