//React
import React from 'react';
//Components
import Gallery from './Gallery/Gallery';
import SectionPills from './SectionPills/SectionPills';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import HeaderLinks from './Header/HeaderLinks';
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollUpButton from 'react-scroll-up-button';
//Material
import Typography from '@material-ui/core/Typography/Typography';
import Divider from '@material-ui/core/Divider';

//Styles
import "animate.css/animate.min.css";

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
                    height: 400,
                    color: "white"
                }}
            />
            <ScrollAnimation animateIn="fadeInDown" animateOnce>
                <div style={{margin: '0', marginBottom: "2em"}}>
                    <Gallery/>
                </div>
            </ScrollAnimation>
            <ScrollUpButton style={{width: 40, height: 40}} ToggledStyle={{right: 10}}/>
            <div>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <Typography variant="h3" align="center" color="textPrimary" style={{textAlign: "center"}}>
                        Premium Finished Hardwood
                    </Typography>
                </ScrollAnimation>
                <Divider style={{marginTop: "2em"}}/>
            </div>
            <div>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div style={{marginTop: "0em", paddingTop: "0", paddingRight: "2em", paddingLeft: "2em"}}>
                        <SectionPills/>
                    </div>
                </ScrollAnimation>
            </div>
            <div>
                <Divider/>
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