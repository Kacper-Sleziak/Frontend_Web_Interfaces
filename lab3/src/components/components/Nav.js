import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

function Nav() {

    const useStyles= makeStyles({
      appbar: {
        background: "#121212",
      },
      
      typography: {
        color: "white",
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
  
  export default Nav;
  