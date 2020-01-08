import React from 'react';
//Components
import Header from '../Header/Header';
import HeaderLinks from '../Header/HeaderLinks';
import Grid from '@material-ui/core/Grid';
import GridItem from '../Grid/GridItem';
import Divider from '@material-ui/core/Divider';
import ContactDetails from './ContactDetails';

//Styles
import { makeStyles } from '@material-ui/core';
import "animate.css/animate.min.css";
import Footer from '../Footer/Footer';
import ScrollAnimation from 'react-animate-on-scroll';
import Typography from '@material-ui/core/Typography';
import ContactMap from './ContactMap';
import ContactForm from './ContactForm';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import ScrollUpButton from 'react-scroll-up-button';

import backgroundImg from '../../assets/img/contact-bg.jpg';
import styles from './contactFormStyle';

const useStyles = makeStyles(styles);

const logoBlack = require ('../../assets/img/logo-black-large.png');


const Contact = () => {

    const classes = useStyles();

    return (
        <div style={{backgroundImage: `url(${backgroundImg})`}}>
            <Header
                rightLinks={<HeaderLinks />}
                fixed
                color="white"
                logoC={logoBlack}
            />
            <div style={{width: "100%", height: "100%"}}>
                <div style={{backgroundColor: "rgba(255,255,255,0.6)"}}>
                    <ScrollAnimation animateIn="slideInDown" animateOnce>
                        <div>
                            <Typography variant="h3" style={{paddingTop: "3em", textAlign: "center"}}>
                                Contact Us
                            </Typography>
                        </div>
                    </ScrollAnimation>
                    <Divider style={{margin: "auto", marginBottom: "2em", width: "30%", backgroundColor: "#030303"}}/>
                    <div>
                        <Grid container justify="center" alignItems="center">
                            <GridItem xs={12} s={12} lg={12} style={{height: "80vh", padding: "0"}}>
                                <ContactMap/>
                            </GridItem>
                            <ScrollUpButton style={{width: 40, height: 40}} ToggledStyle={{right: 10}}/>
                            <GridItem xs={12} s={12} m={6} lg={6} className={classes.formField}>
                                <Card className={classes.cardForm}>
                                    <CardContent>
                                        <ContactForm/>
                                    </CardContent>
                                </Card>
                            </GridItem>
                            <GridItem xs={12} s={12} m={6} lg={6} className={classes.formField}>
                                <Card className={classes.cardForm}>
                                    <CardContent>
                                        <ContactDetails/>
                                    </CardContent>
                                </Card>
                            </GridItem>
                        </Grid>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Contact;