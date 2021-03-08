import React from "react";
import createGame from "./createGame";

import './styles/app.css';

function App() {
	createGame();

	return (
		<div style={{ textAlign: "center" }}>
			<div className="header">
				<h1>HEADER</h1>
			</div>

			<div className="main">
				<div className="left-panel">
					LEFT PANEL
				</div>
				<div className="game bg-info">
					<div id="phaser" />
				</div>
			</div>
		</div>
	);
}

export default App;