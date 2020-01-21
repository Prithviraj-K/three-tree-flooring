import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";

import styles from "./styleCardDesign";

const useStyles = makeStyles(styles);

const CardDesign = () => {

    const classes = useStyles();

    return(
        <div>
            <Grid container>
                <Grid item xs={12} s={12} md={4} lg={4} className={classes.cardS}>
                    <Card>
                        Card 1
                    </Card>
                </Grid>
                <Grid item xs={12} s={12} md={4} lg={4} className={classes.cardS}>
                    <Card>
                        Card 2
                    </Card>
                </Grid>
                <Grid item xs={12} s={12} md={4} lg={4} className={classes.cardS}>
                    <Card>
                        Card 3
                    </Card> 
                </Grid>
            </Grid>
        </div>
    );
}

export default CardDesign;