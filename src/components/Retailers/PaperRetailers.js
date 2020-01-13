import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

import { makeStyles } from '@material-ui/core';
import styles from './retailerStyle';
import PhoneIcon from '@material-ui/icons/Phone';
import WebIcon from '@material-ui/icons/Web';

const useStyles = makeStyles(styles);

const PaperRetailers = (props) => {
    const classes = useStyles();
    return(
        <div>
            <Paper elevation={3} variant="outlined" className={classes.gridPaper}>
                <Typography variant="body1" className={classes.retailTitle}>
                    <div>
                        <WebIcon style={{float: "left"}}/>
                        {props.label}
                    </div>
                    <div>
                        {props.name}
                        <Divider className={classes.divide}/>
                    </div>
                </Typography>
                <Typography variant="body2" className={classes.location}>
                    {props.address}
                    <div>
                        <PhoneIcon style={{float: "left", marginRight: "0.5em", marginTop: "0.5em"}}/>
                        {props.phone}
                    </div>
                    <div>
                        {props.link}
                    </div>
                </Typography>
            </Paper>
        </div>
    );
}

export default PaperRetailers;