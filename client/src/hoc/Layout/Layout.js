import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export default props => {
	return (
		<Aux>
			<Header />
			{props.children}
			{/* <Footer /> */}
		</Aux>
	);
};
