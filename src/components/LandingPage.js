//React
import React from 'react';
//Components
import Gallery from './Gallery/Gallery';
import SectionPills from './SectionPills/SectionPills';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import HeaderLinks from './Header/HeaderLinks';
import Fade from 'react-reveal/Fade';

import ScrollUpButton from 'react-scroll-up-button';
//Material
import Typography from '@material-ui/core/Typography/Typography';
import Divider from '@material-ui/core/Divider';

const logoWhite = require ('../assets/img/logo-white.png');
const logoBlack = require ('../assets/img/logo-black-large.png');
const logos = {logoWhite, logoBlack};

const LandingPage = (props) => {
    return (
        <div>
            <Header
                rightLinks={<HeaderLinks />}
                leftLinks
                fixed
                logoC={logos.logoWhite}
                color="transparent"
                changeColorOnScroll={{
                    height: 550,
                    color: "white"
                }}
            />
            <Fade top>
                <div style={{margin: '0', marginBottom: "2em"}}>
                    <Gallery/>
                </div>
            </Fade>
            <ScrollUpButton style={{width: 40, height: 40}} ToggledStyle={{right: 10}}/>
            <div>
                <Divider style={{marginTop: "2em"}}/>
                <div>
                    <Fade bottom>
                        <Typography variant="h6" align="center" style={{padding: "2em", marginTop:"2em"}}>
                            Inspired by the company’s European roots we provide engineered hardwood flooring 
                            encompassed with European quality, design and innovation with a Canadian touch.
                        </Typography>
                    </Fade>
                    <Divider style={{marginTop: "2em"}}/>
                </div>
            </div>
            <div style={{marginBottom: "2em"}}>
                <div style={{marginTop: "0em", paddingTop: "0", paddingRight: "2em", paddingLeft: "2em"}}>
                    <SectionPills/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default LandingPage;