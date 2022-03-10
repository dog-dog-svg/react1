import React, { Component } from "react";

class Nav extends Component {
	render() {
		return (
			<nav className={this.props.class}>
				<ul>
					<li>
						<a href="1.html">HTML</a>
					</li>
					<li>
						<a href="2.html">CSS</a>
					</li>
					<li>
						<a href="3.html">JS</a>
					</li>
				</ul>
			</nav>
		);
	}
}
export default Nav;