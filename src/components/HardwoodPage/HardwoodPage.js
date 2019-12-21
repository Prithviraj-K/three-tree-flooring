import React from 'react';
import classNames from 'classnames';
import Header from '../Header/Header';
import HeaderLinks from '../Header/HeaderLinks';
import Grid from '@material-ui/core/Grid';
import { Typography} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import WoodCard from '../WoodCard/WoodCard';

import styles from "../../assets/img/jss/components.js";
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(styles);
  
const HardwoodPage = () => {
    const classes = useStyles();

    return(
        <div>
            <Header
                rightLinks={<HeaderLinks />}
                fixed
                color="dark"
                changeColorOnScroll={{
                    height: 400,
                    color: "dark"
                }}
            />
            <div className={classNames(classes.main, classes.mainRaised)} style={{backgroundColor: "#8f8f8e"}}>
                <Typography variant="h2" style={{marginTop: "3em", padding: "1em"}}>
                    Hardwood
                </Typography>
                <Divider style={{marginBottom: "2em"}}/>
                <Grid container center>
                    <Grid item md={4} xs={6}>
                        <WoodCard/>
                    </Grid>
                    <Grid item md={4} xs={6}>
                        <WoodCard/>
                    </Grid>
                    <Grid item md={4} xs={6}>
                        <WoodCard/>
                    </Grid>
                    <Grid item md={4} xs={6}>
                        <WoodCard/>
                    </Grid>
                </Grid>  
            </div>
        </div>  
    );
}

export default HardwoodPage;