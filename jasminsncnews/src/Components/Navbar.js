import React, { Component } from "react";
import * as api from "../utils/api";
import Loading from "../Components/Loading";
import { Link } from "@reach/router";
import DisplayError from "./DisplayError";
import styled from "styled-components";

const TopicLink = styled.li`
	display: inline-block;
	border-radius: 3px;
	padding: 0.5rem 0;
	margin: 0.5rem 1rem;
	width: 11rem;
	background: transparent;
	color: white;
	border: 2px solid white;
	list-style-type: none;
	text-decoration: none;
`;
const ListStyle = styled.ul``;

class Navbar extends Component {
	state = {
		topics: [],
		isLoading: true,
		hasError: null,
	};

	componentDidMount() {
		api
			.getTopics()
			.then((topics) => {
				this.setState({ topics, isLoading: false });
			})
			.catch((err) => {
				const { status, data } = err.response;
				this.setState({
					hasError: {
						status: status,
						msg: data.msg,
					},
				});
			});
	}

	render() {
		const { topics, isLoading, hasError } = this.state;
		if (hasError)
			return <DisplayError status={hasError.status} msg={hasError.msg} />;
		if (isLoading) return <Loading />;
		return (
			<nav className='Nav'>
				<ListStyle>
					<ul>
						<TopicLink key={"home"}>
							<Link to={"/"}>home</Link>
						</TopicLink>
						{topics.map((topic) => {
							return (
								<TopicLink key={topic.slug}>
									<Link to={`topics/${topic.slug}`}>{topic.slug}</Link>
								</TopicLink>
							);
						})}
					</ul>
				</ListStyle>
			</nav>
		);
	}
}

export default Navbar;
