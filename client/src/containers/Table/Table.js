import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'auto',
	},
	table: {
		minWidth: 700,
	},
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
	id += 1;
	return { id, name, calories, fat, carbs, protein };
}

const rows = [
	createData('1', 159, 6.0, 'ios-deploy', 'null'),
	createData('2', 237, 9.0, 'ios-deploy', 'null'),
	createData('3', 262, 16.0, 'ios-device', 'null'),
	createData('4', 305, 3.7, 'ios-device', 'null'),
	createData('5', 356, 16.0, 'ios-deploy', 'null'),
];

function SimpleTable(props) {
	const { classes } = props;

	return (
		<Paper className={classes.root}>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<TableCell>#</TableCell>
						<TableCell align="right">PID</TableCell>
						<TableCell align="right">PPID</TableCell>
						<TableCell align="right">Name</TableCell>
						<TableCell align="right">Protein (g)</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map(row => (
						<TableRow key={row.id}>
							<TableCell component="th" scope="row">
								{row.name}
							</TableCell>
							<TableCell align="right">{row.calories}</TableCell>
							<TableCell align="right">{row.fat}</TableCell>
							<TableCell align="right">{row.carbs}</TableCell>
							<TableCell align="right">{row.protein}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Paper>
	);
}

SimpleTable.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
