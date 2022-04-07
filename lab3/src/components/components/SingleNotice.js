import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from  '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {useState} from 'react';
import { makeStyles } from "@material-ui/styles";


function SingleNotice({notice}) {
    const useStyles= makeStyles({
        card: {
            width: "370px",
            marginRight: "auto",
            marginLeft: "auto",
            marginBottom: "20px",
            borderRadius: "10%",
        },
        tags: {
            marginTop:"19px",
            border: "2px",
           },
          
        });
    const classes = useStyles();

    return (
        <Card
        className = {classes.card}
        >
            <CardHeader
            avatar={<AccountCircleIcon 
            />}
            title={notice.firstName + " " + notice.lastName}
            subheader={"Subject: " + notice.subject}
            >
            </CardHeader>

            <CardContent>
                <Typography
                variant="body2"
                color="textSecondary"
                >
                    {notice.description}
                </Typography>

                <Typography
                variant="body2"
                color="textPrimary"
                className={classes.tags}
                >
                    Tags: {notice.tags}
                </Typography>
            </CardContent>
         </Card>
    );
  }
  
  export default SingleNotice;