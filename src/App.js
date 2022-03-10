import React, { Component } from "react";
import "./App.css";
import Nav from "./Components/MainPage/Nav";
import Article from "./Components/MainPage/Article";
import Subject from "./Components/MainPage/Subject";
import TOC from "./Components/MainPage/Toc";

class App extends Component {
	constructor(props){
		super(props);
		this.state={
			Subject:{title:'웹문서',sub:'리엑트로 개발하는 웹문서'},
			contents1:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ],
			contents2:[
        {id:1, title:'react', desc:'요즘 핫한 언어 리엑트'},
        {id:2, title:'tree.js', desc:'3D 애니메이션 구현'},
        {id:3, title:'vue', desc:'쉽게 만드는 SPA'}
      ],
		}
	}
	render() {
		return (
			<div className="App">
				<Subject title="HTML" sub="web문서의 근간이 되는 HTML 언어"></Subject>
				<Nav class="gnb"></Nav>
				<Subject title="CSS" sub="web문서를 디자인해주는 CSS 언어"></Subject>
				<Article story={this.state.contents1}></Article>
				<Nav class="sideNav"></Nav>
				<Article story={this.state.contents2}></Article>
			</div>
		);
	}
}

export default App;
