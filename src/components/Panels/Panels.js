import React from 'react';
import Header from '../Header/Header';
import HeaderLinks from '../Header/HeaderLinks';

import { makeStyles } from "@material-ui/core/styles";
import styles from "./panelStyle";


import Fade from 'react-reveal/Fade';
import { Typography, CardContent, Button } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import ScrollUpButton from "react-scroll-up-button";
import Grid from '@material-ui/core/Grid';
import CardPanel from './CardPanel';

import Footer from '../Footer/Footer';

import Card from '@material-ui/core/Card';

import imgBg from "../../assets/img/whiteOakTexture.jpg";

const logoBlack = require('../../assets/img/logo-black-large.png');

const useStyles = makeStyles(styles);

const panelList = [
    {key: 1, name: "Victoria"},
    {key: 2, name: "Cratose"},
    {key: 3, name: "Carmina"},
    {key: 4, name: "Gloria"},
    {key: 5, name: "Galina"},
    {key: 6, name: "Pisa"},
    {key: 7, name: "Diana"},
    {key: 8, name: "Alvina"}
    
];

const Panels = () => {

    const classes = useStyles();

    const listItems = panelList.map((number)=>
        <Grid item xs={12} s={6} md={4} lg={4} xl={4}>
            <CardPanel name={number.name} />
        </Grid>
    );

    return (
        <div>
            <Header
                rightLinks={<HeaderLinks />}
                fixed
                color="white"
                logoC={logoBlack}
            />
            <div className={classes.divBody} style={{backgroundImage: `url(${imgBg})`}}>
                <Fade top>
                    <Typography variant="h3" className={classes.titlePad}>
                        Collection
                    </Typography>
                    <Typography variant="h5" className={classes.subPad}>
                        Versailles Panels
                    </Typography>
                </Fade>
                <Divider className={classes.dividerT} />
                <ScrollUpButton style={{ width: 40, height: 40 }} ToggledStyle={{ right: 10 }} />
                <div>
                    <Grid
                        container
                        spacing={1}
                        alignItems="center"
                        justify="center"
                        className={classes.gridCont}
                    >
                        {listItems}
                    </Grid>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Panels;