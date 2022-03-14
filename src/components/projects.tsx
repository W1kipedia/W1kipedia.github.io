import { Component } from 'react';
import '../css/projects.css';

interface ProjectsProps {};

interface ProjectsState {};

class Projects extends Component<ProjectsProps, ProjectsState> {
	constructor(props: ProjectsProps) {
		super(props);
	}
	render() {
		return (
			<main className="projects">
				<div className="card-gw">
					<div className="card">
						<div className="card-image"></div>
						<div className="card-text">
							<h2>SwitchBot.js</h2>
							<div className="sep"></div>
							<p>The new and improved Switch Bot! This discord bot is a newer version of the original SwitchBot but in Typescript</p>
						</div>
						<div className="refs">
							<a href="https://github.com/W1kipedia/SwitchBot.js" target='_blank' className="fab fa-github" title="Github"></a>
						</div>
					</div>
				</div>
			</main>
		)
	}
}

export default Projects;
