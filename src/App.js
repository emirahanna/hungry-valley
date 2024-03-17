import "./App.css";
import Header from "./components/Header";
import "./styles.css";
import MapsBasic from "./components/basicmap";

import "leaflet/dist/leaflet.css";

export default function App() {
	return (
		<div className="App">
			<Header />
			<MapsBasic />
		</div>
	);
}
