import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

import { makeStyles } from '@material-ui/core';
import styles from './retailerStyle';
import WebIcon from '@material-ui/icons/Web';

const useStyles = makeStyles(styles);

const PaperRetailers = (props) => {
    const classes = useStyles();
    return(
        <div>
            <a href={props.link} target="_blank" style={{textDecoration: "none"}}>
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
                            {props.phone}
                        </div>
                    </Typography>
                </Paper>
            </a>
        </div>
    );
}

export default PaperRetailers;