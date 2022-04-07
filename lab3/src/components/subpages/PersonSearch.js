
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
import { Container } from "@material-ui/core";


function PersonSearch() {
    const [notices, setNotices] = useState([...StudentService.getStudents()]);

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
            const studentNotices = [...StudentService.getStudents()]

            for (var i = 0; i < studentNotices.length ; i++) {
                var notice = studentNotices[i]
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
        <div
        style={{backgroundColor:"#F9F8F8"}}
        >
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

        <Container
        className={classes.noticesContainer}
        >
            {notices.map((notice, key) => (
                <SingleNotice notice={notice}/>
                ))}
          </Container>

        <AddNotice refresh={rehresh}/>
        </div>
    );
  }
  
  export default PersonSearch;


  
  

