
import Navbar from "../components/Navbar";
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import SingleNotice from "../components/SingleNotice";
import TextField  from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import React from 'react';
import { useState } from "react";

function PersonSearch() {
    const [notices, setNotices] = useState([
        {id: 1, firstName: "Jan", lastName: "Kowalski", email: "jkowalski@gmail.com", 
        tags:"PIW", description: "Poszukuje osoby do projektu "},
        
        {id: 2, firstName: "Grzegorz", lastName: "Kowalski", email: "gkowalski@gmail.com", 
        tags:"SO2, Szandała", description: "Poszukuje osoby do projektu "},

        {id: 3, firstName: "Michał", lastName: "Kowalski", email: "mkowalski@gmail.com", 
        tags:"RiPO, Serafin", description: "Poszukuje osoby do projektu "},

        {id: 4, firstName: "Kacper", lastName: "Kowalski", email: "kkowalski@gmail.com", 
        tags:"BD2", description: "Poszukuje osoby do projektu "},
    ]);


    return (
        <>
        <Navbar/>
        <Grid container 
        direction="column"
        alignItems="center"
        justifyContent="center"
        color="primary"
        borderColor="primary.main"
        style={{backgroundColor: "#D9D9D9", width:"90%", 
                marginLeft:"auto", marginRight:"auto", 
                paddingBottom: "20px"
            }}
        >
            <Grid item
            xs ={12} sm={8} md={8}
            style={{ display: "flex", justifyContent: "center", marginBottom: "60px" }}
            >   
                <TextField
                label="szukaj"
                color="primary"
                size="large"
                variant="standard"
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
            style={{marginLeft: "5%", marginRight: "5%"}}
            >
                <Grid container 
                maxWidth='lg'
                spacing={2}
                >
                    {notices.map((notice) => (
                        <Grid item xs ={12} sm ={6} md={4}>
                            <SingleNotice notice={notice}/>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
        </>
    );
  }
  
  export default PersonSearch;
  

