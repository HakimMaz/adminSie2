import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Paper from  '@material-ui/core/Paper';
import Typography  from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

 const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const CreateSiege=( props)=>{
    const classes = useStyles();
  

    return (
        <Paper  className={props.style}>
        
        <FormControl className={classes.root}>
           <Input placeholder="Placeholder" inputProps={{ 'aria-label': 'description' }} />
           <Button variant="contained" color="primary">
             Enregistrer
           </Button>             
        </FormControl>
        </Paper>
    )

}

export default CreateSiege;
