import React from 'react';
import Header from '../Header/Header';
import HeaderLinks from '../Header/HeaderLinks';

import Fade from 'react-reveal/Fade';
import { Typography} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import ScrollUpButton from "react-scroll-up-button";
import Grid from '@material-ui/core/Grid';

import imgBg from "../../assets/img/whiteOakTexture.jpg";

const logoBlack = require ('../../assets/img/logo-black-large.png');

const listPanels = [
    {key: 1, name: "Victoria", description: "European Oak", description2: "Brushed & Bevelled", sizing: "W. 60x60 cm, 80x80 cm, 100x100 cm", tEl: "T: 185 mm"},
];

const Panels = () => {

    return (
        <div>
            <Header
                rightLinks={<HeaderLinks />}
                fixed
                color="white"
                logoC={logoBlack}
            />
            <div 
                style={{ 
                    width: "100%", 
                    height:"100vh", 
                    backgroundImage: `url(${imgBg})`, 
                    backgroundAttachment: "fixed"
                }}
            >
                <Fade top>
                    <Typography variant="h3" style={{paddingTop: "2em", textAlign: "center"}}>
                        Collection
                    </Typography>
                    <Typography variant="h5" style={{textAlign: "center", marginBottom: "1em"}}>
                        Versailles Panels
                    </Typography>
                </Fade>
                <Divider style={{margin: "auto", marginBottom: "2em", width: "20%", backgroundColor: "#000000"}}/>
                <ScrollUpButton style={{width: 40, height: 40}} ToggledStyle={{right: 10}}/>
                <div>
                    <Grid 
                        container
                        spacing={1}
                        alignItems="center"
                        justify="center"
                        style={{margin: "auto", marginTop: "2em", width: "95%"}}
                    >
                        <Grid item xs={12} s={12} md={6} lg={6}>
                            Panel 1
                        </Grid>
                        <Grid item xs={12} s={12} md={6} lg={6}>
                            Panel 2
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default Panels;