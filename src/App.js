import React, { Component } from "react";
import "./App.css";
import Nav from "./Components/MainPage/Nav";
import Article from "./Components/MainPage/Article";
import Subject from "./Components/MainPage/Subject";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			type: "welcome",
			welcome: { title: "반갑습니다", desc: "리엑트와 인사나눠요" },
			subject: { title: "웹문서", sub: "리엑트로 개발하는 웹문서" },
			contents1: [
				{ id: 1, title: "HTML", desc: "HTML is for information" },
				{ id: 2, title: "CSS", desc: "CSS is for design" },
				{ id: 3, title: "JavaScript", desc: "JavaScript is for interactive" },
			],
			contents2: [
				{ id: 1, title: "react", desc: "요즘 핫한 언어 리엑트" },
				{ id: 2, title: "tree.js", desc: "3D 애니메이션 구현" },
				{ id: 3, title: "vue", desc: "쉽게 만드는 웹앱" },
			],
		};
	}
	render() {
		let $title,
			$desc = null;
		if (this.state.type === "welcome") {
			$title = this.state.welcome.title;
			$desc = this.state.welcome.desc;
		} else if (this.state.type === "subject") {
			$title = this.state.subject.title;
			$desc = this.state.subject.sub;
		}
		return (
			<div className="App">
				<Subject
					title={$title}
					desc={$desc}
					OnChangePage={() => {
						this.setState({ type: "subject" });
					}}
				></Subject>
				<Subject title="CSS" sub="web문서를 디자인해주는 CSS 언어"></Subject>
				<Article onChangePage={()=>{
					alert('on');
					this.setState({type:'subject'})
				}} articleCon={this.state.contents1}></Article>
				<Nav class="sideNav"></Nav>
				<Article articleCon={this.state.contents2}></Article>
			</div>
		);
	}
}

export default App;
