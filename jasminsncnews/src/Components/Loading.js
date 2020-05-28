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
	animation: ${rotate} 3s linear infinite;
	padding: 2rem 2rem;
	font-size: 17rem;
`;

const Loading = (props) => {
	return (
		<Rotate>
			<span role='img' aria-label='spinning avocado'>
				🥑
			</span>
		</Rotate>
	);
};

export default Loading;
