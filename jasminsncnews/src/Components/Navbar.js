import React, { Component } from "react";
import * as api from "../utils/api";
import Loading from "../Components/Loading";
import { Link } from "@reach/router";
import DisplayError from "./DisplayError";

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
				<ul>
					<li>
						<Link to={"/"}>Home</Link>
					</li>
					{topics.map((topic) => {
						return (
							<li key={topic.slug}>
								<Link to={`topics/${topic.slug}`}>{topic.slug}</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		);
	}
}

export default Navbar;
