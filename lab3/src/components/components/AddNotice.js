
import Navbar from "./Navbar";
import Grid from "@material-ui/core/Grid";
import SingleNotice from "./SingleNotice";
import TextField  from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { Button, Container, Typography } from "@material-ui/core";
import React from 'react';
import StudentService from "../services/StudentService";
import { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/styles";

function AddNotice(props) {

  // styles
  const useStyles= makeStyles({
    container: {
        marginTop:"48px",
        paddingBottom: "60px",
        width:"90%",
        marginLeft:"auto", 
        marginRight:"auto",
       },
      
    header: {
      fontSize: "25px",
      marginTop: "30px"
    }
    });

    // States
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [tags, setTags] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const [subject, setSubject] = useState("");

    // Add Notice to array in Student Service
    const handleSubmit = (e) => {
      if 
      (
        // Basic text field validation
        firstName !== "" &&
        lastName !== "" &&
        tags !== "" &&
        email !== "" &&
        description !== "" &&
        subject !== ""
      ){
        const min = Math.ceil(1000);
        const max = Math.floor(2000);
        var id = Math.floor(Math.random() * (max - min + 1)) + min;
        
        const newNotice = {
          id: id, 
          firstName: firstName, 
          lastName: lastName,
          email: email,
          subject, 
          tags: tags, 
          description: description
          }

          StudentService.addStudent(newNotice);
          props.refresh();
          
          // clear tex fields
          setFirstName("");
          setLastName("");
          setTags("");
          setEmail("");
          setDescription("");
          setSubject("");
        }
    }

    const classes = useStyles();


    return (
      <>
      <Navbar/>

      <Grid container 
      className={classes.container}
      direction="column"
      alignItems="center"
      spacing={3}
      >
      
      <Grid item>
        <Typography
        className={classes.header}
        >
        New Notice Creator
        </Typography>
      </Grid>
      
      <Grid item>
        <TextField
        label="first name"
        size="large"
        variant="standard" 
        onChange = {(e) => setFirstName(e.target.value)}
        value={firstName}
        />
      </Grid>

      <Grid item>
        <TextField
        label="last name"
        size="large"
        variant="standard"
        onChange = {(e) => setLastName(e.target.value)} 
        value={lastName}
        />
      </Grid>

      <Grid item>
        <TextField
        label="tags"
        size="large"
        variant="standard" 
        onChange = {(e) => setTags(e.target.value)}
        value={tags}
        />
      </Grid>

      <Grid item>
        <TextField
        label="email"
        size="large"
        variant="standard"
        onChange = {(e) => setEmail(e.target.value)}
        value={email} 
        />
      </Grid>

      <Grid item>
        <TextField
        label="description"
        size="large"
        variant="standard" 
        onChange = {(e) => setDescription(e.target.value)}
        value={description}
        />
      </Grid>

      <Grid item>
        <TextField
        label="subject"
        size="large"
        variant="standard" 
        onChange = {(e) => setSubject(e.target.value)}
        value={subject}
        />
      </Grid>

      <Button
      type="submit"
      variant="outlined"
      style={{marginTop:"20px"}}
      onClick={handleSubmit}
      >
        Add notice
      </Button>
      
      </Grid>
      </>
    );
  }
  
  export default AddNotice;
  