import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

import { makeStyles } from '@material-ui/core';
import styles from './retailerStyle';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles(styles);

const PaperRetailers = (props) => {
    const classes = useStyles();
    return(
        <div>
            <Paper elevation={3} variant="outlined" className={classes.gridPaper} style={{marginBottom: "1.5em"}}>
                <Typography variant="body1" className={classes.retailTitle}>
                    <div>
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