import React from "react";
import styled from "styled-components";

const Title = styled.h1`
	font-family: "Squada One", cursive;
	font-size: 6em;
`;

const Header = (props) => {
	return (
		<div>
			<Title>JB News</Title>
			<p>Welcome back {props.loggedInUser}</p>
		</div>
	);
};

export default Header;
