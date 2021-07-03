import Header from './components/header';
import _404 from './components/404';
import { BrowserRouter, Route } from 'react-router-dom';
import React, { Component } from 'react'

interface AppProps {};

interface AppState {};

class App extends Component<AppProps, AppState> {

	constructor(props: AppProps) {
		super(props);
	}
	render() {
		return (
			<BrowserRouter>
				<Route>
					<Header page={(():string => {
						const check = RegExp(/[^\/]*$/);
						const results = check.exec(window.location.href);

						return (results === null) ? 'home' : results[0];
					})()} />
					{(() => {
						console.log(window.location.href)
					})()}
				</Route>
			</BrowserRouter>
		)
	}
}

export default App;
