import React from 'react';
import Header from '../Header/Header';
import HeaderLinks from '../Header/HeaderLinks';

import { makeStyles } from "@material-ui/core/styles";
import styles from "./panelStyle";

import Fade from 'react-reveal';

import Button from "../CustomButtons/Button.js";

import panelPDF from '../../assets/versailles-panels.pdf';

import { Typography, CardContent} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import ScrollUpButton from "react-scroll-up-button";
import Grid from '@material-ui/core/Grid';
import CardPanel from './CardPanel';
import Parallax from '../Parallax/Parallax';

import Footer from '../Footer/Footer';

import Card from '@material-ui/core/Card';

import imgBg from "../../assets/img/whiteOakTexture.jpg";

const logoBlack = require('../../assets/img/logo-black-large.png');

const useStyles = makeStyles(styles);

const panelList = [
    { key: 1, name: "Victoria" },
    { key: 2, name: "Cratose" },
    { key: 3, name: "Carmina" },
    { key: 4, name: "Gloria" },
    { key: 5, name: "Galina" },
    { key: 6, name: "Pisa" },
    { key: 7, name: "Diana" },
    { key: 8, name: "Alvina" }

];

const Panels = () => {

    const classes = useStyles();

    return (
        <Fade>
            <div style={{ backgroundImage: `url(${imgBg})`, backgroundAttachment: "fixed" }}>
                <Header
                    rightLinks={<HeaderLinks />}
                    fixed
                    color="white"
                    logoC={logoBlack}
                />
                <div className={classes.divBody}>
                    <Typography variant="h3" className={classes.titlePad}>
                        Collection
                        </Typography>
                    <Typography variant="h5" className={classes.subPad}>
                        Versailles Panels
                        </Typography>
                    <Divider className={classes.dividerT} />
                </div>
                <div>
                    <Grid
                        container
                        spacing={1}
                        className={classes.gridCont}
                        align="center"
                        justify="center"
                        textAlign="center"
                    >
                        {/* VICTORIA PANELS */}
                        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                            <img src={require('../../assets/img/panels/victoria-bg.png')} className={classes.imgLeft} />
                            <Typography variant="h3" className={classes.panelTitle}>
                                Victoria
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={7} lg={7} xl={7} alignItems="center" justify="center" textAlign="center">
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                                    <CardPanel name="Victoria" />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                                    <CardPanel name="Victoria Bleach" />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                                    <CardPanel name="Victoria Walnut" />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                                    <CardPanel name="Victoria Teak" />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                                    <CardPanel name="Victoria Oak" />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                                    <CardPanel name="Victoria Merbau" />
                                </Grid>
                            </Grid>
                        </Grid>
                        <ScrollUpButton style={{ width: 40, height: 40 }} ToggledStyle={{ right: 10 }} />
                    </Grid>
                </div>
                <Divider style={{ height: "1em", margin: "2em 0" }} />
                <div>
                    <Grid
                        container
                        spacing={1}
                        className={classes.gridCont}
                        align="center"
                        justify="center"
                        textAlign="center"
                    >
                        {/* CHEVRON PANELS */}
                        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                            <img src={require('../../assets/img/panels/chevron-bg.png')} className={classes.imgLeft} />
                            <Typography variant="h3" className={classes.panelTitle}>
                                Chevron
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={7} lg={7} xl={7} alignItems="center" justify="center" textAlign="center">
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                                    <CardPanel name="Chevron" />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                                    <CardPanel name="Chevron European Oak" />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                                    <CardPanel name="Chevron Herringbone Oak" />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                                    <CardPanel name="Chevron Ash Brownie" />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                                    <CardPanel name="Chevron Walnut" />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                                    <CardPanel name="Chevron Silver Metallic" />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <div style={{textAlign: "center", marginBottom: "2em"}}>
                        <Button 
                            color="primary"
                            round
                            href={panelPDF}
                            target="_blank"
                            style={{fontSize: "1.2em"}}
                        >
                            View All Panels
                        </Button>
                    </div>
                </div>
                <Footer />
            </div>
        </Fade>
    );
}

export default Panels;