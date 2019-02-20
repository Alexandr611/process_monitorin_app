import React, { Component } from 'react';
import { connect } from 'react-redux'

import Aux from '../../hoc/Aux/Aux';
import { Table } from '../../containers/';
import { Container, GridItem, Title } from '../../containers/';
import { getConnection } from '../../helpers/socket';

class IosDevices extends Component {
	state = {};

	componentDidMount() {

	}

	render() {
		return (
			<Container>
				<GridItem xs={12}>
					<Title header={'h5'}> ios devices table</Title>
				</GridItem>
				<GridItem xs={12}>
					<Table />
				</GridItem>
			</Container>
		);
	}
}

export default connect()(IosDevices);
