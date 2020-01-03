import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core';
import styles from './retailerStyle';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles(styles);

const PaperRetailers = (props) => {
    const classes = useStyles();
    return(
        <div>
            <Paper variant="outlined" className={classes.gridPaper} style={{marginBottom: "1.5em"}}>
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
                        <PhoneIcon style={{marginRight: "0.5em"}}/>
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