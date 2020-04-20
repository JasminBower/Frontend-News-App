import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
	display: inline-block;
	animation: ${rotate} 2s linear infinite;
	padding: 2rem 2rem;
	font-size: 16.2rem;
`;

const Loading = (props) => {
	return (
		<Rotate>
			<span role='img' aria-label='avocado'>
				🥑
			</span>
		</Rotate>
	);
};

export default Loading;
