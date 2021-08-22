// struct
import Header from './components/header';
import Footer from './components/footer';
import _404 from './components/404';
// pages
import Home from './components/home';
import Projects from './components/projects';
import ThankYou from './components/ThankYou';
// deps
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Component } from 'react'

interface AppProps {};

interface AppState {};

class App extends Component<AppProps, AppState> {

	constructor(props: AppProps) {
		super(props);
	}
	render() {
		return (
			<Router>
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/projects" component={Projects} />
					<Route path="/ThankYou" exact component={ThankYou} />
					<Route path="/" component={_404} />
				</Switch>
				<Footer />
			</Router>
		)
	}
}

export default App;
