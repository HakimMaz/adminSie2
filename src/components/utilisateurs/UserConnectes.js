import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import AlertDialog from './../ui/dialog';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(id, user, dateConnection, ipAdress) {
  return { id, user, dateConnection, ipAdress};
}

const rows = [
  createData('1','SADOU Oulhadj','10-02-2019','10.5.28.88'),
  createData('2','LARBI Baraka','10-02-2019','10.5.28.56'),
  createData('3','karim bENABID','10-02-2019','10.5.28.13'),
  createData('4','seliman djaja','10-02-2019','10.5.28.36'),
 
];

export default  function  UserTable() {
  const classes = useStyles();
  const [open,setOpen]=React.useState(false);
    const HandleDeconnect = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

 

  return (
   <div>  
    <AlertDialog  open={open}  handleClose={handleClose}/>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">User</TableCell>
            <TableCell align="right">Date de connection</TableCell>
            <TableCell align="right">Adresse IP</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
            
              <TableCell align="right">{row.user}</TableCell>
              <TableCell align="right">{row.dateConnection}</TableCell>
              <TableCell align="right">{row.ipAdress}</TableCell>
              <TableCell align="right">
                      <Button variant="contained" color="primary" onClick={HandleDeconnect}>
                          Déconnection
                      </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div> 
  );
}
