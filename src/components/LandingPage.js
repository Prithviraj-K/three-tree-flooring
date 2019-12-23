//React
import React from 'react';
import classNames from "classnames";
//Components
import Parallax from "./Parallax/Parallax.js";
import GridContainer from "./Grid/GridContainer.js";
import GridItem from "./Grid/GridItem.js";
import SectionPills from './SectionPills/SectionPills';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import HeaderLinks from './Header/HeaderLinks';
//Material
import Typography from '@material-ui/core/Typography/Typography';
import Divider from '@material-ui/core/Divider';

//Styles
import styles from "../assets/img/jss/components.js";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(styles);

const LandingPage = (props) => {
    const classes = useStyles();
    return (
        <div>
            <Header
                rightLinks={<HeaderLinks />}
                fixed
                color="dark"
                changeColorOnScroll={{
                    height: 400,
                    color: "transparent"
                }}
            />
            <Parallax image={require("../assets/img/bg4.jpg")}>
                <div className={classes.container}>
                <GridContainer>
                    <GridItem >
                    <div>
                        <h1 className={classes.title}>Three Trees Flooring</h1>
                        <h3 className={classes.subtitle}>
                            Subtitle
                        </h3>
                    </div>
                    </GridItem>
                </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)} style={{paddingBottom: "2em"}}>
                <Typography variant="h4" align="left" color="textPrimary" style={{paddingTop: "1.5em", paddingLeft: "2em"}}>
                    <span style={{textShadow: "1px 1px #000000"}}>Premium Finished Hardwood</span>
                </Typography>
                <Divider style={{marginTop: "2em"}}/>
                <div style={{marginTop: "0em", paddingTop: "0", paddingRight: "2em", paddingLeft: "2em"}}>
                    <SectionPills/>
                </div>
                <Divider style={{marginTop: "2em"}}/>
                <div>
                <Typography variant="h6" align="center" style={{padding: "2em", marginTop:"2em"}}>
                    Inspired by the company’s European roots we provide engineered hardwood flooring 
                    encompassed with European quality, design and innovation with a Canadian touch.
                </Typography>
                <Divider style={{marginTop: "2em"}}/>
                </div>
                
            </div>
            <Footer/>
        </div>
    );
}

export default LandingPage;