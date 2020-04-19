import React from "react";

const DisplayError = ({ status, msg }) => {
	return (
		<div>
			<h1>{`Computer says no! ${status} : ${msg}`}</h1>
		</div>
	);
};

export default DisplayError;
