import React from "react";
import styled from "styled-components";

const Title = styled.h1``;

const Header = (props) => {
	return (
		<div>
			<h1>JBCNews</h1>
			<p>Welcome back {props.loggedInUser}</p>
		</div>
	);
};

export default Header;
