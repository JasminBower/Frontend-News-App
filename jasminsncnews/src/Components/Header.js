import React from "react";
import styled from "styled-components";

const Title = styled.h1`
	font-family: "Squada One", cursive;
	font-size: 6em;
`;

class Header extends React.Component {
	state = {
		loggedInUser: "tickle122",
	};

	render() {
		return (
			<div>
				<Title>JB News</Title>
				<p>Welcome back {this.state.loggedInUser}</p>
			</div>
		);
	}
}

export default Header;
