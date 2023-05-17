import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Disco from "./Disco";
import discosData from "./data/discosData.json";

const DiscosList = () => {
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
