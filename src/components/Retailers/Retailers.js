import React from 'react';
import { Link } from 'react-router-dom';
//Components
import Header from '../Header/Header';
import HeaderLinks from '../Header/HeaderLinks';
import Grid from '@material-ui/core/Grid';
import GridItem from '../Grid/GridItem';
import Divider from '@material-ui/core/Divider';
import PaperRetailers from './PaperRetailers';
import RetailMaps from './RetailMaps';
import Button from "../CustomButtons/Button.js";

//Styles
import { makeStyles } from '@material-ui/core';
import Footer from '../Footer/Footer';
import Typography from '@material-ui/core/Typography';

import ScrollUpButton from 'react-scroll-up-button';

import Fade from 'react-reveal/Fade';
import styles from './retailerStyle';

const useStyles = makeStyles(styles);

const logoBlack = require('../../assets/img/logo-black-large.png');

const Retailers = () => {

    const classes = useStyles();

    return (
        <Fade>
            <div style={{ backgroundColor: "#B8BDB5", overflow: "hidden" }}>
                <Header
                    rightLinks={<HeaderLinks />}
                    fixed
                    color="white"
                    logoC={logoBlack}
                />
                <div>
                    <Grid container justify="center" alignItems="center" style={{ marginTop: "5em" }}>
                        <GridItem xs={12} s={12} md={12} lg={12} className={classes.mapGrid}>
                            <RetailMaps />
                        </GridItem>
                        <ScrollUpButton style={{ width: 40, height: 40 }} ToggledStyle={{ right: 10 }} />
                        <GridItem xs={12} s={12} md={12} lg={12} style={{ backgroundColor: "#E0E2DB", marginTop: "2em", paddingBottom: "3em" }}>
                            <div className={classes.allRetailDiv}>
                                <Grid container justify="center" alignItems='center'>
                                    <GridItem xs={12} s={12}>
                                        <Fade top>
                                            <div style={{ marginTop: "2em" }}>
                                                <Typography variant="h4" align="center">
                                                    List of Retailers
                                                </Typography>
                                            </div>
                                        </Fade>
                                        <Divider style={{ margin: "auto", marginBottom: "2em", width: "20%", backgroundColor: "#030303" }} />
                                    </GridItem>
                                    <GridItem xs={12} s={12} md={4} lg={4} className={classes.gridItem}>
                                        <Fade bottom>
                                            <PaperRetailers
                                                label="A"
                                                name="LV Hardwood Flooring"
                                                address="5050 Dufferin St #101, North York, ON M3H 5T5"
                                                phone="(647)728-1111"
                                                link="https://lvflooring.ca/"
                                            />
                                        </Fade>
                                    </GridItem>
                                    <GridItem xs={12} s={12} md={4} lg={4} className={classes.gridItem}>
                                        <Fade bottom>
                                            <PaperRetailers
                                                label="B"
                                                name="Acadian Flooring Centre"
                                                address="162 Bullock Dr #14, Markham, ON L3P 1W2"
                                                phone="(905)294-9575"
                                                link="http://www.acadianflooring.com/"
                                            />
                                        </Fade>
                                    </GridItem>
                                    <GridItem xs={12} s={12} md={4} lg={4} className={classes.gridItem}>
                                        <Fade bottom>
                                            <PaperRetailers
                                                label="C"
                                                name="Greenvalley Flooring"
                                                address="8820 Jane St, Concord, ON L4K 2M9"
                                                phone="(905)761-1537"
                                                link="http://www.greenvalleyflooring.ca/"
                                            />
                                        </Fade>
                                    </GridItem>
                                    <GridItem xs={12} s={12} md={4} lg={4} className={classes.gridItem}>
                                        <Fade bottom>
                                            <PaperRetailers
                                                label="D"
                                                name="Capital Hardwood Floors"
                                                address="1015 Dupont St, Toronto, ON M6H 1Z7"
                                                phone="(416)536-2200"
                                                link="http://www.capitalfloor.com/"
                                            />
                                        </Fade>
                                    </GridItem>
                                    <GridItem xs={12} s={12} md={4} lg={4} className={classes.gridItem}>
                                        <Fade bottom>
                                            <PaperRetailers
                                                label="E"
                                                name="Jonathon's Perron Floor Coverings"
                                                address="230 Anchor Rd, Hamilton, ON L8W 3R2"
                                                phone="(905)575-3131"
                                                link="https://www.jonathonsperron.com/"
                                            />
                                        </Fade>
                                    </GridItem>
                                    <GridItem xs={12} s={12} md={4} lg={4} className={classes.gridItem}>
                                        <Fade bottom>
                                            <PaperRetailers
                                                label="F"
                                                name="Exotic Woods Inc"
                                                address="5229 Harvester Rd, Burlington, ON L7L 5L4"
                                                phone="(905)335-8066"
                                                link="https://exotic-woods.com/"
                                            />
                                        </Fade>
                                    </GridItem>
                                    <GridItem xs={12} s={12} md={4} lg={4} className={classes.gridItem}>
                                        <Fade bottom>
                                            <PaperRetailers
                                                label="G"
                                                name="Flatout Flooring"
                                                address="3537 White Oak Rd, London, ON N6E 3A1"
                                                phone="(519)681-7771"
                                                link="https://flatoutflooring.ca/"
                                            />
                                        </Fade>
                                    </GridItem>
                                    <GridItem xs={12} s={12} md={4} lg={4} className={classes.gridItem}>
                                        <Fade bottom>
                                            <PaperRetailers
                                                label="H"
                                                name="Emporium Carpet & Flooring"
                                                address="494 Eastchester Ave E, St. Catharines, ON L2M 6S3"
                                                phone="(905)682-0107"
                                                link="http://carpetemporium.ca/"
                                            />
                                        </Fade>
                                    </GridItem>
                                    <GridItem xs={12} s={12} md={4} lg={4} className={classes.gridItem}>
                                        <Fade bottom>
                                            <PaperRetailers
                                                label="I"
                                                name="Fabbri Tile & Carpet Inc."
                                                address="520 Helena St, Point Edward, ON N7V 1R9"
                                                phone="(226) 778-4601"
                                                link="https://www.fabbritileandcarpet.ca/"
                                            />
                                        </Fade>
                                    </GridItem>
                                    <GridItem xs={12} s={12} md={4} lg={4} className={classes.gridItem}>
                                        <Fade bottom>
                                            <PaperRetailers
                                                label="J"
                                                name="FloorBank"
                                                address="1020 Brock Road, Unit #4 Pickering, ON L1W 3H2"
                                                phone="(888)302-5537"
                                                link="http://floorbank.ca"
                                            />
                                        </Fade>
                                    </GridItem>
                                    <GridItem xs={12} s={12} md={4} lg={4} className={classes.gridItem}>
                                        <Fade bottom>
                                            <PaperRetailers
                                                label="K"
                                                name="Bolton Carpet & Interiors"
                                                address="12388 Hwy 50, Bolton, ON L7E 1M7"
                                                phone="(905) 951-3588"
                                                link="http://boltoncarpet.com/"
                                            />
                                        </Fade>
                                    </GridItem>
                                    <GridItem xs={12} s={12} md={4} lg={4} className={classes.gridItem}>
                                        <Fade bottom>
                                            <PaperRetailers
                                                label="L"
                                                name="Roman’s Hardwood Floor & Stairs"
                                                address="16995 Yonge Street Newmarket, Ontario"
                                                phone="(905)830-4111"
                                                link="http://www.romanshardwood.ca/"
                                            />
                                        </Fade>
                                    </GridItem>
                                </Grid>
                            </div>
                        </GridItem>
                    </Grid>
                    <div style={{ padding: "1em", paddingBottom: "2em", backgroundColor: "#FFFFFF" }}>
                        <Fade bottom>
                            <Typography variant="h5" className={classes.addressText}>
                                Interested in becoming a retailer? Get in touch.
                            </Typography>
                            <Link to="/Contact" style={{ textDecoration: "none" }}>
                                <Button color="primary" className={classes.contactBtn}>
                                    Contact Us
                            </Button>
                            </Link>
                        </Fade>
                    </div>
                </div>
                <Footer />
            </div>
        </Fade>
    );
}

export default Retailers;