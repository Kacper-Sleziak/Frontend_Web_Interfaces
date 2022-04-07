import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from  '@material-ui/core/Typography';
import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from "@material-ui/styles";


function SingleNotice({notice}) {

    // Styles
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
            display: "flex",
           },
        
        tag: {
            marginLeft: "5px",
            padding: "3px",
            border: "0.5px solid #f7f7f7",
            borderRadius: "20px",
            backgroundColor: "#f7f7f7",
        }
        });

    const classes = useStyles();
    
    const renderTags = (tags) => {
        var splitedTags = tags.split(" ");

        return(
            splitedTags.map((tag) =>
                <div
                className={classes.tag}
                >
                    {tag}
                </div>
            )
        )
    }

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

                <div
                variant="body2"
                color="textPrimary"
                className={classes.tags}
                >
                    <div
                    style={{marginTop: "3px"}}
                    >
                    Tags: 
                    </div> 
                    
                    {renderTags(notice.tags)}
                </div>
            </CardContent>
         </Card>
    );
  }
  
  export default SingleNotice;