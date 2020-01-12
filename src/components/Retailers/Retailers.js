import React from 'react';
//Components
import Header from '../Header/Header';
import HeaderLinks from '../Header/HeaderLinks';
import Grid from '@material-ui/core/Grid';
import GridItem from '../Grid/GridItem';
import Divider from '@material-ui/core/Divider';
import PaperRetailers from './PaperRetailers';
import RetailMaps from './RetailMaps';
//Styles
import { makeStyles } from '@material-ui/core';
import "animate.css/animate.min.css";
import Footer from '../Footer/Footer';
import ScrollAnimation from 'react-animate-on-scroll';
import Typography from '@material-ui/core/Typography';

import ScrollUpButton from 'react-scroll-up-button';
import backgroundImg from '../../assets/img/collection-bg.jpg';

import styles from './retailerStyle';

const useStyles = makeStyles(styles);

const logoBlack = require ('../../assets/img/logo-black-large.png');

const Retailers = () => {

    const classes = useStyles();

    return (
        <div style={{backgroundImage: `url(${backgroundImg})`}}>
            <div style={{backgroundColor: "rgba(255,255,255,0.9)"}}>
                <Header
                    rightLinks={<HeaderLinks />}
                    fixed
                    color="white"
                    logoC={logoBlack}
                />
                <ScrollAnimation animateIn="slideInDown" animateOnce>
                    <div>
                        <Typography variant="h3" style={{paddingTop: "3em", textAlign: "center"}}>
                            Retailers
                        </Typography>
                    </div>
                </ScrollAnimation>
                <Divider style={{margin: "auto", marginBottom: "2em", width: "20%", backgroundColor: "#030303"}}/>
                <div>
                    <Grid container justify="center" alignItems="center">
                        <GridItem xs={12} s={12} lg={12} style={{height: "35em", margin: "0", padding: "0"}}>
                            <ScrollAnimation animateIn="fadeIn" animateOnce delay={250}>
                                <RetailMaps/>
                            </ScrollAnimation>
                        </GridItem>
                        <ScrollUpButton style={{width: 40, height: 40}} ToggledStyle={{right: 10}}/>
                        <GridItem xs={12} s={12} md={6} lg={4} className={classes.gridItem}>
                            <ScrollAnimation animateIn="fadeIn" animateOnce>
                                <PaperRetailers 
                                    label="A"
                                    name="LV Hardwood Flooring"
                                    address="5050 Dufferin St #101, North York, ON M3H 5T5"
                                    phone="(647)728-1111"
                                    link="https://lvflooring.ca/"
                                />
                            </ScrollAnimation>
                        </GridItem>
                        <GridItem xs={12} s={12} md={6} lg={4} className={classes.gridItem}>
                            <ScrollAnimation animateIn="fadeIn" animateOnce>
                                <PaperRetailers
                                    label="B"
                                    name="Acadian Flooring Centre"
                                    address="162 Bullock Dr #14, Markham, ON L3P 1W2"
                                    phone="(905)294-9575"
                                    link="http://www.acadianflooring.com/"
                                />
                            </ScrollAnimation>
                        </GridItem>
                        <GridItem xs={12} s={12} md={6} lg={4} className={classes.gridItem}>
                            <ScrollAnimation animateIn="fadeIn" animateOnce>
                                <PaperRetailers
                                    label="C"
                                    name="Greenvalley Flooring"
                                    address="8820 Jane St, Concord, ON L4K 2M9"
                                    phone="(905)761-1537"
                                    link="http://www.greenvalleyflooring.ca/"
                                />
                            </ScrollAnimation>
                        </GridItem>
                        <GridItem xs={12} s={12} md={6} lg={4} className={classes.gridItem}>
                            <ScrollAnimation animateIn="fadeIn" animateOnce>
                                <PaperRetailers 
                                    label="D"
                                    name="Capital Hardwood Floors"
                                    address="1015 Dupont St, Toronto, ON M6H 1Z7"
                                    phone="(416)536-2200"
                                    link="http://www.capitalfloor.com/"
                                />
                            </ScrollAnimation>
                        </GridItem>
                        <GridItem xs={12} s={12} md={6} lg={4} className={classes.gridItem}>
                            <ScrollAnimation animateIn="fadeIn" animateOnce>
                                <PaperRetailers 
                                    label="E"
                                    name="Jonathon's Perron Floor Coverings"
                                    address="230 Anchor Rd, Hamilton, ON L8W 3R2"
                                    phone="(905)575-3131"
                                    link="https://www.jonathonsperron.com/"
                                />
                            </ScrollAnimation>
                        </GridItem>
                        <GridItem xs={12} s={12} md={6} lg={4} className={classes.gridItem}>
                            <ScrollAnimation animateIn="fadeIn" animateOnce>
                                <PaperRetailers
                                    label="F"
                                    name="Exotic Woods Inc"
                                    address="5229 Harvester Rd, Burlington, ON L7L 5L4"
                                    phone="(905)335-8066"
                                    link="https://exotic-woods.com/"
                                />
                            </ScrollAnimation>
                        </GridItem>
                        <GridItem xs={12} s={12} md={6} lg={4} className={classes.gridItem}>
                            <ScrollAnimation animateIn="fadeIn" animateOnce>
                                <PaperRetailers
                                    label="G"                     
                                    name="Flatout Flooring"
                                    address="3537 White Oak Rd, London, ON N6E 3A1"
                                    phone="(519)681-7771"
                                    link="https://flatoutflooring.ca/"
                                />
                            </ScrollAnimation>
                        </GridItem>
                        <GridItem xs={12} s={12} md={6} lg={4} className={classes.gridItem}>
                            <ScrollAnimation animateIn="fadeIn" animateOnce>
                                <PaperRetailers
                                    label="H"
                                    name="Emporium Carpet & Flooring"
                                    address="494 Eastchester Ave E, St. Catharines, ON L2M 6S3"
                                    phone="(905)682-0107"
                                    link="http://carpetemporium.ca/"
                                />
                            </ScrollAnimation>
                        </GridItem>
                        <GridItem xs={12} s={12} md={6} lg={4} className={classes.gridItem}>
                            <ScrollAnimation animateIn="fadeIn" animateOnce>
                                <PaperRetailers
                                    label="I"
                                    name="Fabbri Tile & Carpet Inc."
                                    address="520 Helena St, Point Edward, ON N7V 1R9"
                                    phone="(226) 778-4601"
                                    link="https://www.fabbritileandcarpet.ca/"
                                />
                            </ScrollAnimation>
                        </GridItem>
                        <GridItem xs={12} s={12} md={6} lg={4} className={classes.gridItem}>
                            <ScrollAnimation animateIn="fadeIn" animateOnce>
                                <PaperRetailers
                                    label="J"
                                    name="FloorBank"
                                    address="1020 Brock Road, Unit #4 Pickering, ON L1W 3H2"
                                    phone="(888)302-5537"
                                    link="http://floorbank.ca"
                                />
                            </ScrollAnimation>
                        </GridItem>
                        <GridItem xs={12} s={12} md={6} lg={4} className={classes.gridItem}>
                            <ScrollAnimation animateIn="fadeIn" animateOnce>
                                <PaperRetailers
                                    label="K" 
                                    name="Bolton Carpet & Interiors"
                                    address="12388 Hwy 50, Bolton, ON L7E 1M7"
                                    phone="(905) 951-3588"
                                    link="http://boltoncarpet.com/"
                                />
                            </ScrollAnimation>
                        </GridItem>
                        <GridItem xs={12} s={12} md={6} lg={4} className={classes.gridItem}>
                            <ScrollAnimation animateIn="fadeIn" animateOnce>
                                <PaperRetailers 
                                    label="L"
                                    name="Roman’s Hardwood Floor & Stairs"
                                    address="16995 Yonge Street Newmarket, Ontario"
                                    phone="(905)830-4111"
                                    link="http://www.romanshardwood.ca/"
                                />
                            </ScrollAnimation>
                        </GridItem>
                    </Grid>
                </div>
                <ScrollAnimation animateIn="fadeInUp" animateOnce offset={50}>
                    <Footer/>
                </ScrollAnimation>
            </div>
        </div>
    );
}

export default Retailers;