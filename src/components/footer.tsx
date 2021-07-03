import { Component } from "react";
import '../css/footer.css';

class Footer extends Component {
	render() {
		return (
			<footer>
				<hr className="footer_border" />
				<br />
				<div className="footer_links">
					<a href="https://github.com/W1kipedia" className="fab fa-github"></a>
					<a href="https://github.com/W1kipedia/W1kipedia.github.io" className="fab fa-github-square"></a>
				</div>
				<br />
				<small className="copyright">
					©️ W1kipedia 2021
				</small>
			</footer>
		);
	}
}

export default Footer;
