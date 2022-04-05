import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from  '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function SingleNotice({notice}) {
    return (
        <Card style={{width: "100%"}}>
            <CardHeader
            avatar={<AccountCircleIcon 
            />}
            title={notice.firstName + " " + notice.lastName}
            subheader={"Tags: " + notice.tags}
            >
            </CardHeader>

            <CardContent>
                <Typography
                variant="body2"
                color="textSecondary"
                >
                    {notice.description}
                </Typography>
            </CardContent>
         </Card>
    );
  }
  
  export default SingleNotice;