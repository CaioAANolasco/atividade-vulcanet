<<<<<<< Updated upstream
import "bulma/css/bulma.min.css";
=======
>>>>>>> Stashed changes
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { store } from "./app/store";
import { Provider } from "react-redux";
<<<<<<< Updated upstream
=======
import * as serviceWorker from "./serviceWorker";
>>>>>>> Stashed changes

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
