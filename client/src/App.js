import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import { IosDevices, IosDeploy, Xcodebuild } from './components/';
import Layout from './hoc/Layout/Layout';
import './App.css';



class App extends Component {
	render() {
		return (
			<Layout>
				<Switch>
					<Route path="/xcodebuild" component={Xcodebuild} />
					<Route path="/" component={IosDeploy} />
				</Switch>
			</Layout>
		);
	}
}

export default App;
