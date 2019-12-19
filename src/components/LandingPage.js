import React from 'react';
import NavBar from "./NavBar";
import classNames from "classnames";
import Parallax from "./Parallax/Parallax.js";
import GridContainer from "./Grid/GridContainer.js";
import GridItem from "./Grid/GridItem.js";
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import Typography from '@material-ui/core/Typography/Typography';

import styles from "../assets/img/jss/components.js";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(styles);

const LandingPage = (props) => {
    const classes = useStyles();
    return (
        <div>
            <NavBar/>
            <Parallax image={require("../assets/img/bg3.jpg")}>
                <div className={classes.container}>
                <GridContainer>
                    <GridItem>
                    <div style={{backgroundColor: "0,0,0,0.5"}}>
                        <h1 className={classes.title}>Three Trees Flooring</h1>
                        <h3 className={classes.subtitle}>
                            Three Times The Quality
                        </h3>
                    </div>
                    </GridItem>
                </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)} style={{height: "1000px", backgroundColor: "#84817b"}}>
                <Typography variant="h3" align="center" style={{paddingTop: "1.5em"}}>
                    We <span style={{color: "#d2e154"}}>mastered</span> hardwood
                </Typography>
                <Card style={{marginTop: "2em", height: "30em", width: "50%", backgroundColor:"#333230"}} className={classes.mainRaised}>
                    <CardContent className={classes.card}>
                        <Typography variant="h4" align="center" style={{color: "white"}}>
                            Our Guarantee
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            
        </div>
    );
}

export default LandingPage;