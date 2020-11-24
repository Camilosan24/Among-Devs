import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./pages/layout/layout";
import StartPage from './pages/MAIN/StartPage';
import MapPage from './pages/MAIN/MapPage';
import RememberPage from './pages/TASKS/RememberPage';
import DivertPowerPage from './pages/TASKS/DivertPowerPage';
import PrimeShieldsPage from './pages/TASKS/PrimeShieldsPage';
import "./styles/style.css";
import "./styles/animate.css";
import "./styles/bootstrap.min.css";
import "./styles/magnific-popup.css";
import "./styles/slicknav.min.css";


function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={StartPage} />
					<Route exact path="/game" component={MapPage} />
					<Route exact path="/remember" component={RememberPage} />
					<Route exact path="/divertPower" component={DivertPowerPage} />
					<Route exact path="/primeShields" component={PrimeShieldsPage} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
