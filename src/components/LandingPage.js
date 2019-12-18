import React from 'react';
import NavBar from "./NavBar";
import classNames from "classnames";
import Parallax from "./Parallax/Parallax.js";
import GridContainer from "./Grid/GridContainer.js";
import GridItem from "./Grid/GridItem.js";
import Card from '@material-ui/core/Card/Card';

import styles from "../assets/img/jss/components.js";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(styles);

const LandingPage = (props) => {
    const classes = useStyles();
    return (
        <div>
            <NavBar/>
            <Parallax image={require("../assets/img/bg.png")}>
                <div className={classes.container}>
                <GridContainer>
                    <GridItem>
                    <div className={classes.brand}>
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
                    <h1> Hello </h1>
                </Card>
                <Card>
                    <h1> Hello </h1>
                </Card>
                <Card>
                    <h1> Hello </h1>
                </Card>
                <Card>
                    <h1> Hello </h1>
                </Card>
                <Card>
                    <h1> Hello </h1>
                </Card>
                <Card>
                    <h1> Hello </h1>
                </Card>
                <Card>
                    <h1> Hello </h1>
                </Card>
                <Card>
                    <h1> Hello </h1>
                </Card>
                <Card>
                    <h1> Hello </h1>
                </Card>
                <Card>
                    <h1> Hello </h1>
                </Card>
            </div>
        </div>
    );
}

export default LandingPage;