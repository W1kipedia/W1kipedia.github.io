import { Component } from 'react'
import '../css/header.css'

interface HeaderProps {
	page?: 'home' | 'about' | 'contact' | 'projects' | string
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
						<li className={`first_nav_element ${(this.props.page === 'home' || this.props.page === '') ? 'active_nav' : ''}`}><a href="#">Home</a></li>

						<li className={(this.props.page === 'about') ? 'active_nav' : ''}><a href="#">About</a></li>

						<li className={(this.props.page === 'contact') ? 'active_nav' : ''}><a href="#">Contact</a></li>

						<li className={(this.props.page === 'projects') ? 'active_nav' : ''}><a href="#">Projects</a></li>
					</ul>
				</nav>
			</header>
		)
	}
}

export default Header
