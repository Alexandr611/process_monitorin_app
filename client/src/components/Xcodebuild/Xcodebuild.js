import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Table } from '../../containers/';
import { Container, GridItem, Title } from '../../containers/';
import { getConnection } from '../../helpers/socket';

class Xcodebuild extends Component {
	state = {};

	componentDidMount() {

	}

	render() {
		return (
			<Container>
				<GridItem xs={12}>
					<Title header={'h5'}> Xcodebuild table</Title>
				</GridItem>
				<GridItem xs={12}>
					<Table />
				</GridItem>
			</Container>
		);
	}
}

export default connect()(Xcodebuild);
