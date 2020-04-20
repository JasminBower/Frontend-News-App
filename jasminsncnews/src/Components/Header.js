import React from "react";
import styled from "styled-components";

const Title = styled.h1`
	font-family: "Squada One", cursive;
`;

const Header = (props) => {
	return (
		<div>
			<Title>
				<h1>JB News</h1>
			</Title>
			<p>Welcome back {props.loggedInUser}</p>
		</div>
	);
};

export default Header;
