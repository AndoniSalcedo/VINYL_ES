import React from "react";
import DiscosList from "./DiscosList";
import "./App.css";

const App = () => {
	return (
		<div className="app">
			<div className="header">
				<img src="images/disco.png" alt="Logotipo" className="logo" />
				<h1 className="title">VINYL_ES</h1>
				<div className="icons">
					<a
						href="enlace-a-instagram"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="./images/disco.png"
							alt="Instagram"
							className="icon"
						/>
					</a>

					<a
						href="enlace-a-correo-electronico"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="./images/disco.png"
							alt="Correo electrónico"
							className="icon"
						/>
					</a>
				</div>
			</div>
			<h2 className="subtitle">Discos</h2>
			<DiscosList />
		</div>
	);
};

export default App;
