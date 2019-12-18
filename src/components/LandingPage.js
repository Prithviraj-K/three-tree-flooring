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
            <Parallax image={require("../assets/img/bg2j.jpg")}>
                <div className={classes.container}>
                <GridContainer>
                    <GridItem>
                    <div>
                        <h1 className={classes.title}>Three Trees Flooring</h1>
                        <h3 className={classes.subtitle}>
                        Excellent design, mastered hardwood.
                        </h3>
                    </div>
                    </GridItem>
                </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)} style={{height: "1000px"}}>
                <Typography variant="h2" align="center" style={{paddingTop: "1.5em"}}>
                    Certifications
                </Typography>
                <Card style={{marginTop: "5em", marginRight: "20em"}} className={classes.mainRaised}>
                    <CardContent className={classes.card}>
                        <h1>Certifications</h1>
                    </CardContent>
                </Card>
            </div>
            
        </div>
    );
}

export default LandingPage;