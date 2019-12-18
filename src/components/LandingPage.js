import React from 'react';
import NavBar from "./NavBar";
import classNames from "classnames";
import Parallax from "./Parallax/Parallax.js";
import GridContainer from "./Grid/GridContainer.js";
import GridItem from "./Grid/GridItem.js";
// eslint-disable-next-line
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';

import styles from "../assets/img/jss/components.js";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(styles);

const LandingPage = (props) => {
    const classes = useStyles();
    return (
        <div>
            <NavBar/>
            <Parallax image={require("../assets/img/bg.jpg")}>
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
            <div className={classNames(classes.main, classes.mainRaised)}>
                <Card>
                    <CardContent className={classes.card}>
                        <h1>Certifications</h1>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className={classes.card}>
                        <h1>Certifications</h1>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className={classes.card}>
                        <h1>Certifications</h1>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className={classes.card}>
                        <h1>Certifications</h1>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className={classes.card}>
                        <h1>Certifications</h1>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className={classes.card}>
                        <h1>Certifications</h1>
                    </CardContent>
                </Card>
            </div>
            
        </div>
    );
}

export default LandingPage;