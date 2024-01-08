import React from "react";
import { Route, Switch } from 'react-router-dom';

import DisplayCharacters from './pages/characters';
import DisplayEpisodes from './pages/episodes';
import DisplayLocations from './pages/locations';

const AppRouter = () => {
	return (
		<Switch>
			<Route exact path="/">
				<DisplayEpisodes />
			</Route>
			<Route path="/characters">
				<DisplayCharacters />
			</Route>
			<Route path="/locations">
				<DisplayLocations />
			</Route>
		</Switch>
	);
};

export default AppRouter;