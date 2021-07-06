import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import _404 from './components/404';
import { HashRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
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
					<Route path="/" component={_404} />
				</Switch>
				<Footer />
			</Router>
		)
	}
}

export default App;
