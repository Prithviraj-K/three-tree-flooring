import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core';
import styles from './retailerStyle';

const useStyles = makeStyles(styles);

const PaperRetailers = (props) => {
    const classes = useStyles();
    return(
        <div>
            <Paper variant="outlined" className={classes.gridPaper}>
                <Typography variant="body1" className={classes.retailTitle}>
                    <div style={{textDecoration: "underline"}}>
                        {props.label}
                    </div>
                    <div>
                        {props.name}
                    </div>
                </Typography>
                <Typography variant="body2" className={classes.location}>
                    {props.address}
                    <div>
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