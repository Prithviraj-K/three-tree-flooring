import React from 'react';
//Components
import Header from '../Header/Header';
import HeaderLinks from '../Header/HeaderLinks';
//Styles
import styles from "../../assets/img/jss/components.js";
import { makeStyles } from '@material-ui/core';
import "animate.css/animate.min.css";
import Footer from '../Footer/Footer';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Typography from '@material-ui/core/Typography'; 

const Retailers = () => {
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
            <ScrollAnimation animateIn="flipInX" animateOut="flipOutX">
                <div>
                    <Typography variant="h1" style={{marginTop: "1em", textAlign: "center", padding: "1em"}}>
                        Retailers
                    </Typography>
                </div>
            </ScrollAnimation>
            <Footer/>
            
        </div>
    );
}

export default Retailers;