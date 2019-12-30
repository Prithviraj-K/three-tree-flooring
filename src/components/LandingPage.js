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
                color="transparent"
                changeColorOnScroll={{
                    height: 100,
                    color: "white"
                }}
            />
            <ScrollAnimation animateIn="fadeInDown" animateOnce>
                <div style={{marginTop: "8em"}}>
                    <Typography variant="h4" align="center">
                        THREE TREES FLOORING
                    </Typography>
                    <div style={{width: "30%", margin: "auto", marginBottom: "2em"}}>
                        <Divider/>
                    </div>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" animateOnce>
                <div style={{margin: '2em'}}>
                    <Parallax image={require("../assets/img/bg4.jpg")}/>
                </div>
            </ScrollAnimation>
            
            <div>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <Typography variant="h5" align="center" color="textPrimary" style={{textAlign: "center"}}>
                        Premium Finished Hardwood
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