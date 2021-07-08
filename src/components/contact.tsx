// This page is currently not finished and might not be used at all

import { Component } from 'react';
import '../css/contact.css';

interface ContactProps {};

interface ContactState {
	FirstFieldFilled: boolean,
	SecondFieldFilled: boolean,
	ThirdFieldFilled: boolean
};

class Contact extends Component<ContactProps, ContactState> {
	constructor(props: ContactProps) {
		super(props);
		this.state = {
			FirstFieldFilled: false,
			SecondFieldFilled: false,
			ThirdFieldFilled: false
		}
	}

	FirstFieldCheck() {
		const FirstField = document.querySelector('.FirstElement');

	}

	SecondFieldCheck() {

	}

	ThirdFieldCheck() {

	}

	render() {
		return (
			<main>
				<div className="Contact">
					<h1>Contact me!</h1>
					<form action="https://formsubmit.co/yibohe" method="POST">
						<div className="ContactForm">
							<input type="hidden" name="_next" value="https://W1kipedia.github.io/#/ThankYou" />
							<div className="form_headers">
								<div className="col">
									<input onKeyDown={() => this.FirstFieldCheck()} type="text" name="name" placeholder="Full Name (required)" required autoCorrect="off" className="FirstElement" autoComplete="off" />
								</div>
								<div className="col">
									<input onKeyDown={() => this.SecondFieldCheck()} type="email" name="email" pattern="\S+@\S+" placeholder="Email (required)" required className="SecondElement" autoCorrect="off" autoComplete="off" />
								</div>
								<div className="col">
									<input type="hidden" name="_subject" value="New submission!" placeholder="Subject" />
								</div>
								<div className="col">
									<input type="text" name="_honey" className="_honey" />
								</div>
							</div>

							<div className="form_message">
								<textarea onKeyDown={() => this.ThirdFieldCheck()} name="message" autoCorrect="on" autoComplete="off" cols={50} rows={10} placeholder="Message (required)" required className="ThirdElement" />
							</div>
						</div>

						<button className="ContactSubmit" type="submit">Submit</button>
					</form>

					<div className="breaker">
						<div className="smallLine"></div>
						<h4>OR</h4>
						<div className="smallLine"></div>
					</div>

					<h2 style={{ textAlign: "center" }}>Fill out the form <a href="https://formsubmit.co/el/yibohe">here</a></h2>
				</div>
			</main>
		)
	}
}

export default Contact;
