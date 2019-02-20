import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getConnection } from '../../helpers/socket';
import Aux from '../../hoc/Aux/Aux';
import * as iosdeployAction from '../../store/actions/';
import { Table } from '../../containers/';
import { Container, GridItem, Title } from '../../containers/';
import Button from '@material-ui/core/Button';

class IosDeploy extends Component {
	state = {
		messager: null
	};

	componentDidMount() {

	}

	clickHandler(event) {
		alert('clickHandler');
	}

	render() {
		console.log(this.props)
		return (
			<Container>
				<GridItem xs={12}>
					<Title header={'h5'}> IosDeplot table</Title>
				</GridItem>
				<GridItem xs={12}>
					<Table />
				</GridItem>
				<Button color="primary" variant="contained" onClick={() => this.props.getIosDeployProcesses()} >
					Reset
				</Button>
			</Container>
		);
	}
}

const mapStateToProps = state => {
	return {
		processes: state.iosdeploy.processes,
		loading: state.iosdeploy.loading
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getIosDeployProcesses: () => dispatch(iosdeployAction.getIosDeployInfo())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(IosDeploy);
