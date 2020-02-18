import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import './TabRefStyle/tabRef.css';

const useStyles = makeStyles(theme => ({
  root :{
    height:500,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
    maxWidth: 600,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  Paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,

  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const TabRefname = [
  'Siege',
  'Motif',
  'Cause',
  'Sous Siege',
  'Type Interruption'

];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const CreateTableRef = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = event => {
    console.log(" je suis danc le change");
  };

  const handleChangeMultiple = event => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };



  return (
    // <div className="grid-container">
    //   <div className="headerRef">1</div>
    //   <div className="gaucheform">2</div>
    //   <div className="droitform">3</div>
    //   <div className="foteerfrom">4
    //   1<br/>
    //   1<br/>
    //   1<br/>
    //   1<br/>
    //   1<br/>
    //   1<br/>
    //   1<br/>
    //   1</div>
    // </div>
    <Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>xs=12</Paper>
      </Grid>
      <Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12}>
        <Paper className={classes.paper}>xs=12</Paper>
      </Grid>

      </Grid>

    </Grid>
  );
}


export default CreateTableRef;