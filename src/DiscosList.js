import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Disco from "./Disco";

const DiscosList = () => {
	const discosData = [
		{
			singer: "Lorenzo D",
			name: "Mistery",
			price: "15€",
			image: "images/disco.png",
		},
		{
			singer: "Mainbrain & Somville",
			name: "Energy",
			price: "7€",
			image: "images/disco.png",
		},
		{
			singer: "Dj Manu A.",
			name: "No+Reggeton",
			price: "6€",
			image: "images/disco.png",
		},
		{
			singer: "Gaz West",
			name: "Playing whit fire",
			price: "10€",
			image: "images/disco.png",
		},
		{
			singer: "Axel Conn",
			name: "Third Base",
			price: "9€",
			image: "images/disco.png",
		},
		{
			singer: "Dj Manu",
			name: "Revolution",
			price: "12€",
			image: "images/disco.png",
		},
		{
			singer: "Luis Deejay vs Raúl G",
			name: "Jumping Deejay",
			price: "15€",
			image: "images/disco.png",
		},
		{
			singer: "Blue Star",
			name: "Dreaming",
			price: "10€",
			image: "images/disco.png",
		},
		{
			singer: "Dj Fonty & Dj Nano",
			name: "The sound of masters",
			price: "9€",
			image: "images/disco.png",
		},
		{
			singer: "Mainbrain & Somville",
			name: "Energy",
			price: "8,50€",
			image: "images/disco.png",
		},
		{
			singer: "Stefhan Van Huysen & Debbie de groot",
			name: "Energy",
			price: "15€",
			image: "images/disco.png",
		},
		{
			singer: "Par Grinddvik",
			name: "World of Mine",
			price: "10,50€",
			image: "images/disco.png",
		},
		{
			singer: "DJ Remo",
			name: "Day Bass",
			price: "10€",
			image: "images/disco.png",
		},
		{
			singer: "Supersffic VS Wooofinn",
			name: "Cluods/Sunrise",
			price: "12€",
			image: "images/disco.png",
		},
		{
			singer: "The Electric Press",
			name: "Tone Control",
			price: "14€",
			image: "images/disco.png",
		},
		{
			singer: "Yannis PK",
			name: "Mr Presiden EP",
			price: "45€",
			image: "images/disco.png",
		},
		{
			singer: "NEVER AGENT",
			name: "NEVER AGENT",
			price: "5€",
			image: "images/disco.png",
		},
		{
			singer: "SPECULUM",
			name: "NYMPHO",
			price: "6€",
			image: "images/disco.png",
		},
		{
			singer: "Paul Woolford",
			name: "Phase Prophet EP",
			price: "6€",
			image: "images/disco.png",
		},
		{
			singer: "Thomas Dolby whit Slaz",
			name: "One Of Our Submarines",
			price: "5€",
			image: "images/disco.png",
		},
		{
			singer: "Perc & Gilbey",
			name: "The Razor EP",
			price: "5€",
			image: "images/disco.png",
		},
		{
			singer: "Kingpin Carte",
			name: "Saved Records",
			price: "12€",
			image: "images/disco.png",
		},
		{
			singer: "Raúl Dm",
			name: "Special Power",
			price: "15€",
			image: "images/disco.png",
		},
		{
			singer: "Mike & Bigger",
			name: "First Contoc",
			price: "15€",
			image: "images/disco.png",
		},
		{
			singer: "Dj Nitox",
			name: "Dj Nitox",
			price: "10€",
			image: "images/disco.png",
		},
		{
			singer: "Stefhan Van Huysen",
			name: "Debbie de groot",
			price: "15€",
			image: "images/disco.png",
		},
		{
			singer: "Dj Manu A.",
			name: "Tamba",
			price: "5€",
			image: "images/disco.png",
		},
		{
			singer: "Okis EP",
			name: "Okis EP",
			price: "5€",
			image: "images/disco.png",
		},
		{
			singer: "Carlos Vk",
			name: "Mission 439",
			price: "12€",
			image: "images/disco.png",
		},
		{
			singer: "Jonas Dj",
			name: "Kyoki",
			price: "10€",
			image: "images/disco.png",
		},
		{
			singer: "Dj Fili",
			name: "Killer Octopus",
			price: "10€",
			image: "images/disco.png",
		},
		{
			singer: "David B",
			name: "Rise of the machines",
			price: "7€",
			image: "images/disco.png",
		},
		{
			singer: "The electronic press",
			name: "Tone control",
			price: "14€",
			image: "images/disco.png",
		},
		{
			singer: "Hot kitchen",
			name: "Bitch 2",
			price: null,
			image: "images/disco.png",
		},
		{
			singer: "Soundsystem",
			name: "Experience",
			price: null,
			image: "images/disco.png",
		},
	];
	const [currentPage, setCurrentPage] = useState(0);
	const itemsPerPage = 12;
	const pageCount = Math.ceil(discosData.length / itemsPerPage);
	const offset = currentPage * itemsPerPage;
	const currentDiscos = discosData.slice(offset, offset + itemsPerPage);

	const handlePageChange = ({ selected }) => {
		setCurrentPage(selected);
	};

	return (
		<div className="discos-list">
			{currentDiscos.map((disco, index) => (
				<Disco
					key={index}
					name={disco.name}
					singer={disco.singer}
					price={disco.price}
					image={disco.image}
				/>
			))}

			<br />

			<ReactPaginate
				previousLabel={"Anterior"}
				nextLabel={"Siguiente"}
				breakLabel={""}
				breakClassName={"break-me"}
				pageCount={pageCount}
				marginPagesDisplayed={1}
				pageRangeDisplayed={12}
				onPageChange={handlePageChange}
				containerClassName={"pagination"}
				subContainerClassName={"pages pagination"}
				activeClassName={"active"}
			/>
		</div>
	);
};

export default DiscosList;
