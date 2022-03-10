import React, { Component } from "react";

class Article extends Component {
	render() {
		let groupStory=[];
		let dataStory=this.props.story;
		let i=0;
		for(i=0;i<dataStory.length;i++ ){
      groupStory.push(
				<li key={dataStory[i].id}>
					<a href={"/content/" + dataStory[i].id}>{dataStory[i].title}</a>
          {dataStory[i].desc}
				</li>,
			);

    }
		return (
			<article>
				{groupStory}
			</article>
		);
	}
}

export default Article;