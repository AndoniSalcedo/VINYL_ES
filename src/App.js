import React from "react";
import DiscosList from "./DiscosList";
import "./App.css";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const App = () => {
	return (
		<div className="app">
			<div className="header">
				<img src="images/disco.png" alt="Logotipo" className="logo" />
				<h1 className="title">VINYL_ES</h1>
				<div className="icons">
					<a
						href="https://instagram.com/vinyl_es"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaInstagram className="icon" />
					</a>

					<a
						href="mailto:vinyles2000@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<HiOutlineMail className="icon2" />
					</a>
				</div>
			</div>
			<h2 className="subtitle">Discos</h2>
			<DiscosList />
		</div>
	);
};

export default App;
