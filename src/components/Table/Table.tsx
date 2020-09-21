import React, { useEffect, useState } from "react";
import Auxillary from '../../hoc/Auxillary/Auxillary';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

const TableComponent = (props: any) => {
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
      maxWidth:1000
    },
  });
  const classes = useStyles();
  const [data, setdata]:any = useState([]);
  useEffect(() => {
    let User: any = {
      "user": {
        "username": localStorage.getItem('Username'),
        "name": {
          "title": localStorage.getItem('Title'),
          "first": localStorage.getItem('FirstName'),
          "last": localStorage.getItem('LastName')
        },
        "email": localStorage.getItem('Email'),
        "password": localStorage.getItem('Password'),
        "phone": localStorage.getItem('Mobile'),
      },
    };
    let length=props.data.length;
    props.data[length]=User;
    setdata(props.data);
    }, [setdata]);
  return (
    <Auxillary>
       <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Username</StyledTableCell>
            <StyledTableCell align="right">name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Phone</StyledTableCell>
            <StyledTableCell align="right">Gender</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row:any) => (
            <StyledTableRow key={row.user.username}>
              <StyledTableCell component="th" scope="row">
              {row.user.username}
              </StyledTableCell>
              <StyledTableCell align="right">{row.user.name.title} {row.user.name.first} {row.user.name.last}</StyledTableCell>
              <StyledTableCell align="right">{row.user.email}</StyledTableCell>
              <StyledTableCell align="right">{row.user.phone}</StyledTableCell>
              <StyledTableCell align="right">{row.user.gender}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Auxillary>
  );
};

export default TableComponent;
