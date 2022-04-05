
import Navbar from "../components/Navbar";
import Grid from "@material-ui/core/Grid";
import SingleNotice from "../components/SingleNotice";
import TextField  from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { Container } from "@material-ui/core";
import React from 'react';
import { students } from "../data";
import { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/styles";


function PersonSearch() {
    const [notices, setNotices] = useState([]);

    const useStyles= makeStyles({
        container: {
            marginTop:"48px",
            paddingBottom: "60px",
            width:"90%",
            background: "#D9D9D9",
            marginLeft:"auto", 
            marginRight:"auto",
           }
        });

    const [searchText, setSearchText] = useState("")

    
    // Setting notice by searching values
    useEffect(() => {
        if (searchText === undefined){
            console.log(students)
            setNotices(students)
            console.log(students)
        }

        else {
            const foundNotices = []

            for (var i = 0; i < students.length ; i++) {
                var notice = students[i]
                var firstName = notice.firstName.toLowerCase()
                var lastName = notice.lastName.toLowerCase()
                var tags = notice.tags.toLowerCase()
                var description = notice.description.toLowerCase()
                
                if(
                    firstName.includes(searchText) ||
                    lastName.includes(searchText) ||
                    tags.includes(searchText) ||
                    description.includes(searchText)
                )

                {
                    foundNotices.push(notice)
                }
            }
            setNotices(foundNotices)
        }

    }, [searchText])

    const classes = useStyles();

    return (
        <>
        <Navbar/>

        <Grid container 
        className={classes.container}
        direction="column"
        alignItems="center"

        >
            
            <Grid item
            xs ={12} sm={8} md={8}
            style={{ display: "flex", justifyContent: "center", marginBottom: "60px" }}
            >   
                <TextField
                label="szukaj"
                size="large"
                variant="standard"  
                onChange = {(e) => setSearchText(e.target.value)}
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
                    {notices.map((notice, key) => (
                        <Grid item xs ={12} sm ={8} md={4}>
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
  

