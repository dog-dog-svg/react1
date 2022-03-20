import React, { Component } from "react";

class Article extends Component {
	render() {
		const groupArticle = [];
		const dataArticle = this.props.articleCon;
		let i = 0;
		for (i = 0; i < dataArticle.length; i++) {
			groupArticle.push(
				<li key={dataArticle[i].id}>
					<a
						href={"/content/" + dataArticle[i].id}
						onClick={(e) => {
							e.preventDefault();
							this.props.onChangePage();
						}}
					>
						{dataArticle[i].title}
					</a>
					{dataArticle[i].desc}
				</li>,
			);
		}
		return <article>{groupArticle}</article>;
	}
}

export default Article;
