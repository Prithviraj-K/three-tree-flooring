//React
import React from 'react';
//Components
import Parallax from "./Parallax/Parallax.js";
import GridContainer from "./Grid/GridContainer.js";
import GridItem from "./Grid/GridItem.js";
import SectionPills from './SectionPills/SectionPills';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import HeaderLinks from './Header/HeaderLinks';
import ScrollAnimation from 'react-animate-on-scroll';
//Material
import Typography from '@material-ui/core/Typography/Typography';
import Divider from '@material-ui/core/Divider';

//Styles
import styles from "../assets/img/jss/components.js";
import { makeStyles } from '@material-ui/core';
import "animate.css/animate.min.css";

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
            <ScrollAnimation animateIn="fadeInDown" animateOnce>
                <Parallax image={require("../assets/img/bg4.jpg")}>
                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem >
                                <ScrollAnimation animateIn="flipInX" animateOnce>
                                    <div>
                                        <Typography variant="h1" className={classes.title}>
                                            Three Trees Flooring
                                        </Typography>
                                    </div>
                                </ScrollAnimation>
                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>
            </ScrollAnimation>
            
            <div>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <Typography variant="h4" align="left" color="textPrimary" style={{fontSize: "4vw", textAlign: "center", paddingTop: "1.5em", paddingLeft: "2em"}}>
                        <span style={{textShadow: "1px 1px #000000"}}>Premium Finished Hardwood</span>
                    </Typography>
                </ScrollAnimation>
                <Divider style={{marginTop: "2em"}}/>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div style={{marginTop: "0em", paddingTop: "0", paddingRight: "2em", paddingLeft: "2em"}}>
                        <SectionPills/>
                    </div>
                </ScrollAnimation>
                <Divider style={{marginTop: "2em"}}/>
                <div>
                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" animateOnce>
                        <Typography variant="h6" align="center" style={{padding: "2em", marginTop:"2em"}}>
                            Inspired by the company’s European roots we provide engineered hardwood flooring 
                            encompassed with European quality, design and innovation with a Canadian touch.
                        </Typography>
                    </ScrollAnimation>
                <Divider style={{marginTop: "2em"}}/>
                </div>
                
            </div>
            <Footer/>
        </div>
    );
}

export default LandingPage;