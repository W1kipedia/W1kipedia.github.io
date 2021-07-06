import { Component } from 'react'
import { NavLink } from 'react-router-dom';
import '../css/header.css'

interface HeaderProps {
}

interface HeaderState {
	isOpen: boolean;
}

class Header extends Component<HeaderProps, HeaderState> {

	constructor(props: HeaderProps) {
		super(props)
		this.state = {
			isOpen: false
		}
	}

	render() {
		return (
			<header>
				<nav>
					<a className="toggle_button" onClick={() => this.setState({isOpen: !this.state.isOpen})}>
						<span className="bar"></span>
						<span className="bar"></span>
						<span className="bar"></span>
					</a>

					<ul className={`__nav ${this.state.isOpen ? 'visible_navbar' : ''}`}>
						<NavLink exact to="/" replace>
							<li className={`first_nav_element`}>Home</li>
						</NavLink>

						<NavLink exact to="/about" replace>
							<li>About</li>
						</NavLink>

						<NavLink exact to="/projects" replace>
							<li>Projects</li>
						</NavLink>

						<NavLink exact to="/contact" replace>
							<li>Contact</li>
						</NavLink>

					</ul>
				</nav>
			</header>
		)
	}
}

export default Header
