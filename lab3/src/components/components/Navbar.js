import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { useState } from "react";
import { makeStyles, withThemeCreator } from "@material-ui/styles";
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";

function Navbar() {

    const useStyles= makeStyles({
      appbar: {
        background: "#121212",
        color: "white",
      },
      
      typography: {
        marginRight: "35px",
        cursor: "pointer",
      },

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

            <Link to="/"
            style={{ textDecoration: 'none', color:"white"}}
            >
              <Typography 
              variant="h6"
              className={classes.typography}
              >
                Find Student
              </Typography>
            </Link>

            <Link to="/group"
            style={{ textDecoration: 'none', color:"white"}}
            >
              <Typography 
              variant="h6"
              className={classes.typography}
              >
                Find Group
              </Typography>
            </Link>
        </Toolbar>
      </Container>
      </AppBar>
    );
  }
  
  export default Navbar;
  