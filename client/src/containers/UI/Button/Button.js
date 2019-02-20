import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class CustomButton extends Button {}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function ContainedButtons(props) {
  const { classes } = props;
  return (
  <Button {...props} className={classes.button}>
    {props.children}
  </Button>)
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);