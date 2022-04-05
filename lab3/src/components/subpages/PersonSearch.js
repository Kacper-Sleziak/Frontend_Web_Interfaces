
import Navbar from "../components/Navbar";
import Grid from "@material-ui/core/Grid";
import SingleNotice from "../components/SingleNotice";
import TextField  from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import React from 'react';
import StudentService from "../StudentService";
import AddNotice from "./AddNotice";
import {useEffect} from 'react';
import {useState} from 'react';
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";


function PersonSearch() {
    const [notices, setNotices] = useState([...StudentService.getStudents()]);

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
    
    function rehresh() {
        setNotices([...StudentService.getStudents()])
    }

    useEffect(() => {
        if (searchText === ""){
            setNotices([...StudentService.getStudents()])
        }

        else {
            const foundNotices = []

            for (var i = 0; i < notices.length ; i++) {
                var notice = notices[i]
                var tags = notice.tags.toLowerCase()
                var description = notice.description.toLowerCase()
                var subject = notice.subject.toLowerCase()
                
                if(
                    tags.includes(searchText) ||
                    description.includes(searchText) ||
                    subject.includes(searchText)
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
            style={{marginTop: "20px"}}
            >
                <Typography
                variant="h5"
                >
                    Find Student
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

        <AddNotice refresh={rehresh}/>
        </>
    );
  }
  
  export default PersonSearch;
  

