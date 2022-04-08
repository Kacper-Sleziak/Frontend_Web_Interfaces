import Nav from "../components/Nav";
import Grid from "@material-ui/core/Grid";
import SingleNotice from "../components/SingleNotice";
import TextField  from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import React, { Component } from "react";
import StudentService from "../services/StudentService";
import AddNotice from "../components/AddNotice";
import {useEffect} from 'react';
import {useState} from 'react';
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

// Styles of page
const useStyles= makeStyles({
  topContainer: {
      marginTop:"48px",
      paddingBottom: "60px",
      width:"80%",
      marginLeft:"auto", 
      marginRight:"auto",
      borderBottom: "1px solid black"
  },

  noticesContainer: {
      width:"90%",
      alignItems: "center",
      borderStyle: "outline",
      paddingTop: "20px",
      borderBottom: "1px solid black"
  },

  searchingBar: {
      display: "flex", 
      justifyContent: "center", 
      marginTop:"30px"
  },

  noResultsText: {
      marginTop:"80px", 
      marginBottom:"80px", 
      display:"flex", 
      justifyContent: "center"
  }
  });
  

export default class GroupSearch extends Component {

    constructor(props) {
      super(props);

      this.state = {
        searchText: "",
        groups: []
      };
    }

    render() {
      return (
        <>
        <Nav/>

        <Grid container 
        className={{}}
        >
            <Grid item
            style={{marginTop: "20px"}}
            >
                <Typography
                variant="h5"
                >
                    Find Group
                </Typography>
            </Grid>
            
            <Grid item
            xs ={12} sm={8} md={8}
            style={{ display: "flex", justifyContent: "center", marginBottom: "60px" }}
            >   
                <TextField
                label="search"
                size="large"
                variant="standard"  
                onChange = {(e) => this.setState({searchText: (e.target.value)})}
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <SearchRoundedIcon />
                    </InputAdornment>
                    )
                }}
                style ={{marginTop:"30px"}}
                />
            </Grid>
            
            
            <Grid item 
            xs ={12} sm={12} md={12}
            maxWidth='lg'
            >
                <Grid container 
                direction = "row"
                maxWidth='lg'
                minWidth = 'lg'
                spacing={2}
                >
                </Grid>
            </Grid>
        </Grid>

        </>
      )
    };
}
