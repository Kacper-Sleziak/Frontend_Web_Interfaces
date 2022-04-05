import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { useState } from "react";
import { makeStyles } from "@material-ui/styles";

function Navbar() {

    const useStyles= makeStyles({
      appbar: {
        background: "#121212",
        color: "white",
      },
      
      toolbar:{

      },

      typography: {
        marginRight: "35px",
      }
    });

    const classes = useStyles();
    
    return (
      <AppBar 
      className={classes.appbar}
      elevation={0}
      >
        <Container maxWidth="xl">
          <Toolbar 
          variant="dense"
          spacing={20}
          >
            <Typography 
            variant="h6"
            className={classes.typography}
            >
              Find Collaborator
            </Typography>

            <Typography 
            variant="h6"
            className={classes.typography}
            >
              Create Notice
            </Typography>

            <Typography 
            variant="h6"
            className={classes.typography}
            >
              Find Group
            </Typography>

            <Typography 
            variant="h6"
            className={classes.typography}
            >
              Create Group
            </Typography>
        </Toolbar>
      </Container>
      </AppBar>
    );
  }
  
  export default Navbar;
  