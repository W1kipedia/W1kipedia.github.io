import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';

interface RootProps {};

interface RootState {};

class Root extends Component<RootProps, RootState> {
	constructor(props: RootProps) {
		super(props);
	}
	render() {
		return (
			<main>
				<div className="introduction">
					<h1>Student, ReactJs beginner, Typescript enthusiast.</h1>
					<div className="introduction_buttons">
						<Link to="/about" replace><button>Learn more</button></Link>
						<Link to="/projects" replace><button>What I've been working on</button></Link>
					</div>
				</div>
			</main>
		)
	}
}

export default Root;
