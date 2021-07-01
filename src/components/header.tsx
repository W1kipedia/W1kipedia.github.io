import { Component } from 'react'
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
						<li className="first_nav_element active_nav"><a href="#">Home</a></li>
						<li><a href="#">About</a></li>
						<li><a href="#">Contact</a></li>
						<li><a href="#">Projects</a></li>
					</ul>
				</nav>
			</header>
		)
	}
}

export default Header
