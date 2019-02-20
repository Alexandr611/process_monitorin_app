import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './container.css';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
});

function Container(props) {
	const { classes } = props;

	return (
		<div className={`${classes.root} autoWidth `}>
			<Grid container spacing={24}>
				{props.children}
			</Grid>
		</div>
	);
}

Container.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Container);
