import React from "react";
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const GreenSwitch = withStyles({
  switchBase: {
    '&$checked': {
      color: green[500],
    },
    '&$checked + $track': {
      backgroundColor: green[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

export const AddProject = ({name, description, isComplete, updateField, addProject, cancelUpdate}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <form className={classes.root} noValidate autoComplete="off">
        <FormGroup>
          {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
          <FormControlLabel
            control={
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                value={name}
                onChange={(event) => {
                  updateField('name', event.target.value);
                }}
              />
            }
          />
          <FormControlLabel
            control={
              <TextField
                id="description"
                label="Description"
                multiline
                variant="outlined"
                value={description}
                onChange={(event) => {
                  updateField('description', event.target.value);
                }}
              />
            }
          />
          <FormControlLabel
            label="Complete"
            control={
              <Checkbox
                checked={isComplete}
                onChange={(event) => {
                  updateField('isComplete', event.target.checked);
                }}
                name="isComplete"

                color="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            }
          />
        </FormGroup>
        <div className="">
          <Button
            variant="contained"
            className={classes.button}
            startIcon={<CancelIcon />}
            onClick={cancelUpdate}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<SaveIcon />}
            onClick={addProject}
          >
            Save
          </Button>
        </div>
      </form>
    </Paper>
  );
};
