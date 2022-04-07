
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
        topContainer: {
            marginTop:"48px",
            paddingBottom: "60px",
            width:"90%",
            marginLeft:"auto", 
            marginRight:"auto",
           },

        noticesContainer: {
            marginRight: "50px", 
            marginLeft: "20px", 
            alignItems: "center",
            borderStyle: "outline",
            backgroundColor: "red",
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
                    tags.includes(searchText.toLowerCase()) ||
                    description.includes(searchText.toLowerCase()) ||
                    subject.includes(searchText.toLowerCase())
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
        className={classes.topContainer}
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

        </Grid>

        <Grid container 
          direction = "row"
          maxWidth='lg'
          minWidth = 'lg'
          spacing={2}
          classname={classes.noticesContainer}
          >
              {notices.map((notice, key) => (
                  <Grid item xs ={8} sm ={6} md={3}>
                      <SingleNotice notice={notice}/>
                  </Grid>
              ))}
          </Grid>

        <AddNotice refresh={rehresh}/>
        </>
    );
  }
  
  export default PersonSearch;


  
  

