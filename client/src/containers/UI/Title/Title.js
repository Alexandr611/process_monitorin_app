import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './title.css';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
	root: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2,
	},
});

function Title(props) {
	const { classes, header, children } = props;

	return (
		<div className="titleWidth">
			<Typography variant={header || 'h2'} component={header || 'h2'}>
				{children}
			</Typography>
		</div>
	);
}

Title.propTypes = {
	header: PropTypes.string,
};

export default withStyles(styles)(Title);
