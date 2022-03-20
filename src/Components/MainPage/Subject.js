import React, { Component } from "react";

class Subject extends Component {
	render() {
		return (
			<header>
				<h1>
					<a
						href="/"
						onClick={(e) => {
							e.preventDefault();
							this.props.OnChangePage();
							console.log(this.props)
						}}
					>
						{this.props.title}
					</a>
				</h1>
				{this.props.sub}
			</header>
		);
	}
}

export default Subject;
