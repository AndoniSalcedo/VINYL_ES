import React from "react";

const Disco = ({ name, singer, price, image }) => {
	return (
		<div className="disco">
			<img src={image} alt={name} className="disco-imagen" />
			<div className="disco-info">
				<h2 className="disco-nombre">{name}</h2>
				<p className="disco-cantante">{singer}</p>
				<p className="disco-precio">Precio: {price}</p>
			</div>
		</div>
	);
};

export default Disco;
