import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

function GridItem(props) {
	const { col } = props;

	return (
		<Grid {...props} item>
			{props.children}
		</Grid>
	);
}

GridItem.propTypes = {
	col: PropTypes.number,
};

export default GridItem;
