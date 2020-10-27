import React from "react";
import Grid from '@material-ui/core/Grid';
import Sidebar from "../components/Sidebar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

function Main() {
  return (
    <>
        <Grid container justify="center">
          <Grid item md={2}>
            <Sidebar/>
          </Grid>
          <Grid item md={10}>
            <Box p={2}>
              <Typography>This is a practical project to learn react by myself so there should be lots of problem in my project if you saw any please let me know !</Typography>
              <Typography>and it's gonna be a dynamic admin panel that render panel based on api response !</Typography>
              <Typography>Thank you!</Typography>
            </Box>
          </Grid>
        </Grid>
    </>
  )
}

export default Main
