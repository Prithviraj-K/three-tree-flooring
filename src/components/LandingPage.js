//React
import React from 'react';
//Components
import Gallery from './Gallery/Gallery';
import SectionPills from './SectionPills/SectionPills';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import HeaderLinks from './Header/HeaderLinks';
import Fade from 'react-reveal/Fade';
import InstaGallery from './InstaGallery/InstaGallery';

import ScrollUpButton from 'react-scroll-up-button';
//Material
import Typography from '@material-ui/core/Typography/Typography';
import Divider from '@material-ui/core/Divider';

import { makeStyles } from "@material-ui/core/styles";
import styles from './LandingPageStyle';

const logoWhite = require ('../assets/img/logo-white.png');
const logoBlack = require ('../assets/img/logo-black-large.png');
const logos = {logoWhite, logoBlack};

const useStyles = makeStyles(styles);

const LandingPage = (props) => {
    const classes = useStyles();

    return (
        <div>
            <Header
                rightLinks={<HeaderLinks />}
                leftLinks
                fixed
                logoC={logos.logoWhite}
                color="transparent"
                changeColorOnScroll={{
                    height: 450,
                    color: "white"
                }}
            />
            <Fade top>
                <div className={classes.carouselFit}>
                    <Gallery/>
                </div>
            </Fade>
            <ScrollUpButton style={{width: 40, height: 40}} ToggledStyle={{right: 10}}/>
            <div>
                <div>
                    <Fade>
                        <Typography variant="h6" align="center" className={classes.pStyle}>
                            Inspired by the company’s European roots we provide engineered hardwood flooring 
                            encompassed with European quality, design and innovation with a Canadian touch.
                        </Typography>
                    </Fade>
                </div>
            </div>
            <div>
                <div style={{backgroundColor: "#b8bdb5", marginTop: "0em", paddingTop: "0", paddingRight: "2em", paddingLeft: "2em", paddingBottom: "2em"}}>
                    <SectionPills/>
                </div>
            </div>
            <div style={{paddingTop: "2em", backgroundColor: "#E0E2DB"}}>
               <InstaGallery/>
            </div>
            <Footer/>
        </div>
    );
}

export default LandingPage;