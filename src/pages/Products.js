import React from "react";
import Grid from '@material-ui/core/Grid';
import Sidebar from "../components/Sidebar";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
import {makeStyles} from "@material-ui/core/styles";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  darkBg: {
    background: '#ddd',
  },
});

function Products() {
  const classes = useStyles();

  const rows = [
    {id: 1, title: "Doll Ice cream", price: "100$"},
    {id: 2, title: "Kim Ice cream", price: "250$"},
    {id: 3, title: "Scope Ice cream", price: "200$"},
  ];

  return (
    <Grid container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
    >
      <Grid item md={2}>
        <Sidebar/>
      </Grid>
      <Grid item container md={10} justify="space-around" alignItems="center">
        <Grid item md={11}>
          <Box p={2}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" href="/">
                Main
              </Link>
              <Typography color="textPrimary">Products</Typography>
            </Breadcrumbs>
          </Box>
        </Grid>
        <Grid item md={11}>
          <TableContainer>
            <Table>
              <TableHead className={classes.darkBg}>
                <TableRow>
                  <TableCell align="center">ID</TableCell>
                  <TableCell align="center">Title</TableCell>
                  <TableCell align="center">Price</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell align="center">{row.id}</TableCell>
                    <TableCell align="center">{row.title}</TableCell>
                    <TableCell align="center">{row.price}</TableCell>
                    <TableCell align="center">
                      <Button variant="contained" color="primary">
                        edit
                      </Button>
                      <Button variant="contained" color="secondary">
                        delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Products

