import "./App.css";
import Header from "./components/Header";
import "./styles.css";
import MapsBasic from "./components/basicmap";
import "leaflet/dist/leaflet.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

export default function App() {
	return (
		<main className="App">
			<h1> Auth0 Login</h1>
			<LoginButton />
			<LogoutButton />
      <Profile />
			<Header />
			<MapsBasic />
		</main>
	);
}

